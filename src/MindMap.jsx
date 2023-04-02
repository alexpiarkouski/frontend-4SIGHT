import React from 'react';
import ReactFlow, { addEdge, Controls, MiniMap } from 'react-flow-renderer';
import data from './bonds.json';

const getNodeData = (label) => ({
  label,
  type: 'mindmap',
  position: { x: 0, y: 0 },
  draggable: true,
  selectable: true,
  style: { backgroundColor: '#eee', color: '#222' }
});

const getNodes = () => {
  let nodes = [];

  data.forEach((article) => {
    const articleNode = getNodeData(article.article_title);
    nodes.push(articleNode);

    article.major_minor_concepts.forEach((majorMinor) => {
      const majorNode = getNodeData(majorMinor.major_concept.label);
      nodes.push(majorNode);

      if (majorMinor.minor_concepts) {
        majorMinor.minor_concepts.forEach((minor) => {
          const minorNode = getNodeData(minor.label);
          nodes.push(minorNode);

          nodes = addEdge({ source: majorNode.id, target: minorNode.id }, nodes);
        });
      }

      nodes = addEdge({ source: articleNode.id, target: majorNode.id }, nodes);
    });
  });

  return nodes;
};

const MindMap = () => {
  const nodes = getNodes();

  const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

  return (
    <div style={{ height: '100vh', backgroundColor: '#fff' }}>
      <ReactFlow elements={nodes} onLoad={onLoad}>
        <MindMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default MindMap;