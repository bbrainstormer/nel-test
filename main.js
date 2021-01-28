G.AddData({
name:'wut',
author:'Orteil',
desc:'why not',
engineVersion:1,
manifest:0,
func:function()
{
	//Finally, we add a trait that amplifies the benefits of consuming hot sauce; it will take on average 20 years to appear once the conditions (knowing the "Hot sauce preparing" tech) is fulfilled.
	new G.Trait({
		name:'test',
		desc:'Lots of food',
		chance:0.1,
		req:{'oral tradition':true},
		effects:[
			{type:'function',func:function(){G.gain('cured meat', 1000000, 'because');}},//this is a custom function executed when we gain the trait
		],
	});
	
	new G.Trait({
	    name:'test2',
	    desc:'More food',
	    chance:0.1,
	    req:{'test':true},
	    effects:[
	    {type:'function',func:function(){
            G.gain('cured meat', 10**100, 'because');
            G.trait.filter( function(tr) {return tr.name != 'test';});}},
            //this is a custom function executed when we gain the trait
            //Gives us meat and removes the first trait
		],
	});
	//There are many other ways of adding and changing content; refer to /data.js, the default dataset, if you want to see how everything is done in the base game. Good luck!
}
});
