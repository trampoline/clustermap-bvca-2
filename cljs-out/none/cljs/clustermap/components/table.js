// Compiled by ClojureScript 0.0-2322
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
clustermap.components.table.order_col = (function order_col(controls,p__62155,col_key,col_name){var map__62165 = p__62155;var map__62165__$1 = ((cljs.core.seq_QMARK_.call(null,map__62165))?cljs.core.apply.call(null,cljs.core.hash_map,map__62165):map__62165);var table_data = map__62165__$1;var current_sort_spec = cljs.core.get.call(null,map__62165__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__62166 = current_sort_spec__$1;var G__62166__$1 = (((G__62166 == null))?null:cljs.core.keys.call(null,G__62166));var G__62166__$2 = (((G__62166__$1 == null))?null:cljs.core.first.call(null,G__62166__$1));return G__62166__$2;
})();var current_sort_dir = (function (){var G__62167 = current_sort_spec__$1;var G__62167__$1 = (((G__62167 == null))?null:current_sort_key.call(null,G__62167));var G__62167__$2 = (((G__62167__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__62167__$1));return G__62167__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__62165,map__62165__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__62168 = cljs.core._EQ_;var expr__62169 = current_sort_dir;if(cljs.core.truth_(pred__62168.call(null,"asc",expr__62169)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__62168.call(null,"desc",expr__62169)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__62165,map__62165__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__62171 = cljs.core._EQ_;var expr__62172 = current_sort_dir;if(cljs.core.truth_(pred__62171.call(null,"asc",expr__62172)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__62174,owner,opts){var map__62191 = p__62174;var map__62191__$1 = ((cljs.core.seq_QMARK_.call(null,map__62191))?cljs.core.apply.call(null,cljs.core.hash_map,map__62191):map__62191);var controls = cljs.core.get.call(null,map__62191__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__62192 = cljs.core.get.call(null,map__62191__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__62192__$1 = ((cljs.core.seq_QMARK_.call(null,map__62192))?cljs.core.apply.call(null,cljs.core.hash_map,map__62192):map__62192);var table_data = map__62192__$1;var count = cljs.core.get.call(null,map__62192__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__62192__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__62192__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t62193 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t62193 = (function (map__62191,owner,paginate,map__62192,table_data,p__62174,controls,size,from,count,opts,meta62194){
this.map__62191 = map__62191;
this.owner = owner;
this.paginate = paginate;
this.map__62192 = map__62192;
this.table_data = table_data;
this.p__62174 = p__62174;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta62194 = meta62194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t62193.cljs$lang$type = true;
clustermap.components.table.t62193.cljs$lang$ctorStr = "clustermap.components.table/t62193";
clustermap.components.table.t62193.cljs$lang$ctorPrWriter = ((function (map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t62193");
});})(map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size))
;
clustermap.components.table.t62193.prototype.om$core$IRender$ = true;
clustermap.components.table.t62193.prototype.om$core$IRender$render$arity$1 = ((function (map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs62196 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs62196))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs62196)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs62196))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs62197 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs62197))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs62197)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs62197))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62197)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs62196,this__9504__auto____$1,map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs62196,this__9504__auto____$1,map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62196),(function (){var attrs62198 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs62198))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs62198)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs62198))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62198)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs62196,this__9504__auto____$1,map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs62196,this__9504__auto____$1,map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size))
;
clustermap.components.table.t62193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size){
return (function (_62195){var self__ = this;
var _62195__$1 = this;return self__.meta62194;
});})(map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size))
;
clustermap.components.table.t62193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size){
return (function (_62195,meta62194__$1){var self__ = this;
var _62195__$1 = this;return (new clustermap.components.table.t62193(self__.map__62191,self__.owner,self__.paginate,self__.map__62192,self__.table_data,self__.p__62174,self__.controls,self__.size,self__.from,self__.count,self__.opts,meta62194__$1));
});})(map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t62193 = ((function (map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size){
return (function __GT_t62193(map__62191__$2,owner__$1,paginate__$1,map__62192__$2,table_data__$1,p__62174__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta62194){return (new clustermap.components.table.t62193(map__62191__$2,owner__$1,paginate__$1,map__62192__$2,table_data__$1,p__62174__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta62194));
});})(map__62191,map__62191__$1,controls,map__62192,map__62192__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t62193(map__62191__$1,owner,paginate,map__62192__$1,table_data,p__62174,controls,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__62207){var map__62220 = p__62207;var map__62220__$1 = ((cljs.core.seq_QMARK_.call(null,map__62220))?cljs.core.apply.call(null,cljs.core.hash_map,map__62220):map__62220);var record = cljs.core.get.call(null,map__62220__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__62220__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t62221 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t62221 = (function (columns,record,map__62220,p__62207,render_table_row,meta62222){
this.columns = columns;
this.record = record;
this.map__62220 = map__62220;
this.p__62207 = p__62207;
this.render_table_row = render_table_row;
this.meta62222 = meta62222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t62221.cljs$lang$type = true;
clustermap.components.table.t62221.cljs$lang$ctorStr = "clustermap.components.table/t62221";
clustermap.components.table.t62221.cljs$lang$ctorPrWriter = ((function (map__62220,map__62220__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t62221");
});})(map__62220,map__62220__$1,record,columns))
;
clustermap.components.table.t62221.prototype.om$core$IRender$ = true;
clustermap.components.table.t62221.prototype.om$core$IRender$render$arity$1 = ((function (map__62220,map__62220__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__62220,map__62220__$1,record,columns){
return (function iter__62224(s__62225){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__62220,map__62220__$1,record,columns){
return (function (){var s__62225__$1 = s__62225;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__62225__$1);if(temp__4126__auto__)
{var s__62225__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__62225__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__62225__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__62227 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__62226 = (0);while(true){
if((i__62226 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__62226);cljs.core.chunk_append.call(null,b__62227,(function (){var vec__62230 = col;var col_key = cljs.core.nth.call(null,vec__62230,(0),null);var col_name = cljs.core.nth.call(null,vec__62230,(1),null);var formatter = cljs.core.nth.call(null,vec__62230,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__62232 = (i__62226 + (1));
i__62226 = G__62232;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62227),iter__62224.call(null,cljs.core.chunk_rest.call(null,s__62225__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62227),null);
}
} else
{var col = cljs.core.first.call(null,s__62225__$2);return cljs.core.cons.call(null,(function (){var vec__62231 = col;var col_key = cljs.core.nth.call(null,vec__62231,(0),null);var col_name = cljs.core.nth.call(null,vec__62231,(1),null);var formatter = cljs.core.nth.call(null,vec__62231,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__62224.call(null,cljs.core.rest.call(null,s__62225__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__62220,map__62220__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__62220,map__62220__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__62220,map__62220__$1,record,columns))
;
clustermap.components.table.t62221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__62220,map__62220__$1,record,columns){
return (function (_62223){var self__ = this;
var _62223__$1 = this;return self__.meta62222;
});})(map__62220,map__62220__$1,record,columns))
;
clustermap.components.table.t62221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__62220,map__62220__$1,record,columns){
return (function (_62223,meta62222__$1){var self__ = this;
var _62223__$1 = this;return (new clustermap.components.table.t62221(self__.columns,self__.record,self__.map__62220,self__.p__62207,self__.render_table_row,meta62222__$1));
});})(map__62220,map__62220__$1,record,columns))
;
clustermap.components.table.__GT_t62221 = ((function (map__62220,map__62220__$1,record,columns){
return (function __GT_t62221(columns__$1,record__$1,map__62220__$2,p__62207__$1,render_table_row__$1,meta62222){return (new clustermap.components.table.t62221(columns__$1,record__$1,map__62220__$2,p__62207__$1,render_table_row__$1,meta62222));
});})(map__62220,map__62220__$1,record,columns))
;
}
return (new clustermap.components.table.t62221(columns,record,map__62220__$1,p__62207,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__62233,owner,opts){var map__62257 = p__62233;var map__62257__$1 = ((cljs.core.seq_QMARK_.call(null,map__62257))?cljs.core.apply.call(null,cljs.core.hash_map,map__62257):map__62257);var props = map__62257__$1;var table_data = cljs.core.get.call(null,map__62257__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__62258 = cljs.core.get.call(null,map__62257__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__62258__$1 = ((cljs.core.seq_QMARK_.call(null,map__62258))?cljs.core.apply.call(null,cljs.core.hash_map,map__62258):map__62258);var controls = map__62258__$1;var columns = cljs.core.get.call(null,map__62258__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__62258__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs62259 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs62259))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs62259)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs62259))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs62260 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view){
return (function iter__62264(s__62265){return (new cljs.core.LazySeq(null,((function (attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view){
return (function (){var s__62265__$1 = s__62265;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__62265__$1);if(temp__4126__auto__)
{var s__62265__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__62265__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__62265__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__62267 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__62266 = (0);while(true){
if((i__62266 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__62266);cljs.core.chunk_append.call(null,b__62267,(function (){var vec__62270 = col;var col_key = cljs.core.nth.call(null,vec__62270,(0),null);var col_name = cljs.core.nth.call(null,vec__62270,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__62280 = (i__62266 + (1));
i__62266 = G__62280;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62267),iter__62264.call(null,cljs.core.chunk_rest.call(null,s__62265__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62267),null);
}
} else
{var col = cljs.core.first.call(null,s__62265__$2);return cljs.core.cons.call(null,(function (){var vec__62271 = col;var col_key = cljs.core.nth.call(null,vec__62271,(0),null);var col_name = cljs.core.nth.call(null,vec__62271,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__62264.call(null,cljs.core.rest.call(null,s__62265__$2)));
}
} else
{return null;
}
break;
}
});})(attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs62260))?sablono.interpreter.attributes.call(null,attrs62260):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs62260))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62260)], null))));
})(),(function (){var attrs62261 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs62261))?sablono.interpreter.attributes.call(null,attrs62261):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs62261))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62261)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62259),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs62262 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view){
return (function iter__62272(s__62273){return (new cljs.core.LazySeq(null,((function (attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view){
return (function (){var s__62273__$1 = s__62273;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__62273__$1);if(temp__4126__auto__)
{var s__62273__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__62273__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__62273__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__62275 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__62274 = (0);while(true){
if((i__62274 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__62274);cljs.core.chunk_append.call(null,b__62275,(function (){var vec__62278 = col;var col_key = cljs.core.nth.call(null,vec__62278,(0),null);var col_name = cljs.core.nth.call(null,vec__62278,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__62281 = (i__62274 + (1));
i__62274 = G__62281;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62275),iter__62272.call(null,cljs.core.chunk_rest.call(null,s__62273__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62275),null);
}
} else
{var col = cljs.core.first.call(null,s__62273__$2);return cljs.core.cons.call(null,(function (){var vec__62279 = col;var col_key = cljs.core.nth.call(null,vec__62279,(0),null);var col_name = cljs.core.nth.call(null,vec__62279,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__62272.call(null,cljs.core.rest.call(null,s__62273__$2)));
}
} else
{return null;
}
break;
}
});})(attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs62262))?sablono.interpreter.attributes.call(null,attrs62262):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs62262))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62262)], null))));
})(),(function (){var attrs62263 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs62259,map__62257,map__62257__$1,props,table_data,map__62258,map__62258__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs62263))?sablono.interpreter.attributes.call(null,attrs62263):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs62263))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62263)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__62282,owner){var map__62297 = p__62282;var map__62297__$1 = ((cljs.core.seq_QMARK_.call(null,map__62297))?cljs.core.apply.call(null,cljs.core.hash_map,map__62297):map__62297);var props = map__62297__$1;var map__62298 = cljs.core.get.call(null,map__62297__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__62298__$1 = ((cljs.core.seq_QMARK_.call(null,map__62298))?cljs.core.apply.call(null,cljs.core.hash_map,map__62298):map__62298);var table_state = map__62298__$1;var table_data = cljs.core.get.call(null,map__62298__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__62299 = cljs.core.get.call(null,map__62298__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__62299__$1 = ((cljs.core.seq_QMARK_.call(null,map__62299))?cljs.core.apply.call(null,cljs.core.hash_map,map__62299):map__62299);var controls = map__62299__$1;var index = cljs.core.get.call(null,map__62299__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__62299__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__62299__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__62299__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__62299__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__62300 = cljs.core.get.call(null,map__62297__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__62300__$1 = ((cljs.core.seq_QMARK_.call(null,map__62300))?cljs.core.apply.call(null,cljs.core.hash_map,map__62300):map__62300);var filter_by_view = cljs.core.get.call(null,map__62300__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__62300__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__62297__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t62301 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t62301 = (function (sort_spec,table_component,owner,map__62299,filter_by_view,props,p__62282,table_data,index,map__62297,filter_spec,columns,table_state,controls,bounds,size,map__62298,map__62300,from,meta62302){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.map__62299 = map__62299;
this.filter_by_view = filter_by_view;
this.props = props;
this.p__62282 = p__62282;
this.table_data = table_data;
this.index = index;
this.map__62297 = map__62297;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.map__62298 = map__62298;
this.map__62300 = map__62300;
this.from = from;
this.meta62302 = meta62302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t62301.cljs$lang$type = true;
clustermap.components.table.t62301.cljs$lang$ctorStr = "clustermap.components.table/t62301";
clustermap.components.table.t62301.cljs$lang$ctorPrWriter = ((function (map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t62301");
});})(map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t62301.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t62301.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__62304,p__62305){var self__ = this;
var map__62306 = p__62304;var map__62306__$1 = ((cljs.core.seq_QMARK_.call(null,map__62306))?cljs.core.apply.call(null,cljs.core.hash_map,map__62306):map__62306);var next_props = map__62306__$1;var map__62307 = cljs.core.get.call(null,map__62306__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__62307__$1 = ((cljs.core.seq_QMARK_.call(null,map__62307))?cljs.core.apply.call(null,cljs.core.hash_map,map__62307):map__62307);var next_table_state = map__62307__$1;var next_table_data = cljs.core.get.call(null,map__62307__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__62308 = cljs.core.get.call(null,map__62307__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__62308__$1 = ((cljs.core.seq_QMARK_.call(null,map__62308))?cljs.core.apply.call(null,cljs.core.hash_map,map__62308):map__62308);var next_controls = map__62308__$1;var next_index = cljs.core.get.call(null,map__62308__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__62308__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__62308__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__62308__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__62308__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__62309 = cljs.core.get.call(null,map__62306__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__62309__$1 = ((cljs.core.seq_QMARK_.call(null,map__62309))?cljs.core.apply.call(null,cljs.core.hash_map,map__62309):map__62309);var next_filter_by_view = cljs.core.get.call(null,map__62309__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__62309__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__62306__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__62310 = p__62305;var map__62310__$1 = ((cljs.core.seq_QMARK_.call(null,map__62310))?cljs.core.apply.call(null,cljs.core.hash_map,map__62310):map__62310);var next_state = map__62310__$1;var table_data_resource = cljs.core.get.call(null,map__62310__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.call(null,next_controls,self__.controls);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.call(null,next_sort_spec,self__.sort_spec);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var or__3558__auto____$3 = cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec);if(or__3558__auto____$3)
{return or__3558__auto____$3;
} else
{var or__3558__auto____$4 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$4)
{return or__3558__auto____$4;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,next_bounds,self__.bounds);
} else
{return and__3546__auto__;
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
});})(map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t62301.prototype.om$core$IRender$ = true;
clustermap.components.table.t62301.prototype.om$core$IRender$render$arity$1 = ((function (map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t62301.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t62301.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds))
);
});})(map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t62301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds){
return (function (_62303){var self__ = this;
var _62303__$1 = this;return self__.meta62302;
});})(map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t62301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds){
return (function (_62303,meta62302__$1){var self__ = this;
var _62303__$1 = this;return (new clustermap.components.table.t62301(self__.sort_spec,self__.table_component,self__.owner,self__.map__62299,self__.filter_by_view,self__.props,self__.p__62282,self__.table_data,self__.index,self__.map__62297,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.bounds,self__.size,self__.map__62298,self__.map__62300,self__.from,meta62302__$1));
});})(map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t62301 = ((function (map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t62301(sort_spec__$1,table_component__$1,owner__$1,map__62299__$2,filter_by_view__$1,props__$1,p__62282__$1,table_data__$1,index__$1,map__62297__$2,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__62298__$2,map__62300__$2,from__$1,meta62302){return (new clustermap.components.table.t62301(sort_spec__$1,table_component__$1,owner__$1,map__62299__$2,filter_by_view__$1,props__$1,p__62282__$1,table_data__$1,index__$1,map__62297__$2,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__62298__$2,map__62300__$2,from__$1,meta62302));
});})(map__62297,map__62297__$1,props,map__62298,map__62298__$1,table_state,table_data,map__62299,map__62299__$1,controls,index,sort_spec,from,size,columns,map__62300,map__62300__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t62301(sort_spec,table_component,owner,map__62299__$1,filter_by_view,props,p__62282,table_data,index,map__62297__$1,filter_spec,columns,table_state,controls,bounds,size,map__62298__$1,map__62300__$1,from,null));
});

//# sourceMappingURL=table.js.map