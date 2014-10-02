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
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_.call(null,current_order))?cljs.core.first.call(null,current_order):current_order);var current_order_key = cljs.core.first.call(null,cljs.core.keys.call(null,current_order__$1));var current_order_dir = cljs.core.first.call(null,cljs.core.vals.call(null,current_order__$1));return React.DOM.a({"href": "#", "onClick": ((function (current_order,current_order__$1,current_order_key,current_order_dir){
return (function (e){e.preventDefault();
var pred__13937 = cljs.core._EQ_;var expr__13938 = current_order_dir;if(cljs.core.truth_(pred__13937.call(null,"asc",expr__13938)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__13937.call(null,"desc",expr__13938)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__13940 = cljs.core._EQ_;var expr__13941 = current_order_dir;if(cljs.core.truth_(pred__13940.call(null,"asc",expr__13941)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(comm,p__13943,view_update_key){var map__13956 = p__13943;var map__13956__$1 = ((cljs.core.seq_QMARK_.call(null,map__13956))?cljs.core.apply.call(null,cljs.core.hash_map,map__13956):map__13956);var collection = map__13956__$1;var size = cljs.core.get.call(null,map__13956__$1,new cljs.core.Keyword(null,"size","size",1098693007));var from = cljs.core.get.call(null,map__13956__$1,new cljs.core.Keyword(null,"from","from",1815293044));var count = cljs.core.get.call(null,map__13956__$1,new cljs.core.Keyword(null,"count","count",2139924085));var attrs13957 = (((from > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__13956,map__13956__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (from - size);var y__3866__auto__ = (0);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})()], null)], null));
});})(map__13956,map__13956__$1,collection,size,from,count))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13957))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs13957)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13957))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13958 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (from + size);var y__3873__auto__ = count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13958))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs13958)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13958))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13958)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs13957,map__13956,map__13956__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(from + size)], null)], null));
});})(attrs13957,map__13956,map__13956__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13957),(function (){var attrs13959 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (from + size);var y__3873__auto__ = count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs13959))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs13959)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13959))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13959)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs13957,map__13956,map__13956__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(from + size)], null)], null));
});})(attrs13957,map__13956,map__13956__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});
clustermap.components.table.render_table_row = (function render_table_row(p__13968){var map__14009 = p__13968;var map__14009__$1 = ((cljs.core.seq_QMARK_.call(null,map__14009))?cljs.core.apply.call(null,cljs.core.hash_map,map__14009):map__14009);var data = map__14009__$1;var record = cljs.core.get.call(null,map__14009__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__14009__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t14010 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t14010 = (function (columns,record,data,map__14009,p__13968,render_table_row,meta14011){
this.columns = columns;
this.record = record;
this.data = data;
this.map__14009 = map__14009;
this.p__13968 = p__13968;
this.render_table_row = render_table_row;
this.meta14011 = meta14011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t14010.cljs$lang$type = true;
clustermap.components.table.t14010.cljs$lang$ctorStr = "clustermap.components.table/t14010";
clustermap.components.table.t14010.cljs$lang$ctorPrWriter = ((function (map__14009,map__14009__$1,data,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t14010");
});})(map__14009,map__14009__$1,data,record,columns))
;
clustermap.components.table.t14010.prototype.om$core$IRender$ = true;
clustermap.components.table.t14010.prototype.om$core$IRender$render$arity$1 = ((function (map__14009,map__14009__$1,data,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns){
return (function iter__14013(s__14014){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns){
return (function (){var s__14014__$1 = s__14014;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14014__$1);if(temp__4126__auto__)
{var s__14014__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14014__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14014__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14016 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14015 = (0);while(true){
if((i__14015 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__14015);cljs.core.chunk_append.call(null,b__14016,(function (){var iter__4283__auto__ = ((function (i__14015,col,c__4281__auto__,size__4282__auto__,b__14016,s__14014__$2,temp__4126__auto__,this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns){
return (function iter__14033(s__14034){return (new cljs.core.LazySeq(null,((function (i__14015,col,c__4281__auto__,size__4282__auto__,b__14016,s__14014__$2,temp__4126__auto__,this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns){
return (function (){var s__14034__$1 = s__14034;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14034__$1);if(temp__4126__auto____$1)
{var s__14034__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14034__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__14034__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__14036 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__14035 = (0);while(true){
if((i__14035 < size__4282__auto____$1))
{var vec__14039 = cljs.core._nth.call(null,c__4281__auto____$1,i__14035);var col_key = cljs.core.nth.call(null,vec__14039,(0),null);var col_name = cljs.core.nth.call(null,vec__14039,(1),null);cljs.core.chunk_append.call(null,b__14036,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})());
{
var G__14049 = (i__14035 + (1));
i__14035 = G__14049;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14036),iter__14033.call(null,cljs.core.chunk_rest.call(null,s__14034__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14036),null);
}
} else
{var vec__14040 = cljs.core.first.call(null,s__14034__$2);var col_key = cljs.core.nth.call(null,vec__14040,(0),null);var col_name = cljs.core.nth.call(null,vec__14040,(1),null);return cljs.core.cons.call(null,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})(),iter__14033.call(null,cljs.core.rest.call(null,s__14034__$2)));
}
} else
{return null;
}
break;
}
});})(i__14015,col,c__4281__auto__,size__4282__auto__,b__14016,s__14014__$2,temp__4126__auto__,this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns))
,null,null));
});})(i__14015,col,c__4281__auto__,size__4282__auto__,b__14016,s__14014__$2,temp__4126__auto__,this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns))
;return iter__4283__auto__.call(null,col);
})());
{
var G__14050 = (i__14015 + (1));
i__14015 = G__14050;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14016),iter__14013.call(null,cljs.core.chunk_rest.call(null,s__14014__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14016),null);
}
} else
{var col = cljs.core.first.call(null,s__14014__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__14014__$2,temp__4126__auto__,this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns){
return (function iter__14041(s__14042){return (new cljs.core.LazySeq(null,((function (col,s__14014__$2,temp__4126__auto__,this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns){
return (function (){var s__14042__$1 = s__14042;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14042__$1);if(temp__4126__auto____$1)
{var s__14042__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14042__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14042__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14044 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14043 = (0);while(true){
if((i__14043 < size__4282__auto__))
{var vec__14047 = cljs.core._nth.call(null,c__4281__auto__,i__14043);var col_key = cljs.core.nth.call(null,vec__14047,(0),null);var col_name = cljs.core.nth.call(null,vec__14047,(1),null);cljs.core.chunk_append.call(null,b__14044,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})());
{
var G__14051 = (i__14043 + (1));
i__14043 = G__14051;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14044),iter__14041.call(null,cljs.core.chunk_rest.call(null,s__14042__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14044),null);
}
} else
{var vec__14048 = cljs.core.first.call(null,s__14042__$2);var col_key = cljs.core.nth.call(null,vec__14048,(0),null);var col_name = cljs.core.nth.call(null,vec__14048,(1),null);return cljs.core.cons.call(null,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})(),iter__14041.call(null,cljs.core.rest.call(null,s__14042__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__14014__$2,temp__4126__auto__,this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns))
,null,null));
});})(col,s__14014__$2,temp__4126__auto__,this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns))
;return iter__4283__auto__.call(null,col);
})(),iter__14013.call(null,cljs.core.rest.call(null,s__14014__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns))
,null,null));
});})(this__9504__auto____$1,map__14009,map__14009__$1,data,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})()));var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ROW",self__.columns,self__.record,row], null)));return row;
})());
});})(map__14009,map__14009__$1,data,record,columns))
;
clustermap.components.table.t14010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14009,map__14009__$1,data,record,columns){
return (function (_14012){var self__ = this;
var _14012__$1 = this;return self__.meta14011;
});})(map__14009,map__14009__$1,data,record,columns))
;
clustermap.components.table.t14010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14009,map__14009__$1,data,record,columns){
return (function (_14012,meta14011__$1){var self__ = this;
var _14012__$1 = this;return (new clustermap.components.table.t14010(self__.columns,self__.record,self__.data,self__.map__14009,self__.p__13968,self__.render_table_row,meta14011__$1));
});})(map__14009,map__14009__$1,data,record,columns))
;
clustermap.components.table.__GT_t14010 = ((function (map__14009,map__14009__$1,data,record,columns){
return (function __GT_t14010(columns__$1,record__$1,data__$1,map__14009__$2,p__13968__$1,render_table_row__$1,meta14011){return (new clustermap.components.table.t14010(columns__$1,record__$1,data__$1,map__14009__$2,p__13968__$1,render_table_row__$1,meta14011));
});})(map__14009,map__14009__$1,data,record,columns))
;
}
return (new clustermap.components.table.t14010(columns,record,data,map__14009__$1,p__13968,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(columns,table_data,opts){return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs14090 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = (function iter__14092(s__14093){return (new cljs.core.LazySeq(null,(function (){var s__14093__$1 = s__14093;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14093__$1);if(temp__4126__auto__)
{var s__14093__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14093__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14093__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14095 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14094 = (0);while(true){
if((i__14094 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__14094);cljs.core.chunk_append.call(null,b__14095,(function (){var iter__4283__auto__ = ((function (i__14094,col,c__4281__auto__,size__4282__auto__,b__14095,s__14093__$2,temp__4126__auto__){
return (function iter__14112(s__14113){return (new cljs.core.LazySeq(null,((function (i__14094,col,c__4281__auto__,size__4282__auto__,b__14095,s__14093__$2,temp__4126__auto__){
return (function (){var s__14113__$1 = s__14113;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14113__$1);if(temp__4126__auto____$1)
{var s__14113__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14113__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__14113__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__14115 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__14114 = (0);while(true){
if((i__14114 < size__4282__auto____$1))
{var vec__14118 = cljs.core._nth.call(null,c__4281__auto____$1,i__14114);var col_key = cljs.core.nth.call(null,vec__14118,(0),null);var col_name = cljs.core.nth.call(null,vec__14118,(1),null);cljs.core.chunk_append.call(null,b__14115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__14128 = (i__14114 + (1));
i__14114 = G__14128;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14115),iter__14112.call(null,cljs.core.chunk_rest.call(null,s__14113__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14115),null);
}
} else
{var vec__14119 = cljs.core.first.call(null,s__14113__$2);var col_key = cljs.core.nth.call(null,vec__14119,(0),null);var col_name = cljs.core.nth.call(null,vec__14119,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__14112.call(null,cljs.core.rest.call(null,s__14113__$2)));
}
} else
{return null;
}
break;
}
});})(i__14094,col,c__4281__auto__,size__4282__auto__,b__14095,s__14093__$2,temp__4126__auto__))
,null,null));
});})(i__14094,col,c__4281__auto__,size__4282__auto__,b__14095,s__14093__$2,temp__4126__auto__))
;return iter__4283__auto__.call(null,col);
})());
{
var G__14129 = (i__14094 + (1));
i__14094 = G__14129;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14095),iter__14092.call(null,cljs.core.chunk_rest.call(null,s__14093__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14095),null);
}
} else
{var col = cljs.core.first.call(null,s__14093__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__14093__$2,temp__4126__auto__){
return (function iter__14120(s__14121){return (new cljs.core.LazySeq(null,((function (col,s__14093__$2,temp__4126__auto__){
return (function (){var s__14121__$1 = s__14121;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14121__$1);if(temp__4126__auto____$1)
{var s__14121__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14121__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14121__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14123 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14122 = (0);while(true){
if((i__14122 < size__4282__auto__))
{var vec__14126 = cljs.core._nth.call(null,c__4281__auto__,i__14122);var col_key = cljs.core.nth.call(null,vec__14126,(0),null);var col_name = cljs.core.nth.call(null,vec__14126,(1),null);cljs.core.chunk_append.call(null,b__14123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__14130 = (i__14122 + (1));
i__14122 = G__14130;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14123),iter__14120.call(null,cljs.core.chunk_rest.call(null,s__14121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14123),null);
}
} else
{var vec__14127 = cljs.core.first.call(null,s__14121__$2);var col_key = cljs.core.nth.call(null,vec__14127,(0),null);var col_name = cljs.core.nth.call(null,vec__14127,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__14120.call(null,cljs.core.rest.call(null,s__14121__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__14093__$2,temp__4126__auto__))
,null,null));
});})(col,s__14093__$2,temp__4126__auto__))
;return iter__4283__auto__.call(null,col);
})(),iter__14092.call(null,cljs.core.rest.call(null,s__14093__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs14090))?sablono.interpreter.attributes.call(null,attrs14090):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14090))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14090)], null))));
})(),(function (){var attrs14091 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
})], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs14091))?sablono.interpreter.attributes.call(null,attrs14091):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14091))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14091)], null))));
})())));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,offset,limit){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,offset,limit);
});
clustermap.components.table.table_component = (function table_component(p__14131,owner){var map__14144 = p__14131;var map__14144__$1 = ((cljs.core.seq_QMARK_.call(null,map__14144))?cljs.core.apply.call(null,cljs.core.hash_map,map__14144):map__14144);var props = map__14144__$1;var map__14145 = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__14145__$1 = ((cljs.core.seq_QMARK_.call(null,map__14145))?cljs.core.apply.call(null,cljs.core.hash_map,map__14145):map__14145);var table_state = map__14145__$1;var table_data = cljs.core.get.call(null,map__14145__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__14146 = cljs.core.get.call(null,map__14145__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__14146__$1 = ((cljs.core.seq_QMARK_.call(null,map__14146))?cljs.core.apply.call(null,cljs.core.hash_map,map__14146):map__14146);var controls = map__14146__$1;var index = cljs.core.get.call(null,map__14146__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__14146__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var offset = cljs.core.get.call(null,map__14146__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var limit = cljs.core.get.call(null,map__14146__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));var filter_by_view = cljs.core.get.call(null,map__14146__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var columns = cljs.core.get.call(null,map__14146__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var bounds = cljs.core.get.call(null,map__14144__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t14147 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t14147 = (function (sort_spec,table_component,owner,filter_by_view,props,map__14146,table_data,limit,index,offset,filter_spec,columns,map__14145,p__14131,table_state,controls,bounds,map__14144,meta14148){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__14146 = map__14146;
this.table_data = table_data;
this.limit = limit;
this.index = index;
this.offset = offset;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__14145 = map__14145;
this.p__14131 = p__14131;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.map__14144 = map__14144;
this.meta14148 = meta14148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t14147.cljs$lang$type = true;
clustermap.components.table.t14147.cljs$lang$ctorStr = "clustermap.components.table/t14147";
clustermap.components.table.t14147.cljs$lang$ctorPrWriter = ((function (map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t14147");
});})(map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t14147.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t14147.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_,p__14150,p__14151){var self__ = this;
var map__14152 = p__14150;var map__14152__$1 = ((cljs.core.seq_QMARK_.call(null,map__14152))?cljs.core.apply.call(null,cljs.core.hash_map,map__14152):map__14152);var next_props = map__14152__$1;var map__14153 = cljs.core.get.call(null,map__14152__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__14153__$1 = ((cljs.core.seq_QMARK_.call(null,map__14153))?cljs.core.apply.call(null,cljs.core.hash_map,map__14153):map__14153);var next_table_state = map__14153__$1;var next_table_data = cljs.core.get.call(null,map__14153__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__14154 = cljs.core.get.call(null,map__14153__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__14154__$1 = ((cljs.core.seq_QMARK_.call(null,map__14154))?cljs.core.apply.call(null,cljs.core.hash_map,map__14154):map__14154);var next_controls = map__14154__$1;var next_index = cljs.core.get.call(null,map__14154__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__14154__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__14154__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_offset = cljs.core.get.call(null,map__14154__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var next_limit = cljs.core.get.call(null,map__14154__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));var next_filter_by_view = cljs.core.get.call(null,map__14154__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__14152__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_bounds = cljs.core.get.call(null,map__14152__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__14155 = p__14151;var map__14155__$1 = ((cljs.core.seq_QMARK_.call(null,map__14155))?cljs.core.apply.call(null,cljs.core.hash_map,map__14155):map__14155);var next_state = map__14155__$1;var table_data_resource = cljs.core.get.call(null,map__14155__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.call(null,next_controls,self__.controls);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return (cljs.core.not.call(null,self__.filter_by_view)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds));
} else
{return and__3546__auto__;
}
}
}
}
})()))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,next_bounds,next_sort_spec,next_offset,next_limit);
} else
{return null;
}
});})(map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t14147.prototype.om$core$IRender$ = true;
clustermap.components.table.t14147.prototype.om$core$IRender$render$arity$1 = ((function (map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,self__.columns,self__.table_data,cljs.core.PersistentArrayMap.EMPTY);
});})(map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t14147.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t14147.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
);
});})(map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t14147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_14149){var self__ = this;
var _14149__$1 = this;return self__.meta14148;
});})(map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t14147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_14149,meta14148__$1){var self__ = this;
var _14149__$1 = this;return (new clustermap.components.table.t14147(self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.map__14146,self__.table_data,self__.limit,self__.index,self__.offset,self__.filter_spec,self__.columns,self__.map__14145,self__.p__14131,self__.table_state,self__.controls,self__.bounds,self__.map__14144,meta14148__$1));
});})(map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.__GT_t14147 = ((function (map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function __GT_t14147(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__14146__$2,table_data__$1,limit__$1,index__$1,offset__$1,filter_spec__$1,columns__$1,map__14145__$2,p__14131__$1,table_state__$1,controls__$1,bounds__$1,map__14144__$2,meta14148){return (new clustermap.components.table.t14147(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__14146__$2,table_data__$1,limit__$1,index__$1,offset__$1,filter_spec__$1,columns__$1,map__14145__$2,p__14131__$1,table_state__$1,controls__$1,bounds__$1,map__14144__$2,meta14148));
});})(map__14144,map__14144__$1,props,map__14145,map__14145__$1,table_state,table_data,map__14146,map__14146__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
}
return (new clustermap.components.table.t14147(sort_spec,table_component,owner,filter_by_view,props,map__14146__$1,table_data,limit,index,offset,filter_spec,columns,map__14145__$1,p__14131,table_state,controls,bounds,map__14144__$1,null));
});
