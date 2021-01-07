G.AddData({
name:'Example mod',
author:'Orteil',
desc:'why not',
engineVersion:1,
manifest:'modManifest.js',
requires:['Default dataset*'],
sheets:{'spicySheet':'img/spicyModIconSheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	//Finally, we add a trait that amplifies the benefits of consuming hot sauce; it will take on average 20 years to appear once the conditions (knowing the "Hot sauce preparing" tech) is fulfilled.
	new G.Trait({
		name:'test',
		desc:'@your people appreciate [hot sauce] twice as much and will be twice as happy from consuming it.',
		icon:[1,1,'spicySheet'],
		chance:0.1,
		req:{'oral tradition':true},
		effects:[
			{type:'function',func:function(){G.gain('herb', 1000000, 'because');}},//this is a custom function executed when we gain the trait
		],
	});
	
	//There are many other ways of adding and changing content; refer to /data.js, the default dataset, if you want to see how everything is done in the base game. Good luck!
}
});
