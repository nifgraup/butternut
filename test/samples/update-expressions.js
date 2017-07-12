module.exports = [
	{
		description: 'preserves space before ++z if necessary',
		input: `x = "y" +(++z)`,
		output: `x="y"+ ++z`
	},

	{
		description: 'preserves space before (++z) if necessary',
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
	}
];