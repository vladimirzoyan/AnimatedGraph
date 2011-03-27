/*
	Graph.js
	Directed Graph Class.
	Nodes must be objects that are uniquely identifiable by the toString method.
*/

function Graph(){
	this.nodes = {};
	this.edges = {};
};

Graph.prototype.addEdge=function(on,dn){
	this.addNode(on);
	this.addNode(dn);

	on=this.getNode(on);
	dn=this.getNode(dn);
	var key=""+on+dn;

	for(edge in this.edges){
		if(edge==key){
			return;
		}
	}
	this.edges[key] = {origin:on,destination:dn};
};

Graph.prototype.remEdge=function(on,dn){
	var key=""+on+dn;
	
	for(edge in this.edges)
		if(edge==key)
			delete this.edges[edge];
			return;
};

Graph.prototype.addNode=function(n){
	if(!n)
		return;
	if(this.getNode(n))
		return;
	this.nodes[n]=n;
};

Graph.prototype.remNode=function(n){
	if(!n)
		return;
	n = this.getNode(n);
	if(!n)
		return;
	for(edge in this.edges)
		if(this.edges[edge].origin==n || this.edges[edge].destination==n)
			delete this.edges[edge];
	delete this.nodes[n];
};

Graph.prototype.getNode=function(n){
	for(node in this.nodes)
		if(node==n)
			return this.nodes[node];
	return null;
};

Graph.prototype.toString=function(){
	var text = "Directed Weighted Graph object.";
	for(node in this.nodes){
		text+="\n"+node+" --> ";
		for(edge in this.edges){
			if(this.edges[edge].origin==node)
				text+=this.edges[edge].destination+", ";
		}
	}
	return text;
};

Graph.prototype.getNeighbours=function(){

};

