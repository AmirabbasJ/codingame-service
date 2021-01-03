import Test from './test.base';

interface Puzzle {
	id: string;
	title: number;
	fastest: boolean;
	reverse: boolean;
	shortest: boolean;
	statement: string;
	testCases: Test[];
	constraints: string;
	stubGenerator: string;
	inputDescription: string;
	outputDescription: string;
}

export default Puzzle;
