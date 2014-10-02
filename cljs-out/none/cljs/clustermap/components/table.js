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
var pred__52946 = cljs.core._EQ_;var expr__52947 = current_order_dir;if(cljs.core.truth_(pred__52946.call(null,"asc",expr__52947)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__52946.call(null,"desc",expr__52947)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__52949 = cljs.core._EQ_;var expr__52950 = current_order_dir;if(cljs.core.truth_(pred__52949.call(null,"asc",expr__52950)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(comm,p__52952,view_update_key){var map__52965 = p__52952;var map__52965__$1 = ((cljs.core.seq_QMARK_.call(null,map__52965))?cljs.core.apply.call(null,cljs.core.hash_map,map__52965):map__52965);var collection = map__52965__$1;var size = cljs.core.get.call(null,map__52965__$1,new cljs.core.Keyword(null,"size","size",1098693007));var from = cljs.core.get.call(null,map__52965__$1,new cljs.core.Keyword(null,"from","from",1815293044));var count = cljs.core.get.call(null,map__52965__$1,new cljs.core.Keyword(null,"count","count",2139924085));var attrs52966 = (((from > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__52965,map__52965__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (from - size);var y__3866__auto__ = (0);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})()], null)], null));
});})(map__52965,map__52965__$1,collection,size,from,count))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs52966))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs52966)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52966))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs52967 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (from + size);var y__3873__auto__ = count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs52967))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs52967)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52967))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52967)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs52966,map__52965,map__52965__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(from + size)], null)], null));
});})(attrs52966,map__52965,map__52965__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52966),(function (){var attrs52968 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (from + size);var y__3873__auto__ = count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs52968))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs52968)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52968))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52968)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs52966,map__52965,map__52965__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(from + size)], null)], null));
});})(attrs52966,map__52965,map__52965__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});
clustermap.components.table.render_table_row = (function render_table_row(p__52977){var map__53018 = p__52977;var map__53018__$1 = ((cljs.core.seq_QMARK_.call(null,map__53018))?cljs.core.apply.call(null,cljs.core.hash_map,map__53018):map__53018);var data = map__53018__$1;var record = cljs.core.get.call(null,map__53018__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__53018__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t53019 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t53019 = (function (columns,record,data,map__53018,p__52977,render_table_row,meta53020){
this.columns = columns;
this.record = record;
this.data = data;
this.map__53018 = map__53018;
this.p__52977 = p__52977;
this.render_table_row = render_table_row;
this.meta53020 = meta53020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t53019.cljs$lang$type = true;
clustermap.components.table.t53019.cljs$lang$ctorStr = "clustermap.components.table/t53019";
clustermap.components.table.t53019.cljs$lang$ctorPrWriter = ((function (map__53018,map__53018__$1,data,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t53019");
});})(map__53018,map__53018__$1,data,record,columns))
;
clustermap.components.table.t53019.prototype.om$core$IRender$ = true;
clustermap.components.table.t53019.prototype.om$core$IRender$render$arity$1 = ((function (map__53018,map__53018__$1,data,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns){
return (function iter__53022(s__53023){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns){
return (function (){var s__53023__$1 = s__53023;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53023__$1);if(temp__4126__auto__)
{var s__53023__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53023__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53023__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53025 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53024 = (0);while(true){
if((i__53024 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__53024);cljs.core.chunk_append.call(null,b__53025,(function (){var iter__4283__auto__ = ((function (i__53024,col,c__4281__auto__,size__4282__auto__,b__53025,s__53023__$2,temp__4126__auto__,this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns){
return (function iter__53042(s__53043){return (new cljs.core.LazySeq(null,((function (i__53024,col,c__4281__auto__,size__4282__auto__,b__53025,s__53023__$2,temp__4126__auto__,this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns){
return (function (){var s__53043__$1 = s__53043;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53043__$1);if(temp__4126__auto____$1)
{var s__53043__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53043__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__53043__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__53045 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__53044 = (0);while(true){
if((i__53044 < size__4282__auto____$1))
{var vec__53048 = cljs.core._nth.call(null,c__4281__auto____$1,i__53044);var col_key = cljs.core.nth.call(null,vec__53048,(0),null);var col_name = cljs.core.nth.call(null,vec__53048,(1),null);cljs.core.chunk_append.call(null,b__53045,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})());
{
var G__53058 = (i__53044 + (1));
i__53044 = G__53058;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53045),iter__53042.call(null,cljs.core.chunk_rest.call(null,s__53043__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53045),null);
}
} else
{var vec__53049 = cljs.core.first.call(null,s__53043__$2);var col_key = cljs.core.nth.call(null,vec__53049,(0),null);var col_name = cljs.core.nth.call(null,vec__53049,(1),null);return cljs.core.cons.call(null,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})(),iter__53042.call(null,cljs.core.rest.call(null,s__53043__$2)));
}
} else
{return null;
}
break;
}
});})(i__53024,col,c__4281__auto__,size__4282__auto__,b__53025,s__53023__$2,temp__4126__auto__,this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns))
,null,null));
});})(i__53024,col,c__4281__auto__,size__4282__auto__,b__53025,s__53023__$2,temp__4126__auto__,this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns))
;return iter__4283__auto__.call(null,col);
})());
{
var G__53059 = (i__53024 + (1));
i__53024 = G__53059;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53025),iter__53022.call(null,cljs.core.chunk_rest.call(null,s__53023__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53025),null);
}
} else
{var col = cljs.core.first.call(null,s__53023__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__53023__$2,temp__4126__auto__,this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns){
return (function iter__53050(s__53051){return (new cljs.core.LazySeq(null,((function (col,s__53023__$2,temp__4126__auto__,this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns){
return (function (){var s__53051__$1 = s__53051;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53051__$1);if(temp__4126__auto____$1)
{var s__53051__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53051__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53051__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53053 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53052 = (0);while(true){
if((i__53052 < size__4282__auto__))
{var vec__53056 = cljs.core._nth.call(null,c__4281__auto__,i__53052);var col_key = cljs.core.nth.call(null,vec__53056,(0),null);var col_name = cljs.core.nth.call(null,vec__53056,(1),null);cljs.core.chunk_append.call(null,b__53053,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})());
{
var G__53060 = (i__53052 + (1));
i__53052 = G__53060;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53053),iter__53050.call(null,cljs.core.chunk_rest.call(null,s__53051__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53053),null);
}
} else
{var vec__53057 = cljs.core.first.call(null,s__53051__$2);var col_key = cljs.core.nth.call(null,vec__53057,(0),null);var col_name = cljs.core.nth.call(null,vec__53057,(1),null);return cljs.core.cons.call(null,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})(),iter__53050.call(null,cljs.core.rest.call(null,s__53051__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__53023__$2,temp__4126__auto__,this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns))
,null,null));
});})(col,s__53023__$2,temp__4126__auto__,this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns))
;return iter__4283__auto__.call(null,col);
})(),iter__53022.call(null,cljs.core.rest.call(null,s__53023__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns))
,null,null));
});})(this__9504__auto____$1,map__53018,map__53018__$1,data,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})()));var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ROW",self__.columns,self__.record,row], null)));return row;
})());
});})(map__53018,map__53018__$1,data,record,columns))
;
clustermap.components.table.t53019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53018,map__53018__$1,data,record,columns){
return (function (_53021){var self__ = this;
var _53021__$1 = this;return self__.meta53020;
});})(map__53018,map__53018__$1,data,record,columns))
;
clustermap.components.table.t53019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53018,map__53018__$1,data,record,columns){
return (function (_53021,meta53020__$1){var self__ = this;
var _53021__$1 = this;return (new clustermap.components.table.t53019(self__.columns,self__.record,self__.data,self__.map__53018,self__.p__52977,self__.render_table_row,meta53020__$1));
});})(map__53018,map__53018__$1,data,record,columns))
;
clustermap.components.table.__GT_t53019 = ((function (map__53018,map__53018__$1,data,record,columns){
return (function __GT_t53019(columns__$1,record__$1,data__$1,map__53018__$2,p__52977__$1,render_table_row__$1,meta53020){return (new clustermap.components.table.t53019(columns__$1,record__$1,data__$1,map__53018__$2,p__52977__$1,render_table_row__$1,meta53020));
});})(map__53018,map__53018__$1,data,record,columns))
;
}
return (new clustermap.components.table.t53019(columns,record,data,map__53018__$1,p__52977,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(columns,table_data,opts){return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs53099 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = (function iter__53101(s__53102){return (new cljs.core.LazySeq(null,(function (){var s__53102__$1 = s__53102;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53102__$1);if(temp__4126__auto__)
{var s__53102__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53102__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53102__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53104 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53103 = (0);while(true){
if((i__53103 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__53103);cljs.core.chunk_append.call(null,b__53104,(function (){var iter__4283__auto__ = ((function (i__53103,col,c__4281__auto__,size__4282__auto__,b__53104,s__53102__$2,temp__4126__auto__){
return (function iter__53121(s__53122){return (new cljs.core.LazySeq(null,((function (i__53103,col,c__4281__auto__,size__4282__auto__,b__53104,s__53102__$2,temp__4126__auto__){
return (function (){var s__53122__$1 = s__53122;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53122__$1);if(temp__4126__auto____$1)
{var s__53122__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53122__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__53122__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__53124 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__53123 = (0);while(true){
if((i__53123 < size__4282__auto____$1))
{var vec__53127 = cljs.core._nth.call(null,c__4281__auto____$1,i__53123);var col_key = cljs.core.nth.call(null,vec__53127,(0),null);var col_name = cljs.core.nth.call(null,vec__53127,(1),null);cljs.core.chunk_append.call(null,b__53124,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__53137 = (i__53123 + (1));
i__53123 = G__53137;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53124),iter__53121.call(null,cljs.core.chunk_rest.call(null,s__53122__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53124),null);
}
} else
{var vec__53128 = cljs.core.first.call(null,s__53122__$2);var col_key = cljs.core.nth.call(null,vec__53128,(0),null);var col_name = cljs.core.nth.call(null,vec__53128,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__53121.call(null,cljs.core.rest.call(null,s__53122__$2)));
}
} else
{return null;
}
break;
}
});})(i__53103,col,c__4281__auto__,size__4282__auto__,b__53104,s__53102__$2,temp__4126__auto__))
,null,null));
});})(i__53103,col,c__4281__auto__,size__4282__auto__,b__53104,s__53102__$2,temp__4126__auto__))
;return iter__4283__auto__.call(null,col);
})());
{
var G__53138 = (i__53103 + (1));
i__53103 = G__53138;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53104),iter__53101.call(null,cljs.core.chunk_rest.call(null,s__53102__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53104),null);
}
} else
{var col = cljs.core.first.call(null,s__53102__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__53102__$2,temp__4126__auto__){
return (function iter__53129(s__53130){return (new cljs.core.LazySeq(null,((function (col,s__53102__$2,temp__4126__auto__){
return (function (){var s__53130__$1 = s__53130;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53130__$1);if(temp__4126__auto____$1)
{var s__53130__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53130__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53130__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53132 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53131 = (0);while(true){
if((i__53131 < size__4282__auto__))
{var vec__53135 = cljs.core._nth.call(null,c__4281__auto__,i__53131);var col_key = cljs.core.nth.call(null,vec__53135,(0),null);var col_name = cljs.core.nth.call(null,vec__53135,(1),null);cljs.core.chunk_append.call(null,b__53132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__53139 = (i__53131 + (1));
i__53131 = G__53139;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53132),iter__53129.call(null,cljs.core.chunk_rest.call(null,s__53130__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53132),null);
}
} else
{var vec__53136 = cljs.core.first.call(null,s__53130__$2);var col_key = cljs.core.nth.call(null,vec__53136,(0),null);var col_name = cljs.core.nth.call(null,vec__53136,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__53129.call(null,cljs.core.rest.call(null,s__53130__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__53102__$2,temp__4126__auto__))
,null,null));
});})(col,s__53102__$2,temp__4126__auto__))
;return iter__4283__auto__.call(null,col);
})(),iter__53101.call(null,cljs.core.rest.call(null,s__53102__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs53099))?sablono.interpreter.attributes.call(null,attrs53099):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53099))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53099)], null))));
})(),(function (){var attrs53100 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
})], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs53100))?sablono.interpreter.attributes.call(null,attrs53100):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53100))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53100)], null))));
})())));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,offset,limit){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,offset,limit);
});
clustermap.components.table.table_component = (function table_component(p__53140,owner){var map__53153 = p__53140;var map__53153__$1 = ((cljs.core.seq_QMARK_.call(null,map__53153))?cljs.core.apply.call(null,cljs.core.hash_map,map__53153):map__53153);var props = map__53153__$1;var map__53154 = cljs.core.get.call(null,map__53153__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__53154__$1 = ((cljs.core.seq_QMARK_.call(null,map__53154))?cljs.core.apply.call(null,cljs.core.hash_map,map__53154):map__53154);var table_state = map__53154__$1;var table_data = cljs.core.get.call(null,map__53154__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__53155 = cljs.core.get.call(null,map__53154__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__53155__$1 = ((cljs.core.seq_QMARK_.call(null,map__53155))?cljs.core.apply.call(null,cljs.core.hash_map,map__53155):map__53155);var controls = map__53155__$1;var index = cljs.core.get.call(null,map__53155__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__53155__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var offset = cljs.core.get.call(null,map__53155__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var limit = cljs.core.get.call(null,map__53155__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));var filter_by_view = cljs.core.get.call(null,map__53155__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var columns = cljs.core.get.call(null,map__53155__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__53153__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var bounds = cljs.core.get.call(null,map__53153__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t53156 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t53156 = (function (map__53155,sort_spec,table_component,owner,filter_by_view,props,map__53154,table_data,limit,index,offset,filter_spec,columns,map__53153,table_state,p__53140,controls,bounds,meta53157){
this.map__53155 = map__53155;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__53154 = map__53154;
this.table_data = table_data;
this.limit = limit;
this.index = index;
this.offset = offset;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__53153 = map__53153;
this.table_state = table_state;
this.p__53140 = p__53140;
this.controls = controls;
this.bounds = bounds;
this.meta53157 = meta53157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t53156.cljs$lang$type = true;
clustermap.components.table.t53156.cljs$lang$ctorStr = "clustermap.components.table/t53156";
clustermap.components.table.t53156.cljs$lang$ctorPrWriter = ((function (map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t53156");
});})(map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t53156.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t53156.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_,p__53159,p__53160){var self__ = this;
var map__53161 = p__53159;var map__53161__$1 = ((cljs.core.seq_QMARK_.call(null,map__53161))?cljs.core.apply.call(null,cljs.core.hash_map,map__53161):map__53161);var next_props = map__53161__$1;var map__53162 = cljs.core.get.call(null,map__53161__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__53162__$1 = ((cljs.core.seq_QMARK_.call(null,map__53162))?cljs.core.apply.call(null,cljs.core.hash_map,map__53162):map__53162);var next_table_state = map__53162__$1;var next_table_data = cljs.core.get.call(null,map__53162__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__53163 = cljs.core.get.call(null,map__53162__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__53163__$1 = ((cljs.core.seq_QMARK_.call(null,map__53163))?cljs.core.apply.call(null,cljs.core.hash_map,map__53163):map__53163);var next_controls = map__53163__$1;var next_index = cljs.core.get.call(null,map__53163__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__53163__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__53163__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_offset = cljs.core.get.call(null,map__53163__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var next_limit = cljs.core.get.call(null,map__53163__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));var next_filter_by_view = cljs.core.get.call(null,map__53163__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__53161__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_bounds = cljs.core.get.call(null,map__53161__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__53164 = p__53160;var map__53164__$1 = ((cljs.core.seq_QMARK_.call(null,map__53164))?cljs.core.apply.call(null,cljs.core.hash_map,map__53164):map__53164);var next_state = map__53164__$1;var table_data_resource = cljs.core.get.call(null,map__53164__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t53156.prototype.om$core$IRender$ = true;
clustermap.components.table.t53156.prototype.om$core$IRender$render$arity$1 = ((function (map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,self__.columns,self__.table_data,cljs.core.PersistentArrayMap.EMPTY);
});})(map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t53156.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t53156.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
);
});})(map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t53156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_53158){var self__ = this;
var _53158__$1 = this;return self__.meta53157;
});})(map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t53156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_53158,meta53157__$1){var self__ = this;
var _53158__$1 = this;return (new clustermap.components.table.t53156(self__.map__53155,self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.map__53154,self__.table_data,self__.limit,self__.index,self__.offset,self__.filter_spec,self__.columns,self__.map__53153,self__.table_state,self__.p__53140,self__.controls,self__.bounds,meta53157__$1));
});})(map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.__GT_t53156 = ((function (map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function __GT_t53156(map__53155__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__53154__$2,table_data__$1,limit__$1,index__$1,offset__$1,filter_spec__$1,columns__$1,map__53153__$2,table_state__$1,p__53140__$1,controls__$1,bounds__$1,meta53157){return (new clustermap.components.table.t53156(map__53155__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__53154__$2,table_data__$1,limit__$1,index__$1,offset__$1,filter_spec__$1,columns__$1,map__53153__$2,table_state__$1,p__53140__$1,controls__$1,bounds__$1,meta53157));
});})(map__53153,map__53153__$1,props,map__53154,map__53154__$1,table_state,table_data,map__53155,map__53155__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
}
return (new clustermap.components.table.t53156(map__53155__$1,sort_spec,table_component,owner,filter_by_view,props,map__53154__$1,table_data,limit,index,offset,filter_spec,columns,map__53153__$1,table_state,p__53140,controls,bounds,null));
});

//# sourceMappingURL=table.js.map