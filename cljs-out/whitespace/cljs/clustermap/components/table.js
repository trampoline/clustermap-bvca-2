// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.table');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
/**
* generate a table-ordering link for table-headers
*/
clustermap.components.table.order_col = (function order_col(controls,p__23853,col_key,col_name){var map__23863 = p__23853;var map__23863__$1 = ((cljs.core.seq_QMARK_.call(null,map__23863))?cljs.core.apply.call(null,cljs.core.hash_map,map__23863):map__23863);var table_data = map__23863__$1;var current_sort_spec = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__23864 = current_sort_spec__$1;var G__23864__$1 = (((G__23864 == null))?null:cljs.core.keys.call(null,G__23864));var G__23864__$2 = (((G__23864__$1 == null))?null:cljs.core.first.call(null,G__23864__$1));return G__23864__$2;
})();var current_sort_dir = (function (){var G__23865 = current_sort_spec__$1;var G__23865__$1 = (((G__23865 == null))?null:current_sort_key.call(null,G__23865));var G__23865__$2 = (((G__23865__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__23865__$1));return G__23865__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__23863,map__23863__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__23866 = cljs.core._EQ_;var expr__23867 = current_sort_dir;if(cljs.core.truth_(pred__23866.call(null,"asc",expr__23867)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__23866.call(null,"desc",expr__23867)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__23863,map__23863__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__23869 = cljs.core._EQ_;var expr__23870 = current_sort_dir;if(cljs.core.truth_(pred__23869.call(null,"asc",expr__23870)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__23872,owner,opts){var map__23889 = p__23872;var map__23889__$1 = ((cljs.core.seq_QMARK_.call(null,map__23889))?cljs.core.apply.call(null,cljs.core.hash_map,map__23889):map__23889);var controls = cljs.core.get.call(null,map__23889__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__23890 = cljs.core.get.call(null,map__23889__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__23890__$1 = ((cljs.core.seq_QMARK_.call(null,map__23890))?cljs.core.apply.call(null,cljs.core.hash_map,map__23890):map__23890);var table_data = map__23890__$1;var count = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t23891 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t23891 = (function (owner,paginate,table_data,map__23889,controls,size,p__23872,map__23890,from,count,opts,meta23892){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__23889 = map__23889;
this.controls = controls;
this.size = size;
this.p__23872 = p__23872;
this.map__23890 = map__23890;
this.from = from;
this.count = count;
this.opts = opts;
this.meta23892 = meta23892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t23891.cljs$lang$type = true;
clustermap.components.table.t23891.cljs$lang$ctorStr = "clustermap.components.table/t23891";
clustermap.components.table.t23891.cljs$lang$ctorPrWriter = ((function (map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t23891");
});})(map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size))
;
clustermap.components.table.t23891.prototype.om$core$IRender$ = true;
clustermap.components.table.t23891.prototype.om$core$IRender$render$arity$1 = ((function (map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs23894 = (cljs.core.truth_((function (){var and__3625__auto__ = self__.from;if(cljs.core.truth_(and__3625__auto__))
{return (self__.from > (0));
} else
{return and__3625__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__10071__auto____$1,map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3944__auto__ = (0);var y__3945__auto__ = (self__.from - self__.size);return ((x__3944__auto__ > y__3945__auto__) ? x__3944__auto__ : y__3945__auto__);
})());
});})(this__10071__auto____$1,map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs23894))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs23894)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23894))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23895 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs23895))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs23895)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23895))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23895)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs23894,this__10071__auto____$1,map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs23894,this__10071__auto____$1,map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23894),(function (){var attrs23896 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs23896))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs23896)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23896))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23896)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs23894,this__10071__auto____$1,map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs23894,this__10071__auto____$1,map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size))
;
clustermap.components.table.t23891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size){
return (function (_23893){var self__ = this;
var _23893__$1 = this;return self__.meta23892;
});})(map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size))
;
clustermap.components.table.t23891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size){
return (function (_23893,meta23892__$1){var self__ = this;
var _23893__$1 = this;return (new clustermap.components.table.t23891(self__.owner,self__.paginate,self__.table_data,self__.map__23889,self__.controls,self__.size,self__.p__23872,self__.map__23890,self__.from,self__.count,self__.opts,meta23892__$1));
});})(map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t23891 = ((function (map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size){
return (function __GT_t23891(owner__$1,paginate__$1,table_data__$1,map__23889__$2,controls__$1,size__$1,p__23872__$1,map__23890__$2,from__$1,count__$1,opts__$1,meta23892){return (new clustermap.components.table.t23891(owner__$1,paginate__$1,table_data__$1,map__23889__$2,controls__$1,size__$1,p__23872__$1,map__23890__$2,from__$1,count__$1,opts__$1,meta23892));
});})(map__23889,map__23889__$1,controls,map__23890,map__23890__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t23891(owner,paginate,table_data,map__23889__$1,controls,size,p__23872,map__23890__$1,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__23905){var map__23918 = p__23905;var map__23918__$1 = ((cljs.core.seq_QMARK_.call(null,map__23918))?cljs.core.apply.call(null,cljs.core.hash_map,map__23918):map__23918);var record = cljs.core.get.call(null,map__23918__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__23918__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t23919 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t23919 = (function (columns,record,map__23918,p__23905,render_table_row,meta23920){
this.columns = columns;
this.record = record;
this.map__23918 = map__23918;
this.p__23905 = p__23905;
this.render_table_row = render_table_row;
this.meta23920 = meta23920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t23919.cljs$lang$type = true;
clustermap.components.table.t23919.cljs$lang$ctorStr = "clustermap.components.table/t23919";
clustermap.components.table.t23919.cljs$lang$ctorPrWriter = ((function (map__23918,map__23918__$1,record,columns){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t23919");
});})(map__23918,map__23918__$1,record,columns))
;
clustermap.components.table.t23919.prototype.om$core$IRender$ = true;
clustermap.components.table.t23919.prototype.om$core$IRender$render$arity$1 = ((function (map__23918,map__23918__$1,record,columns){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__23918,map__23918__$1,record,columns){
return (function iter__23922(s__23923){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__23918,map__23918__$1,record,columns){
return (function (){var s__23923__$1 = s__23923;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23923__$1);if(temp__4126__auto__)
{var s__23923__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23923__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23923__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23925 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23924 = (0);while(true){
if((i__23924 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__23924);cljs.core.chunk_append.call(null,b__23925,(function (){var vec__23928 = col;var col_key = cljs.core.nth.call(null,vec__23928,(0),null);var col_name = cljs.core.nth.call(null,vec__23928,(1),null);var formatter = cljs.core.nth.call(null,vec__23928,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__23930 = (i__23924 + (1));
i__23924 = G__23930;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23925),iter__23922.call(null,cljs.core.chunk_rest.call(null,s__23923__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23925),null);
}
} else
{var col = cljs.core.first.call(null,s__23923__$2);return cljs.core.cons.call(null,(function (){var vec__23929 = col;var col_key = cljs.core.nth.call(null,vec__23929,(0),null);var col_name = cljs.core.nth.call(null,vec__23929,(1),null);var formatter = cljs.core.nth.call(null,vec__23929,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__23922.call(null,cljs.core.rest.call(null,s__23923__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__23918,map__23918__$1,record,columns))
,null,null));
});})(this__10071__auto____$1,map__23918,map__23918__$1,record,columns))
;return iter__4375__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__23918,map__23918__$1,record,columns))
;
clustermap.components.table.t23919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23918,map__23918__$1,record,columns){
return (function (_23921){var self__ = this;
var _23921__$1 = this;return self__.meta23920;
});})(map__23918,map__23918__$1,record,columns))
;
clustermap.components.table.t23919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23918,map__23918__$1,record,columns){
return (function (_23921,meta23920__$1){var self__ = this;
var _23921__$1 = this;return (new clustermap.components.table.t23919(self__.columns,self__.record,self__.map__23918,self__.p__23905,self__.render_table_row,meta23920__$1));
});})(map__23918,map__23918__$1,record,columns))
;
clustermap.components.table.__GT_t23919 = ((function (map__23918,map__23918__$1,record,columns){
return (function __GT_t23919(columns__$1,record__$1,map__23918__$2,p__23905__$1,render_table_row__$1,meta23920){return (new clustermap.components.table.t23919(columns__$1,record__$1,map__23918__$2,p__23905__$1,render_table_row__$1,meta23920));
});})(map__23918,map__23918__$1,record,columns))
;
}
return (new clustermap.components.table.t23919(columns,record,map__23918__$1,p__23905,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__23931,owner,opts){var map__23955 = p__23931;var map__23955__$1 = ((cljs.core.seq_QMARK_.call(null,map__23955))?cljs.core.apply.call(null,cljs.core.hash_map,map__23955):map__23955);var props = map__23955__$1;var table_data = cljs.core.get.call(null,map__23955__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__23956 = cljs.core.get.call(null,map__23955__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__23956__$1 = ((cljs.core.seq_QMARK_.call(null,map__23956))?cljs.core.apply.call(null,cljs.core.hash_map,map__23956):map__23956);var controls = map__23956__$1;var columns = cljs.core.get.call(null,map__23956__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__23956__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs23957 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs23957))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs23957)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23957))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs23958 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view){
return (function iter__23962(s__23963){return (new cljs.core.LazySeq(null,((function (attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view){
return (function (){var s__23963__$1 = s__23963;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23963__$1);if(temp__4126__auto__)
{var s__23963__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23963__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23963__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23965 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23964 = (0);while(true){
if((i__23964 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__23964);cljs.core.chunk_append.call(null,b__23965,(function (){var vec__23968 = col;var col_key = cljs.core.nth.call(null,vec__23968,(0),null);var col_name = cljs.core.nth.call(null,vec__23968,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__23978 = (i__23964 + (1));
i__23964 = G__23978;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23965),iter__23962.call(null,cljs.core.chunk_rest.call(null,s__23963__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23965),null);
}
} else
{var col = cljs.core.first.call(null,s__23963__$2);return cljs.core.cons.call(null,(function (){var vec__23969 = col;var col_key = cljs.core.nth.call(null,vec__23969,(0),null);var col_name = cljs.core.nth.call(null,vec__23969,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__23962.call(null,cljs.core.rest.call(null,s__23963__$2)));
}
} else
{return null;
}
break;
}
});})(attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs23958))?sablono.interpreter.attributes.call(null,attrs23958):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23958))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23958)], null))));
})(),(function (){var attrs23959 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs23959))?sablono.interpreter.attributes.call(null,attrs23959):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23959))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23959)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23957),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs23960 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view){
return (function iter__23970(s__23971){return (new cljs.core.LazySeq(null,((function (attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view){
return (function (){var s__23971__$1 = s__23971;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23971__$1);if(temp__4126__auto__)
{var s__23971__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23971__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23971__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23973 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23972 = (0);while(true){
if((i__23972 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__23972);cljs.core.chunk_append.call(null,b__23973,(function (){var vec__23976 = col;var col_key = cljs.core.nth.call(null,vec__23976,(0),null);var col_name = cljs.core.nth.call(null,vec__23976,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__23979 = (i__23972 + (1));
i__23972 = G__23979;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23973),iter__23970.call(null,cljs.core.chunk_rest.call(null,s__23971__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23973),null);
}
} else
{var col = cljs.core.first.call(null,s__23971__$2);return cljs.core.cons.call(null,(function (){var vec__23977 = col;var col_key = cljs.core.nth.call(null,vec__23977,(0),null);var col_name = cljs.core.nth.call(null,vec__23977,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__23970.call(null,cljs.core.rest.call(null,s__23971__$2)));
}
} else
{return null;
}
break;
}
});})(attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs23960))?sablono.interpreter.attributes.call(null,attrs23960):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23960))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23960)], null))));
})(),(function (){var attrs23961 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs23957,map__23955,map__23955__$1,props,table_data,map__23956,map__23956__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs23961))?sablono.interpreter.attributes.call(null,attrs23961):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23961))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23961)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__23980,owner){var map__23995 = p__23980;var map__23995__$1 = ((cljs.core.seq_QMARK_.call(null,map__23995))?cljs.core.apply.call(null,cljs.core.hash_map,map__23995):map__23995);var props = map__23995__$1;var map__23996 = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__23996__$1 = ((cljs.core.seq_QMARK_.call(null,map__23996))?cljs.core.apply.call(null,cljs.core.hash_map,map__23996):map__23996);var table_state = map__23996__$1;var table_data = cljs.core.get.call(null,map__23996__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__23997 = cljs.core.get.call(null,map__23996__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__23997__$1 = ((cljs.core.seq_QMARK_.call(null,map__23997))?cljs.core.apply.call(null,cljs.core.hash_map,map__23997):map__23997);var controls = map__23997__$1;var index = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__23998 = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__23998__$1 = ((cljs.core.seq_QMARK_.call(null,map__23998))?cljs.core.apply.call(null,cljs.core.hash_map,map__23998):map__23998);var filter_by_view = cljs.core.get.call(null,map__23998__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__23998__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t23999 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t23999 = (function (map__23995,sort_spec,table_component,owner,filter_by_view,props,table_data,p__23980,map__23997,index,filter_spec,columns,table_state,controls,map__23996,bounds,size,from,map__23998,meta24000){
this.map__23995 = map__23995;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.p__23980 = p__23980;
this.map__23997 = map__23997;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__23996 = map__23996;
this.bounds = bounds;
this.size = size;
this.from = from;
this.map__23998 = map__23998;
this.meta24000 = meta24000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t23999.cljs$lang$type = true;
clustermap.components.table.t23999.cljs$lang$ctorStr = "clustermap.components.table/t23999";
clustermap.components.table.t23999.cljs$lang$ctorPrWriter = ((function (map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t23999");
});})(map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t23999.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t23999.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__24002,p__24003){var self__ = this;
var map__24004 = p__24002;var map__24004__$1 = ((cljs.core.seq_QMARK_.call(null,map__24004))?cljs.core.apply.call(null,cljs.core.hash_map,map__24004):map__24004);var next_props = map__24004__$1;var map__24005 = cljs.core.get.call(null,map__24004__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__24005__$1 = ((cljs.core.seq_QMARK_.call(null,map__24005))?cljs.core.apply.call(null,cljs.core.hash_map,map__24005):map__24005);var next_table_state = map__24005__$1;var next_table_data = cljs.core.get.call(null,map__24005__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__24006 = cljs.core.get.call(null,map__24005__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__24006__$1 = ((cljs.core.seq_QMARK_.call(null,map__24006))?cljs.core.apply.call(null,cljs.core.hash_map,map__24006):map__24006);var next_controls = map__24006__$1;var next_index = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__24007 = cljs.core.get.call(null,map__24004__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__24007__$1 = ((cljs.core.seq_QMARK_.call(null,map__24007))?cljs.core.apply.call(null,cljs.core.hash_map,map__24007):map__24007);var next_filter_by_view = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__24004__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__24008 = p__24003;var map__24008__$1 = ((cljs.core.seq_QMARK_.call(null,map__24008))?cljs.core.apply.call(null,cljs.core.hash_map,map__24008):map__24008);var next_state = map__24008__$1;var table_data_resource = cljs.core.get.call(null,map__24008__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not.call(null,next_table_data);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_EQ_.call(null,next_controls,self__.controls);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{var or__3637__auto____$2 = cljs.core.not_EQ_.call(null,next_sort_spec,self__.sort_spec);if(or__3637__auto____$2)
{return or__3637__auto____$2;
} else
{var or__3637__auto____$3 = cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec);if(or__3637__auto____$3)
{return or__3637__auto____$3;
} else
{var or__3637__auto____$4 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__3637__auto____$4)
{return or__3637__auto____$4;
} else
{var and__3625__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3625__auto__))
{return cljs.core.not_EQ_.call(null,next_bounds,self__.bounds);
} else
{return and__3625__auto__;
}
}
}
}
}
}
})()))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,(cljs.core.truth_(next_filter_by_view)?next_bounds:null),next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t23999.prototype.om$core$IRender$ = true;
clustermap.components.table.t23999.prototype.om$core$IRender$render$arity$1 = ((function (map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t23999.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t23999.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds))
);
});})(map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t23999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds){
return (function (_24001){var self__ = this;
var _24001__$1 = this;return self__.meta24000;
});})(map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t23999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds){
return (function (_24001,meta24000__$1){var self__ = this;
var _24001__$1 = this;return (new clustermap.components.table.t23999(self__.map__23995,self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.p__23980,self__.map__23997,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__23996,self__.bounds,self__.size,self__.from,self__.map__23998,meta24000__$1));
});})(map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t23999 = ((function (map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t23999(map__23995__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,p__23980__$1,map__23997__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__23996__$2,bounds__$1,size__$1,from__$1,map__23998__$2,meta24000){return (new clustermap.components.table.t23999(map__23995__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,p__23980__$1,map__23997__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__23996__$2,bounds__$1,size__$1,from__$1,map__23998__$2,meta24000));
});})(map__23995,map__23995__$1,props,map__23996,map__23996__$1,table_state,table_data,map__23997,map__23997__$1,controls,index,sort_spec,from,size,columns,map__23998,map__23998__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t23999(map__23995__$1,sort_spec,table_component,owner,filter_by_view,props,table_data,p__23980,map__23997__$1,index,filter_spec,columns,table_state,controls,map__23996__$1,bounds,size,from,map__23998__$1,null));
});
