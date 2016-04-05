describe("Basic matchers:", function() {
	
	it("The 'toBe' matcher compares with ===",function() {
		var a = 1;
		var b = '1';
		var c= 1;
		
		expect(a).not.toBe(b);
		expect(a).toBe(c);
	});
	
	it("The 'to Equal' matcher works for literals and variables", function() {
		var a = 12;
		var b = 12;
		expect(a).toEqual(b);
		
		var obj1 = {
				name : 'obj',
				type : 'o'
		};
		
		var obj2 = {
				name : 'obj',
				type : 'o'
		};
		expect(obj1).toEqual(obj2);
	});
	
	it("The 'toMatch' matcher if for regex", function() {
		var message = "foo bar baz";
		
		expect(message)
	});
	
});



describe("Hello world function", function() {
	
	it("Says hello", function() {
		expect(helloWorld()).toEqual("Hello World!");
	});
	
	it("Does not say hello", function() {
		expect(helloWorld()).not.toEqual("Hello World");
	});
	
});