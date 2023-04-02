import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
  XYPosition,
} from 'reactflow';
import create from 'zustand';
import { nanoid } from 'nanoid/non-secure';

import { NodeData } from './MindMapNode';

export type RFState = {
  nodes: Node<NodeData>[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  updateNodeLabel: (nodeId: string, label: string) => void;
  addChildNode: (parentNode: Node, position: XYPosition) => void;
};

const useStore = create<RFState>((set, get) => ({
  nodes: [
    {
      id: 'article_title',
      type: 'title',
      data: { label: 'Understanding Bond Valuation' },
      position: { x: 500, y: 0 },
    },
    {
      id: 'major-1',
      type: 'mindmapmajor',
      data: { label: 'Bond Characteristics' },
      position: { x: 500, y: -150 },
    },
    {
      id: 'minor-1',
      type: 'mindmap',
      data: { label: 'Coupon rate' },
      position: { x: 350, y: -200 },
    },
    {
      id: 'minor-2',
      type: 'mindmap',
      data: { label: 'Maturity date' },
      position: { x: 500, y: -250 },
    },
    {
      id: 'minor-3',
      type: 'mindmap',
      data: { label: 'Current price' },
      position: { x: 650, y: -300 },
    },
    {
      id: 'major-2',
      type: 'mindmapmajor',
      data: { label: 'Bond Valuation' },
      position: { x: 1100, y: -100 },
    },
    {
      id: 'minor-4',
      type: 'mindmap',
      data: { label: 'Calculation of present value of future coupon payments' },
      position: { x: 1000, y: -160 },
    },
    {
      id: 'minor-5',
      type: 'mindmap',
      data: { label: 'Discount rate used is yield to maturity' },
      position: { x: 1100, y: -50 },
    },
    {
      id: 'major-3',
      type: 'mindmapmajor',
      data: { label: 'Coupon Bond Valuation' },
      position: { x: 1100, y: 100 },
    },
    {
      id: 'minor-6',
      type: 'mindmap',
      data: { label: 'Calculation of value of a coupon bond' },
      position: { x: 1000, y: 175 },
    },
    {
      id: 'minor-7',
      type: 'mindmap',
      data: { label: 'Factors in annual/semi-annual coupon payment and par value of the bond' },
      position: { x: 1200, y: 50 },
    },
    {
      id: 'major-4',
      type: 'mindmapmajor',
      data: { label: 'Zero-Coupon Bond Valuation' },
      position: { x: 500, y: 150 },
    },
    {
      id: 'minor-8',
      type: 'mindmap',
      data: { label: 'Calculation of value of a zero-coupon bond' },
      position: { x: 600, y: 230 },
    },
    {
      id: 'minor-9',
      type: 'mindmap',
      data: { label: 'Uses present value of face value' },
      position: { x: 400, y: 325 },
    },
    {
      id: 'major-5',
      type: 'mindmapmajor',
      data: { label: 'Comparison of Bond and Stock Valuation' },
      position: { x: -100, y: -200 },
    },
    {
      id: 'minor-10',
      type: 'mindmap',
      data: { label: 'Changes in interest rates' },
      position: { x: -200, y: -125 },
      draggable: true,
    },
    {
      id: 'minor-11',
      type: 'mindmap',
      data: { label: 'Bonds and stocks are both valued using discounted cash flow analysis' },
      position: { x: -100, y: -275 },
      draggable: true,
    },
    {
      id: 'major-6',
      type: 'mindmapmajor',
      data: { label: 'Reasons for Difference Between Bond Face Value and Market Value' },
      position: { x: -100, y: 100 },
      dragHandle: '.dragHandle',
    },
    {
      id: 'minor-12',
      type: 'mindmap',
      data: { label: 'Bond valuation takes into account both coupon and principal components' },
      position: { x: 100, y: 250 },
      draggable: true,
    },
    {
      id: 'minor-13',
      type: 'mindmap',
      data: { label: "Company's credit rating" },
      position: { x: 100, y: 175 },
      draggable: true,
    },
    {
      id: 'minor-14',
      type: 'mindmap',
      data: { label: 'Time to maturity' },
      position: { x: -200, y: 175 },
      draggable: true,
    },
    {
      id: 'minor-15',
      type: 'mindmap',
      data: { label: 'Call provisions or other embedded options' },
      position: { x: -200, y: 15 },
      draggable: true,
    },
    {
      id: 'minor-16',
      type: 'mindmap',
      data: { label: 'Whether the bond is secured or unsecured' },
      position: { x: -100, y: -35 },
      draggable: true,
    },
  ],
  edges: [
    {
      id: 'edge-a1',
      source: 'article_title',
      target: 'major-1',
    },
    {
      id: 'edge-a2',
      source: 'article_title',
      target: 'major-2',
    },
    {
      id: 'edge-a3',
      source: 'article_title',
      target: 'major-3',
    },
    {
      id: 'edge-a4',
      source: 'article_title',
      target: 'major-4',
    },
    {
      id: 'edge-a5',
      source: 'article_title',
      target: 'major-5',
    },
    {
      id: 'edge-a6',
      source: 'article_title',
      target: 'major-6',
    },
    {
      id: 'edge-1',
      source: 'minor-1',
      target: 'major-1',
    },
    {
      id: 'edge-2',
      source: 'minor-2',
      target: 'major-1',
    },
    {
      id: 'edge-3',
      source: 'minor-3',
      target: 'major-1',
    },
    {
      id: 'edge-4',
      source: 'minor-4',
      target: 'major-2',
    },
    {
      id: 'edge-5',
      source: 'minor-5',
      target: 'major-2',
    },
    {
      id: 'edge-6',
      source: 'minor-6',
      target: 'major-3',
    },
    {
      id: 'edge-7',
      source: 'minor-7',
      target: 'major-3',
    },
    {
      id: 'edge-8',
      source: 'minor-8',
      target: 'major-4',
    },
    {
      id: 'edge-9',
      source: 'minor-9',
      target: 'major-4',
    },
    {
      id: 'edge-8',
      source: 'minor-8',
      target: 'major-4',
    },
    {
      id: 'edge-9',
      source: 'minor-9',
      target: 'major-4',
    },
    {
      id: 'edge-10',
      source: 'minor-10',
      target: 'major-5',
    },
    {
      id: 'edge-11',
      source: 'minor-11',
      target: 'major-5',
    },
    {
      id: 'edge-12',
      source: 'minor-12',
      target: 'major-6',
    },
    {
      id: 'edge-13',
      source: 'minor-13',
      target: 'major-6',
    },
    {
      id: 'edge-14',
      source: 'minor-14',
      target: 'major-6',
    },
    {
      id: 'edge-15',
      source: 'minor-15',
      target: 'major-6',
    },
    {
      id: 'edge-16',
      source: 'minor-16',
      target: 'major-6',
    },
  ],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  updateNodeLabel: (nodeId: string, label: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the changes
          node.data = { ...node.data, label };
        }

        return node;
      }),
    });
  },
  addChildNode: (parentNode: Node, position: XYPosition) => {
    const newNode = {
      id: nanoid(),
      type: 'mindmap',
      data: { label: 'New Node' },
      position,
      dragHandle: '.dragHandle',
      parentNode: parentNode.id,
    };

    const newEdge = {
      id: nanoid(),
      source: parentNode.id,
      target: newNode.id,
    };

    set({
      nodes: [...get().nodes, newNode],
      edges: [...get().edges, newEdge],
    });
  },
}));

export default useStore;
