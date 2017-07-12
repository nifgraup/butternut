module.exports = [
	{
		description: 'preserves space before (++z) if necessary',
		input: `x = "y" +(++z)`,
		output: `x="y"+ ++z`
	},

	{
		description: 'preserves space before ++z if necessary',
		input: `x = "y" + ++z`,
		output: `x="y"+ ++z`
	},

	{
		description: 'preserves space before (-z) if necessary',
		input: `x = -(-z)`,
		output: `x=- -z`
	},

	{
		description: 'preserves space before -z if necessary',
		input: `x = - -z`,
		output: `x=- -z`
	},

	{
		description: 'remove unary converison to number if possible',
		input: `x = +(-z)`,
		output: `x=-z`
	},

	{
		description: 'remove unary converison to number if possible',
		input: `x = + +z`,
		output: `x=+z`
	}
];