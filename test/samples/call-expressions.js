module.exports = [
	{
		description: 'removes whitespace before parens',
		input: `foo ()`,
		output: `foo()`
	},

	{
		description: 'removes whitespace inside parens',
		input: `foo( a, b , c )`,
		output: `foo(a,b,c)`
	},

	{
		description: 'minifies runtime errors',
		input: `''.startsWith(/a/);`,
		output: `''.startsWith(/a/)`
	}
];
