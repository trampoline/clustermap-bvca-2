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
var pred__26950 = cljs.core._EQ_;var expr__26951 = current_order_dir;if(cljs.core.truth_(pred__26950.call(null,"asc",expr__26951)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__26950.call(null,"desc",expr__26951)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__26953 = cljs.core._EQ_;var expr__26954 = current_order_dir;if(cljs.core.truth_(pred__26953.call(null,"asc",expr__26954)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(comm,p__26956,view_update_key){var map__26969 = p__26956;var map__26969__$1 = ((cljs.core.seq_QMARK_.call(null,map__26969))?cljs.core.apply.call(null,cljs.core.hash_map,map__26969):map__26969);var collection = map__26969__$1;var size = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"size","size",1098693007));var from = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"from","from",1815293044));var count = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"count","count",2139924085));var attrs26970 = (((from > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26969,map__26969__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (from - size);var y__3866__auto__ = (0);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})()], null)], null));
});})(map__26969,map__26969__$1,collection,size,from,count))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26970))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs26970)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26970))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26971 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (from + size);var y__3873__auto__ = count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs26971))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs26971)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26971))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26971)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs26970,map__26969,map__26969__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(from + size)], null)], null));
});})(attrs26970,map__26969,map__26969__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26970),(function (){var attrs26972 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (from + size);var y__3873__auto__ = count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs26972))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs26972)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26972))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26972)], null))));
})(),((((from + size) < count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs26970,map__26969,map__26969__$1,collection,size,from,count){
return (function (e){e.preventDefault();
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),(from + size)], null)], null));
});})(attrs26970,map__26969,map__26969__$1,collection,size,from,count))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});
clustermap.components.table.render_table_row = (function render_table_row(p__26981){var map__27022 = p__26981;var map__27022__$1 = ((cljs.core.seq_QMARK_.call(null,map__27022))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);var data = map__27022__$1;var record = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t27023 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t27023 = (function (columns,record,data,map__27022,p__26981,render_table_row,meta27024){
this.columns = columns;
this.record = record;
this.data = data;
this.map__27022 = map__27022;
this.p__26981 = p__26981;
this.render_table_row = render_table_row;
this.meta27024 = meta27024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t27023.cljs$lang$type = true;
clustermap.components.table.t27023.cljs$lang$ctorStr = "clustermap.components.table/t27023";
clustermap.components.table.t27023.cljs$lang$ctorPrWriter = ((function (map__27022,map__27022__$1,data,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t27023");
});})(map__27022,map__27022__$1,data,record,columns))
;
clustermap.components.table.t27023.prototype.om$core$IRender$ = true;
clustermap.components.table.t27023.prototype.om$core$IRender$render$arity$1 = ((function (map__27022,map__27022__$1,data,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns){
return (function iter__27026(s__27027){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns){
return (function (){var s__27027__$1 = s__27027;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27027__$1);if(temp__4126__auto__)
{var s__27027__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27027__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27027__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27029 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27028 = (0);while(true){
if((i__27028 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__27028);cljs.core.chunk_append.call(null,b__27029,(function (){var iter__4283__auto__ = ((function (i__27028,col,c__4281__auto__,size__4282__auto__,b__27029,s__27027__$2,temp__4126__auto__,this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns){
return (function iter__27046(s__27047){return (new cljs.core.LazySeq(null,((function (i__27028,col,c__4281__auto__,size__4282__auto__,b__27029,s__27027__$2,temp__4126__auto__,this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns){
return (function (){var s__27047__$1 = s__27047;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27047__$1);if(temp__4126__auto____$1)
{var s__27047__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27047__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__27047__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__27049 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__27048 = (0);while(true){
if((i__27048 < size__4282__auto____$1))
{var vec__27052 = cljs.core._nth.call(null,c__4281__auto____$1,i__27048);var col_key = cljs.core.nth.call(null,vec__27052,(0),null);var col_name = cljs.core.nth.call(null,vec__27052,(1),null);cljs.core.chunk_append.call(null,b__27049,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})());
{
var G__27062 = (i__27048 + (1));
i__27048 = G__27062;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27049),iter__27046.call(null,cljs.core.chunk_rest.call(null,s__27047__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27049),null);
}
} else
{var vec__27053 = cljs.core.first.call(null,s__27047__$2);var col_key = cljs.core.nth.call(null,vec__27053,(0),null);var col_name = cljs.core.nth.call(null,vec__27053,(1),null);return cljs.core.cons.call(null,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})(),iter__27046.call(null,cljs.core.rest.call(null,s__27047__$2)));
}
} else
{return null;
}
break;
}
});})(i__27028,col,c__4281__auto__,size__4282__auto__,b__27029,s__27027__$2,temp__4126__auto__,this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns))
,null,null));
});})(i__27028,col,c__4281__auto__,size__4282__auto__,b__27029,s__27027__$2,temp__4126__auto__,this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns))
;return iter__4283__auto__.call(null,col);
})());
{
var G__27063 = (i__27028 + (1));
i__27028 = G__27063;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27029),iter__27026.call(null,cljs.core.chunk_rest.call(null,s__27027__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27029),null);
}
} else
{var col = cljs.core.first.call(null,s__27027__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__27027__$2,temp__4126__auto__,this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns){
return (function iter__27054(s__27055){return (new cljs.core.LazySeq(null,((function (col,s__27027__$2,temp__4126__auto__,this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns){
return (function (){var s__27055__$1 = s__27055;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27055__$1);if(temp__4126__auto____$1)
{var s__27055__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27055__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27055__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27057 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27056 = (0);while(true){
if((i__27056 < size__4282__auto__))
{var vec__27060 = cljs.core._nth.call(null,c__4281__auto__,i__27056);var col_key = cljs.core.nth.call(null,vec__27060,(0),null);var col_name = cljs.core.nth.call(null,vec__27060,(1),null);cljs.core.chunk_append.call(null,b__27057,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})());
{
var G__27064 = (i__27056 + (1));
i__27056 = G__27064;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27057),iter__27054.call(null,cljs.core.chunk_rest.call(null,s__27055__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27057),null);
}
} else
{var vec__27061 = cljs.core.first.call(null,s__27055__$2);var col_key = cljs.core.nth.call(null,vec__27061,(0),null);var col_name = cljs.core.nth.call(null,vec__27061,(1),null);return cljs.core.cons.call(null,(function (){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["KEYS",col_key,cljs.core.type.call(null,col_key),col_name,cljs.core.type.call(null,col_name),cljs.core.get.call(null,self__.record,col_key)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null);
})(),iter__27054.call(null,cljs.core.rest.call(null,s__27055__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__27027__$2,temp__4126__auto__,this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns))
,null,null));
});})(col,s__27027__$2,temp__4126__auto__,this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns))
;return iter__4283__auto__.call(null,col);
})(),iter__27026.call(null,cljs.core.rest.call(null,s__27027__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns))
,null,null));
});})(this__9504__auto____$1,map__27022,map__27022__$1,data,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})()));var _ = console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ROW",self__.columns,self__.record,row], null)));return row;
})());
});})(map__27022,map__27022__$1,data,record,columns))
;
clustermap.components.table.t27023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27022,map__27022__$1,data,record,columns){
return (function (_27025){var self__ = this;
var _27025__$1 = this;return self__.meta27024;
});})(map__27022,map__27022__$1,data,record,columns))
;
clustermap.components.table.t27023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27022,map__27022__$1,data,record,columns){
return (function (_27025,meta27024__$1){var self__ = this;
var _27025__$1 = this;return (new clustermap.components.table.t27023(self__.columns,self__.record,self__.data,self__.map__27022,self__.p__26981,self__.render_table_row,meta27024__$1));
});})(map__27022,map__27022__$1,data,record,columns))
;
clustermap.components.table.__GT_t27023 = ((function (map__27022,map__27022__$1,data,record,columns){
return (function __GT_t27023(columns__$1,record__$1,data__$1,map__27022__$2,p__26981__$1,render_table_row__$1,meta27024){return (new clustermap.components.table.t27023(columns__$1,record__$1,data__$1,map__27022__$2,p__26981__$1,render_table_row__$1,meta27024));
});})(map__27022,map__27022__$1,data,record,columns))
;
}
return (new clustermap.components.table.t27023(columns,record,data,map__27022__$1,p__26981,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(columns,table_data,opts){return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs27103 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = (function iter__27105(s__27106){return (new cljs.core.LazySeq(null,(function (){var s__27106__$1 = s__27106;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27106__$1);if(temp__4126__auto__)
{var s__27106__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27106__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27106__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27108 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27107 = (0);while(true){
if((i__27107 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__27107);cljs.core.chunk_append.call(null,b__27108,(function (){var iter__4283__auto__ = ((function (i__27107,col,c__4281__auto__,size__4282__auto__,b__27108,s__27106__$2,temp__4126__auto__){
return (function iter__27125(s__27126){return (new cljs.core.LazySeq(null,((function (i__27107,col,c__4281__auto__,size__4282__auto__,b__27108,s__27106__$2,temp__4126__auto__){
return (function (){var s__27126__$1 = s__27126;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27126__$1);if(temp__4126__auto____$1)
{var s__27126__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27126__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__27126__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__27128 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__27127 = (0);while(true){
if((i__27127 < size__4282__auto____$1))
{var vec__27131 = cljs.core._nth.call(null,c__4281__auto____$1,i__27127);var col_key = cljs.core.nth.call(null,vec__27131,(0),null);var col_name = cljs.core.nth.call(null,vec__27131,(1),null);cljs.core.chunk_append.call(null,b__27128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__27141 = (i__27127 + (1));
i__27127 = G__27141;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27128),iter__27125.call(null,cljs.core.chunk_rest.call(null,s__27126__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27128),null);
}
} else
{var vec__27132 = cljs.core.first.call(null,s__27126__$2);var col_key = cljs.core.nth.call(null,vec__27132,(0),null);var col_name = cljs.core.nth.call(null,vec__27132,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__27125.call(null,cljs.core.rest.call(null,s__27126__$2)));
}
} else
{return null;
}
break;
}
});})(i__27107,col,c__4281__auto__,size__4282__auto__,b__27108,s__27106__$2,temp__4126__auto__))
,null,null));
});})(i__27107,col,c__4281__auto__,size__4282__auto__,b__27108,s__27106__$2,temp__4126__auto__))
;return iter__4283__auto__.call(null,col);
})());
{
var G__27142 = (i__27107 + (1));
i__27107 = G__27142;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27108),iter__27105.call(null,cljs.core.chunk_rest.call(null,s__27106__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27108),null);
}
} else
{var col = cljs.core.first.call(null,s__27106__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__27106__$2,temp__4126__auto__){
return (function iter__27133(s__27134){return (new cljs.core.LazySeq(null,((function (col,s__27106__$2,temp__4126__auto__){
return (function (){var s__27134__$1 = s__27134;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27134__$1);if(temp__4126__auto____$1)
{var s__27134__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27134__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__27134__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__27136 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__27135 = (0);while(true){
if((i__27135 < size__4282__auto__))
{var vec__27139 = cljs.core._nth.call(null,c__4281__auto__,i__27135);var col_key = cljs.core.nth.call(null,vec__27139,(0),null);var col_name = cljs.core.nth.call(null,vec__27139,(1),null);cljs.core.chunk_append.call(null,b__27136,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__27143 = (i__27135 + (1));
i__27135 = G__27143;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27136),iter__27133.call(null,cljs.core.chunk_rest.call(null,s__27134__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27136),null);
}
} else
{var vec__27140 = cljs.core.first.call(null,s__27134__$2);var col_key = cljs.core.nth.call(null,vec__27140,(0),null);var col_name = cljs.core.nth.call(null,vec__27140,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__27133.call(null,cljs.core.rest.call(null,s__27134__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__27106__$2,temp__4126__auto__))
,null,null));
});})(col,s__27106__$2,temp__4126__auto__))
;return iter__4283__auto__.call(null,col);
})(),iter__27105.call(null,cljs.core.rest.call(null,s__27106__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs27103))?sablono.interpreter.attributes.call(null,attrs27103):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27103))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27103)], null))));
})(),(function (){var attrs27104 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
})], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs27104))?sablono.interpreter.attributes.call(null,attrs27104):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27104))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27104)], null))));
})())));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,offset,limit){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,offset,limit);
});
clustermap.components.table.table_component = (function table_component(p__27144,owner){var map__27157 = p__27144;var map__27157__$1 = ((cljs.core.seq_QMARK_.call(null,map__27157))?cljs.core.apply.call(null,cljs.core.hash_map,map__27157):map__27157);var props = map__27157__$1;var map__27158 = cljs.core.get.call(null,map__27157__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27158__$1 = ((cljs.core.seq_QMARK_.call(null,map__27158))?cljs.core.apply.call(null,cljs.core.hash_map,map__27158):map__27158);var table_state = map__27158__$1;var table_data = cljs.core.get.call(null,map__27158__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27159 = cljs.core.get.call(null,map__27158__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27159__$1 = ((cljs.core.seq_QMARK_.call(null,map__27159))?cljs.core.apply.call(null,cljs.core.hash_map,map__27159):map__27159);var controls = map__27159__$1;var index = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var offset = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var limit = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));var filter_by_view = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var columns = cljs.core.get.call(null,map__27159__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_spec = cljs.core.get.call(null,map__27157__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var bounds = cljs.core.get.call(null,map__27157__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t27160 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t27160 = (function (sort_spec,table_component,owner,filter_by_view,props,table_data,limit,index,offset,map__27158,filter_spec,columns,table_state,p__27144,controls,map__27159,bounds,map__27157,meta27161){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.limit = limit;
this.index = index;
this.offset = offset;
this.map__27158 = map__27158;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.p__27144 = p__27144;
this.controls = controls;
this.map__27159 = map__27159;
this.bounds = bounds;
this.map__27157 = map__27157;
this.meta27161 = meta27161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t27160.cljs$lang$type = true;
clustermap.components.table.t27160.cljs$lang$ctorStr = "clustermap.components.table/t27160";
clustermap.components.table.t27160.cljs$lang$ctorPrWriter = ((function (map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t27160");
});})(map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t27160.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t27160.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_,p__27163,p__27164){var self__ = this;
var map__27165 = p__27163;var map__27165__$1 = ((cljs.core.seq_QMARK_.call(null,map__27165))?cljs.core.apply.call(null,cljs.core.hash_map,map__27165):map__27165);var next_props = map__27165__$1;var map__27166 = cljs.core.get.call(null,map__27165__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__27166__$1 = ((cljs.core.seq_QMARK_.call(null,map__27166))?cljs.core.apply.call(null,cljs.core.hash_map,map__27166):map__27166);var next_table_state = map__27166__$1;var next_table_data = cljs.core.get.call(null,map__27166__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__27167 = cljs.core.get.call(null,map__27166__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__27167__$1 = ((cljs.core.seq_QMARK_.call(null,map__27167))?cljs.core.apply.call(null,cljs.core.hash_map,map__27167):map__27167);var next_controls = map__27167__$1;var next_index = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_offset = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var next_limit = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));var next_filter_by_view = cljs.core.get.call(null,map__27167__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__27165__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var next_bounds = cljs.core.get.call(null,map__27165__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__27168 = p__27164;var map__27168__$1 = ((cljs.core.seq_QMARK_.call(null,map__27168))?cljs.core.apply.call(null,cljs.core.hash_map,map__27168):map__27168);var next_state = map__27168__$1;var table_data_resource = cljs.core.get.call(null,map__27168__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t27160.prototype.om$core$IRender$ = true;
clustermap.components.table.t27160.prototype.om$core$IRender$render$arity$1 = ((function (map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,self__.columns,self__.table_data,cljs.core.PersistentArrayMap.EMPTY);
});})(map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t27160.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t27160.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
);
});})(map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t27160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_27162){var self__ = this;
var _27162__$1 = this;return self__.meta27161;
});})(map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.t27160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function (_27162,meta27161__$1){var self__ = this;
var _27162__$1 = this;return (new clustermap.components.table.t27160(self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.limit,self__.index,self__.offset,self__.map__27158,self__.filter_spec,self__.columns,self__.table_state,self__.p__27144,self__.controls,self__.map__27159,self__.bounds,self__.map__27157,meta27161__$1));
});})(map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
clustermap.components.table.__GT_t27160 = ((function (map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds){
return (function __GT_t27160(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,limit__$1,index__$1,offset__$1,map__27158__$2,filter_spec__$1,columns__$1,table_state__$1,p__27144__$1,controls__$1,map__27159__$2,bounds__$1,map__27157__$2,meta27161){return (new clustermap.components.table.t27160(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,limit__$1,index__$1,offset__$1,map__27158__$2,filter_spec__$1,columns__$1,table_state__$1,p__27144__$1,controls__$1,map__27159__$2,bounds__$1,map__27157__$2,meta27161));
});})(map__27157,map__27157__$1,props,map__27158,map__27158__$1,table_state,table_data,map__27159,map__27159__$1,controls,index,sort_spec,offset,limit,filter_by_view,columns,filter_spec,bounds))
;
}
return (new clustermap.components.table.t27160(sort_spec,table_component,owner,filter_by_view,props,table_data,limit,index,offset,map__27158__$1,filter_spec,columns,table_state,p__27144,controls,map__27159__$1,bounds,map__27157__$1,null));
});
