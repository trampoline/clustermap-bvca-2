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
clustermap.components.table.order_col = (function order_col(controls,p__17175,col_key,col_name){var map__17185 = p__17175;var map__17185__$1 = ((cljs.core.seq_QMARK_.call(null,map__17185))?cljs.core.apply.call(null,cljs.core.hash_map,map__17185):map__17185);var table_data = map__17185__$1;var current_sort_spec = cljs.core.get.call(null,map__17185__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__17186 = current_sort_spec__$1;var G__17186__$1 = (((G__17186 == null))?null:cljs.core.keys.call(null,G__17186));var G__17186__$2 = (((G__17186__$1 == null))?null:cljs.core.first.call(null,G__17186__$1));return G__17186__$2;
})();var current_sort_dir = (function (){var G__17187 = current_sort_spec__$1;var G__17187__$1 = (((G__17187 == null))?null:current_sort_key.call(null,G__17187));var G__17187__$2 = (((G__17187__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__17187__$1));return G__17187__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__17185,map__17185__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__17188 = cljs.core._EQ_;var expr__17189 = current_sort_dir;if(cljs.core.truth_(pred__17188.call(null,"asc",expr__17189)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__17188.call(null,"desc",expr__17189)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__17185,map__17185__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__17191 = cljs.core._EQ_;var expr__17192 = current_sort_dir;if(cljs.core.truth_(pred__17191.call(null,"asc",expr__17192)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__17194,owner,opts){var map__17211 = p__17194;var map__17211__$1 = ((cljs.core.seq_QMARK_.call(null,map__17211))?cljs.core.apply.call(null,cljs.core.hash_map,map__17211):map__17211);var controls = cljs.core.get.call(null,map__17211__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17212 = cljs.core.get.call(null,map__17211__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17212__$1 = ((cljs.core.seq_QMARK_.call(null,map__17212))?cljs.core.apply.call(null,cljs.core.hash_map,map__17212):map__17212);var table_data = map__17212__$1;var count = cljs.core.get.call(null,map__17212__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__17212__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__17212__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t17213 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17213 = (function (owner,paginate,table_data,controls,size,map__17211,p__17194,map__17212,from,count,opts,meta17214){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.map__17211 = map__17211;
this.p__17194 = p__17194;
this.map__17212 = map__17212;
this.from = from;
this.count = count;
this.opts = opts;
this.meta17214 = meta17214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17213.cljs$lang$type = true;
clustermap.components.table.t17213.cljs$lang$ctorStr = "clustermap.components.table/t17213";
clustermap.components.table.t17213.cljs$lang$ctorPrWriter = ((function (map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t17213");
});})(map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size))
;
clustermap.components.table.t17213.prototype.om$core$IRender$ = true;
clustermap.components.table.t17213.prototype.om$core$IRender$render$arity$1 = ((function (map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs17216 = (cljs.core.truth_((function (){var and__3625__auto__ = self__.from;if(cljs.core.truth_(and__3625__auto__))
{return (self__.from > (0));
} else
{return and__3625__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__10071__auto____$1,map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3944__auto__ = (0);var y__3945__auto__ = (self__.from - self__.size);return ((x__3944__auto__ > y__3945__auto__) ? x__3944__auto__ : y__3945__auto__);
})());
});})(this__10071__auto____$1,map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17216))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs17216)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17216))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs17217 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs17217))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs17217)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17217))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17217)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17216,this__10071__auto____$1,map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs17216,this__10071__auto____$1,map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17216),(function (){var attrs17218 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs17218))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs17218)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17218))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17218)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17216,this__10071__auto____$1,map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs17216,this__10071__auto____$1,map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size))
;
clustermap.components.table.t17213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size){
return (function (_17215){var self__ = this;
var _17215__$1 = this;return self__.meta17214;
});})(map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size))
;
clustermap.components.table.t17213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size){
return (function (_17215,meta17214__$1){var self__ = this;
var _17215__$1 = this;return (new clustermap.components.table.t17213(self__.owner,self__.paginate,self__.table_data,self__.controls,self__.size,self__.map__17211,self__.p__17194,self__.map__17212,self__.from,self__.count,self__.opts,meta17214__$1));
});})(map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t17213 = ((function (map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size){
return (function __GT_t17213(owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__17211__$2,p__17194__$1,map__17212__$2,from__$1,count__$1,opts__$1,meta17214){return (new clustermap.components.table.t17213(owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__17211__$2,p__17194__$1,map__17212__$2,from__$1,count__$1,opts__$1,meta17214));
});})(map__17211,map__17211__$1,controls,map__17212,map__17212__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t17213(owner,paginate,table_data,controls,size,map__17211__$1,p__17194,map__17212__$1,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__17227){var map__17240 = p__17227;var map__17240__$1 = ((cljs.core.seq_QMARK_.call(null,map__17240))?cljs.core.apply.call(null,cljs.core.hash_map,map__17240):map__17240);var record = cljs.core.get.call(null,map__17240__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__17240__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t17241 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17241 = (function (columns,record,map__17240,p__17227,render_table_row,meta17242){
this.columns = columns;
this.record = record;
this.map__17240 = map__17240;
this.p__17227 = p__17227;
this.render_table_row = render_table_row;
this.meta17242 = meta17242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17241.cljs$lang$type = true;
clustermap.components.table.t17241.cljs$lang$ctorStr = "clustermap.components.table/t17241";
clustermap.components.table.t17241.cljs$lang$ctorPrWriter = ((function (map__17240,map__17240__$1,record,columns){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t17241");
});})(map__17240,map__17240__$1,record,columns))
;
clustermap.components.table.t17241.prototype.om$core$IRender$ = true;
clustermap.components.table.t17241.prototype.om$core$IRender$render$arity$1 = ((function (map__17240,map__17240__$1,record,columns){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__17240,map__17240__$1,record,columns){
return (function iter__17244(s__17245){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__17240,map__17240__$1,record,columns){
return (function (){var s__17245__$1 = s__17245;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17245__$1);if(temp__4126__auto__)
{var s__17245__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17245__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__17245__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__17247 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__17246 = (0);while(true){
if((i__17246 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__17246);cljs.core.chunk_append.call(null,b__17247,(function (){var vec__17250 = col;var col_key = cljs.core.nth.call(null,vec__17250,(0),null);var col_name = cljs.core.nth.call(null,vec__17250,(1),null);var formatter = cljs.core.nth.call(null,vec__17250,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__17252 = (i__17246 + (1));
i__17246 = G__17252;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17247),iter__17244.call(null,cljs.core.chunk_rest.call(null,s__17245__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17247),null);
}
} else
{var col = cljs.core.first.call(null,s__17245__$2);return cljs.core.cons.call(null,(function (){var vec__17251 = col;var col_key = cljs.core.nth.call(null,vec__17251,(0),null);var col_name = cljs.core.nth.call(null,vec__17251,(1),null);var formatter = cljs.core.nth.call(null,vec__17251,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__17244.call(null,cljs.core.rest.call(null,s__17245__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__17240,map__17240__$1,record,columns))
,null,null));
});})(this__10071__auto____$1,map__17240,map__17240__$1,record,columns))
;return iter__4375__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__17240,map__17240__$1,record,columns))
;
clustermap.components.table.t17241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17240,map__17240__$1,record,columns){
return (function (_17243){var self__ = this;
var _17243__$1 = this;return self__.meta17242;
});})(map__17240,map__17240__$1,record,columns))
;
clustermap.components.table.t17241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17240,map__17240__$1,record,columns){
return (function (_17243,meta17242__$1){var self__ = this;
var _17243__$1 = this;return (new clustermap.components.table.t17241(self__.columns,self__.record,self__.map__17240,self__.p__17227,self__.render_table_row,meta17242__$1));
});})(map__17240,map__17240__$1,record,columns))
;
clustermap.components.table.__GT_t17241 = ((function (map__17240,map__17240__$1,record,columns){
return (function __GT_t17241(columns__$1,record__$1,map__17240__$2,p__17227__$1,render_table_row__$1,meta17242){return (new clustermap.components.table.t17241(columns__$1,record__$1,map__17240__$2,p__17227__$1,render_table_row__$1,meta17242));
});})(map__17240,map__17240__$1,record,columns))
;
}
return (new clustermap.components.table.t17241(columns,record,map__17240__$1,p__17227,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__17253,owner,opts){var map__17277 = p__17253;var map__17277__$1 = ((cljs.core.seq_QMARK_.call(null,map__17277))?cljs.core.apply.call(null,cljs.core.hash_map,map__17277):map__17277);var props = map__17277__$1;var table_data = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17278 = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17278__$1 = ((cljs.core.seq_QMARK_.call(null,map__17278))?cljs.core.apply.call(null,cljs.core.hash_map,map__17278):map__17278);var controls = map__17278__$1;var columns = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs17279 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17279))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs17279)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17279))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs17280 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view){
return (function iter__17284(s__17285){return (new cljs.core.LazySeq(null,((function (attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view){
return (function (){var s__17285__$1 = s__17285;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17285__$1);if(temp__4126__auto__)
{var s__17285__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17285__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__17285__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__17287 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__17286 = (0);while(true){
if((i__17286 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__17286);cljs.core.chunk_append.call(null,b__17287,(function (){var vec__17290 = col;var col_key = cljs.core.nth.call(null,vec__17290,(0),null);var col_name = cljs.core.nth.call(null,vec__17290,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__17300 = (i__17286 + (1));
i__17286 = G__17300;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17287),iter__17284.call(null,cljs.core.chunk_rest.call(null,s__17285__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17287),null);
}
} else
{var col = cljs.core.first.call(null,s__17285__$2);return cljs.core.cons.call(null,(function (){var vec__17291 = col;var col_key = cljs.core.nth.call(null,vec__17291,(0),null);var col_name = cljs.core.nth.call(null,vec__17291,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__17284.call(null,cljs.core.rest.call(null,s__17285__$2)));
}
} else
{return null;
}
break;
}
});})(attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs17280))?sablono.interpreter.attributes.call(null,attrs17280):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17280))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17280)], null))));
})(),(function (){var attrs17281 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs17281))?sablono.interpreter.attributes.call(null,attrs17281):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17281))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17281)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17279),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs17282 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view){
return (function iter__17292(s__17293){return (new cljs.core.LazySeq(null,((function (attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view){
return (function (){var s__17293__$1 = s__17293;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17293__$1);if(temp__4126__auto__)
{var s__17293__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17293__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__17293__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__17295 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__17294 = (0);while(true){
if((i__17294 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__17294);cljs.core.chunk_append.call(null,b__17295,(function (){var vec__17298 = col;var col_key = cljs.core.nth.call(null,vec__17298,(0),null);var col_name = cljs.core.nth.call(null,vec__17298,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__17301 = (i__17294 + (1));
i__17294 = G__17301;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17295),iter__17292.call(null,cljs.core.chunk_rest.call(null,s__17293__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17295),null);
}
} else
{var col = cljs.core.first.call(null,s__17293__$2);return cljs.core.cons.call(null,(function (){var vec__17299 = col;var col_key = cljs.core.nth.call(null,vec__17299,(0),null);var col_name = cljs.core.nth.call(null,vec__17299,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__17292.call(null,cljs.core.rest.call(null,s__17293__$2)));
}
} else
{return null;
}
break;
}
});})(attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs17282))?sablono.interpreter.attributes.call(null,attrs17282):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17282))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17282)], null))));
})(),(function (){var attrs17283 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs17279,map__17277,map__17277__$1,props,table_data,map__17278,map__17278__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs17283))?sablono.interpreter.attributes.call(null,attrs17283):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17283))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17283)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__17302,owner){var map__17317 = p__17302;var map__17317__$1 = ((cljs.core.seq_QMARK_.call(null,map__17317))?cljs.core.apply.call(null,cljs.core.hash_map,map__17317):map__17317);var props = map__17317__$1;var map__17318 = cljs.core.get.call(null,map__17317__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__17318__$1 = ((cljs.core.seq_QMARK_.call(null,map__17318))?cljs.core.apply.call(null,cljs.core.hash_map,map__17318):map__17318);var table_state = map__17318__$1;var table_data = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17319 = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17319__$1 = ((cljs.core.seq_QMARK_.call(null,map__17319))?cljs.core.apply.call(null,cljs.core.hash_map,map__17319):map__17319);var controls = map__17319__$1;var index = cljs.core.get.call(null,map__17319__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__17319__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__17319__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__17319__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__17319__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__17320 = cljs.core.get.call(null,map__17317__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__17320__$1 = ((cljs.core.seq_QMARK_.call(null,map__17320))?cljs.core.apply.call(null,cljs.core.hash_map,map__17320):map__17320);var filter_by_view = cljs.core.get.call(null,map__17320__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__17320__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__17317__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t17321 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t17321 = (function (sort_spec,map__17319,map__17318,table_component,owner,filter_by_view,props,table_data,index,p__17302,map__17317,filter_spec,columns,table_state,controls,bounds,size,map__17320,from,meta17322){
this.sort_spec = sort_spec;
this.map__17319 = map__17319;
this.map__17318 = map__17318;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.index = index;
this.p__17302 = p__17302;
this.map__17317 = map__17317;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.map__17320 = map__17320;
this.from = from;
this.meta17322 = meta17322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t17321.cljs$lang$type = true;
clustermap.components.table.t17321.cljs$lang$ctorStr = "clustermap.components.table/t17321";
clustermap.components.table.t17321.cljs$lang$ctorPrWriter = ((function (map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t17321");
});})(map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17321.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t17321.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__17324,p__17325){var self__ = this;
var map__17326 = p__17324;var map__17326__$1 = ((cljs.core.seq_QMARK_.call(null,map__17326))?cljs.core.apply.call(null,cljs.core.hash_map,map__17326):map__17326);var next_props = map__17326__$1;var map__17327 = cljs.core.get.call(null,map__17326__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__17327__$1 = ((cljs.core.seq_QMARK_.call(null,map__17327))?cljs.core.apply.call(null,cljs.core.hash_map,map__17327):map__17327);var next_table_state = map__17327__$1;var next_table_data = cljs.core.get.call(null,map__17327__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__17328 = cljs.core.get.call(null,map__17327__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__17328__$1 = ((cljs.core.seq_QMARK_.call(null,map__17328))?cljs.core.apply.call(null,cljs.core.hash_map,map__17328):map__17328);var next_controls = map__17328__$1;var next_index = cljs.core.get.call(null,map__17328__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__17328__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__17328__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__17328__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__17328__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__17329 = cljs.core.get.call(null,map__17326__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__17329__$1 = ((cljs.core.seq_QMARK_.call(null,map__17329))?cljs.core.apply.call(null,cljs.core.hash_map,map__17329):map__17329);var next_filter_by_view = cljs.core.get.call(null,map__17329__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__17329__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__17326__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__17330 = p__17325;var map__17330__$1 = ((cljs.core.seq_QMARK_.call(null,map__17330))?cljs.core.apply.call(null,cljs.core.hash_map,map__17330):map__17330);var next_state = map__17330__$1;var table_data_resource = cljs.core.get.call(null,map__17330__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not.call(null,next_table_data);if(or__3637__auto__)
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
});})(map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17321.prototype.om$core$IRender$ = true;
clustermap.components.table.t17321.prototype.om$core$IRender$render$arity$1 = ((function (map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17321.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t17321.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds))
);
});})(map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds){
return (function (_17323){var self__ = this;
var _17323__$1 = this;return self__.meta17322;
});})(map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t17321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds){
return (function (_17323,meta17322__$1){var self__ = this;
var _17323__$1 = this;return (new clustermap.components.table.t17321(self__.sort_spec,self__.map__17319,self__.map__17318,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.index,self__.p__17302,self__.map__17317,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.bounds,self__.size,self__.map__17320,self__.from,meta17322__$1));
});})(map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t17321 = ((function (map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t17321(sort_spec__$1,map__17319__$2,map__17318__$2,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,p__17302__$1,map__17317__$2,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__17320__$2,from__$1,meta17322){return (new clustermap.components.table.t17321(sort_spec__$1,map__17319__$2,map__17318__$2,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,p__17302__$1,map__17317__$2,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__17320__$2,from__$1,meta17322));
});})(map__17317,map__17317__$1,props,map__17318,map__17318__$1,table_state,table_data,map__17319,map__17319__$1,controls,index,sort_spec,from,size,columns,map__17320,map__17320__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t17321(sort_spec,map__17319__$1,map__17318__$1,table_component,owner,filter_by_view,props,table_data,index,p__17302,map__17317__$1,filter_spec,columns,table_state,controls,bounds,size,map__17320__$1,from,null));
});
