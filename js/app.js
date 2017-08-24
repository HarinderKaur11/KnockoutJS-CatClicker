var initialCats=[
	{
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
            nicknames:['TabTab','TBone']
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            nicknames:['Tabby']
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            nicknames:['casper']
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
            nicknames:['suzi']
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            nicknames:['Zzzzz']
        }
];
// even though model is defined inside the view model 
//the functionality is separate which is the main concern
var Cat= function(data){
	this.name=ko.observable(data.name);
	this.clickCount=ko.observable(data.clickCount);
	this.imgSrc=ko.observable(data.imgSrc);
	this.nicknames=ko.observableArray(data.nicknames);
	/*[
			{nick: "guchi"},
			{nick: "dory"},
			{nick: "rose"}
		]
	this.nicknames.push("guchi");
	this.nicknames.push("dory");
	this.nicknames.push("rosy");*/
	this.title=ko.computed(function(){
		var title;
		if(this.clickCount()<10){
				title="NewBorn";
			}
			else if(this.clickCount()>=10 && this.clickCount()<13){
				title="Infant";
			}
			else if(this.clickCount()>=13 && this.clickCount()<20){
				title=("Teenage");
			}
			else if(this.clickCount()>=20 && this.clickCount()<60){
				title=("Adult");
			}
			else if(this.clickCount()>60){
				title=("Old");
			}
			return title;
	},this);
}

var ViewModel=function(){
	var self=this;

	this.catList=ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	var elem=document.getElementById("catlist");
	elem.addEventListener("click",function(e){

	});
	this.currentCat=ko.observable(this.catList()[2]);

	this.setCat=function(clickedCat){
		self.currentCat(clickedCat);
	};

	this.incrementCounter=function(){
	self.currentCat().clickCount(self.currentCat().clickCount()+1);
	}
}

ko.applyBindings(new ViewModel());

