import * as ts from "typescript";

function getVisitor(context: any): ts.Visitor
{
	const visit: ts.Visitor = (node) => {
		const parent = node.parent;

		if (parent !== undefined) {
			if (ts.isImportDeclaration(parent) && ts.isStringLiteral(node) && node.text.slice(-5) == ".less")
			{
				return ts.createStringLiteral(node.text.slice(0, -5) + ".css");
			}
		}

		return ts.visitEachChild(node, visit, context);
	};

	return visit;
}

export default function parseExpressions<T extends ts.Node>(program: ts.Program): ts.TransformerFactory<T>
{
	return (context) => {
		return (node) => ts.visitNode(node, getVisitor(context));
	};
}