import { Component, ReactElement } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface TreeItem {
	id: string;
	name: string;
	parentId: string;
	children?: TreeItem[];
}

export interface LeafClickProps {
	item: TreeItem;
	routes: Omit<TreeItem, 'children'>;
}

export interface TreeSelectProps {
	data: TreeItem[];
	onClick?: () => void;
	onClickLeaf?: (p: LeafClickProps) => void;
	isOpen?: boolean;
	openIds?: TreeItem['id'][];
	isShowTreeId?: boolean;
	itemStyle?: StyleProp<TextStyle>;
	selectedItemStyle?: StyleProp<TextStyle>;
	treeNodeStyle?: {
		openIcon?: ReactElement;
		closeIcon?: ReactElement;
	};
}

declare class TreeSelect extends Component<TreeSelectProps, {}> {}

export default TreeSelect;
