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
clustermap.components.table.order_col = (function order_col(controls,p__44604,col_key,col_name){var map__44614 = p__44604;var map__44614__$1 = ((cljs.core.seq_QMARK_(map__44614))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44614):map__44614);var table_data = map__44614__$1;var current_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44614__$1,cljs.core.constant$keyword$1367);var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_(current_sort_spec))?cljs.core.first(current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__44615 = current_sort_spec__$1;var G__44615__$1 = (((G__44615 == null))?null:cljs.core.keys(G__44615));var G__44615__$2 = (((G__44615__$1 == null))?null:cljs.core.first(G__44615__$1));return G__44615__$2;
})();var current_sort_dir = (function (){var G__44616 = current_sort_spec__$1;var G__44616__$1 = (((G__44616 == null))?null:(current_sort_key.cljs$core$IFn$_invoke$arity$1 ? current_sort_key.cljs$core$IFn$_invoke$arity$1(G__44616) : current_sort_key.call(null,G__44616)));var G__44616__$2 = (((G__44616__$1 == null))?null:cljs.core.constant$keyword$1368.cljs$core$IFn$_invoke$arity$1(G__44616__$1));return G__44616__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__44614,map__44614__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__44617 = cljs.core._EQ_;var expr__44618 = current_sort_dir;if(cljs.core.truth_((pred__44617.cljs$core$IFn$_invoke$arity$2 ? pred__44617.cljs$core$IFn$_invoke$arity$2("asc",expr__44618) : pred__44617.call(null,"asc",expr__44618))))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1367,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1369], null)], true, false));
} else
{if(cljs.core.truth_((pred__44617.cljs$core$IFn$_invoke$arity$2 ? pred__44617.cljs$core$IFn$_invoke$arity$2("desc",expr__44618) : pred__44617.call(null,"desc",expr__44618))))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1367,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1370], null)], true, false));
} else
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(controls,cljs.core.constant$keyword$1367,new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1368,cljs.core.constant$keyword$1369], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__44614,map__44614__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret(col_name),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_sort_key,col_key))?sablono.interpreter.interpret((function (){var pred__44620 = cljs.core._EQ_;var expr__44621 = current_sort_dir;if(cljs.core.truth_((pred__44620.cljs$core$IFn$_invoke$arity$2 ? pred__44620.cljs$core$IFn$_invoke$arity$2("asc",expr__44621) : pred__44620.call(null,"asc",expr__44621))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1371], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1372], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__44623,owner,opts){var map__44640 = p__44623;var map__44640__$1 = ((cljs.core.seq_QMARK_(map__44640))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44640):map__44640);var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,cljs.core.constant$keyword$1354);var map__44641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44640__$1,cljs.core.constant$keyword$1373);var map__44641__$1 = ((cljs.core.seq_QMARK_(map__44641))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44641):map__44641);var table_data = map__44641__$1;var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44641__$1,cljs.core.constant$keyword$1374);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44641__$1,cljs.core.constant$keyword$1126);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44641__$1,cljs.core.constant$keyword$1127);if(typeof clustermap.components.table.t44642 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t44642 = (function (owner,p__44623,paginate,table_data,map__44640,controls,size,from,count,opts,map__44641,meta44643){
this.owner = owner;
this.p__44623 = p__44623;
this.paginate = paginate;
this.table_data = table_data;
this.map__44640 = map__44640;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.map__44641 = map__44641;
this.meta44643 = meta44643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t44642.cljs$lang$type = true;
clustermap.components.table.t44642.cljs$lang$ctorStr = "clustermap.components.table/t44642";
clustermap.components.table.t44642.cljs$lang$ctorPrWriter = ((function (map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t44642");
});})(map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size))
;
clustermap.components.table.t44642.prototype.om$core$IRender$ = true;
clustermap.components.table.t44642.prototype.om$core$IRender$render$arity$1 = ((function (map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs44645 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1375,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1237,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1235,"#",cljs.core.constant$keyword$1376,((function (this__9504__auto____$1,map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1126,(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1377], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1375,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1377], null)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs44645))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs44645], 0))):{"className": "paginate"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44645))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs44646 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs44646))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs44646], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44646))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44646)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs44645,this__9504__auto____$1,map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1126,(self__.from + self__.size));
});})(attrs44645,this__9504__auto____$1,map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44645),(function (){var attrs44647 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs44647))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs44647], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44647))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44647)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs44645,this__9504__auto____$1,map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$1126,(self__.from + self__.size));
});})(attrs44645,this__9504__auto____$1,map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size))
;
clustermap.components.table.t44642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size){
return (function (_44644){var self__ = this;
var _44644__$1 = this;return self__.meta44643;
});})(map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size))
;
clustermap.components.table.t44642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size){
return (function (_44644,meta44643__$1){var self__ = this;
var _44644__$1 = this;return (new clustermap.components.table.t44642(self__.owner,self__.p__44623,self__.paginate,self__.table_data,self__.map__44640,self__.controls,self__.size,self__.from,self__.count,self__.opts,self__.map__44641,meta44643__$1));
});})(map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t44642 = ((function (map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size){
return (function __GT_t44642(owner__$1,p__44623__$1,paginate__$1,table_data__$1,map__44640__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__44641__$2,meta44643){return (new clustermap.components.table.t44642(owner__$1,p__44623__$1,paginate__$1,table_data__$1,map__44640__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,map__44641__$2,meta44643));
});})(map__44640,map__44640__$1,controls,map__44641,map__44641__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t44642(owner,p__44623,paginate,table_data,map__44640__$1,controls,size,from,count,opts,map__44641__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__44656){var map__44669 = p__44656;var map__44669__$1 = ((cljs.core.seq_QMARK_(map__44669))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44669):map__44669);var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44669__$1,cljs.core.constant$keyword$1378);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44669__$1,cljs.core.constant$keyword$1379);if(typeof clustermap.components.table.t44670 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t44670 = (function (columns,record,map__44669,p__44656,render_table_row,meta44671){
this.columns = columns;
this.record = record;
this.map__44669 = map__44669;
this.p__44656 = p__44656;
this.render_table_row = render_table_row;
this.meta44671 = meta44671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t44670.cljs$lang$type = true;
clustermap.components.table.t44670.cljs$lang$ctorStr = "clustermap.components.table/t44670";
clustermap.components.table.t44670.cljs$lang$ctorPrWriter = ((function (map__44669,map__44669__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t44670");
});})(map__44669,map__44669__$1,record,columns))
;
clustermap.components.table.t44670.prototype.om$core$IRender$ = true;
clustermap.components.table.t44670.prototype.om$core$IRender$render$arity$1 = ((function (map__44669,map__44669__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret((function (){var row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1380], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__44669,map__44669__$1,record,columns){
return (function iter__44673(s__44674){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__44669,map__44669__$1,record,columns){
return (function (){var s__44674__$1 = s__44674;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44674__$1);if(temp__4126__auto__)
{var s__44674__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44674__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44674__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44676 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44675 = (0);while(true){
if((i__44675 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44675);cljs.core.chunk_append(b__44676,(function (){var vec__44679 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44679,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44679,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44679,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1381,(formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)) : formatter__$1.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)))], null);
})());
{
var G__44681 = (i__44675 + (1));
i__44675 = G__44681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44676),iter__44673(cljs.core.chunk_rest(s__44674__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44676),null);
}
} else
{var col = cljs.core.first(s__44674__$2);return cljs.core.cons((function (){var vec__44680 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44680,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44680,(1),null);var formatter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44680,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1381,(formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)) : formatter__$1.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)))], null);
})(),iter__44673(cljs.core.rest(s__44674__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__44669,map__44669__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__44669,map__44669__$1,record,columns))
;return iter__4283__auto__(self__.columns);
})());return row;
})());
});})(map__44669,map__44669__$1,record,columns))
;
clustermap.components.table.t44670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44669,map__44669__$1,record,columns){
return (function (_44672){var self__ = this;
var _44672__$1 = this;return self__.meta44671;
});})(map__44669,map__44669__$1,record,columns))
;
clustermap.components.table.t44670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44669,map__44669__$1,record,columns){
return (function (_44672,meta44671__$1){var self__ = this;
var _44672__$1 = this;return (new clustermap.components.table.t44670(self__.columns,self__.record,self__.map__44669,self__.p__44656,self__.render_table_row,meta44671__$1));
});})(map__44669,map__44669__$1,record,columns))
;
clustermap.components.table.__GT_t44670 = ((function (map__44669,map__44669__$1,record,columns){
return (function __GT_t44670(columns__$1,record__$1,map__44669__$2,p__44656__$1,render_table_row__$1,meta44671){return (new clustermap.components.table.t44670(columns__$1,record__$1,map__44669__$2,p__44656__$1,render_table_row__$1,meta44671));
});})(map__44669,map__44669__$1,record,columns))
;
}
return (new clustermap.components.table.t44670(columns,record,map__44669__$1,p__44656,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__44682,owner,opts){var map__44706 = p__44682;var map__44706__$1 = ((cljs.core.seq_QMARK_(map__44706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44706):map__44706);var props = map__44706__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44706__$1,cljs.core.constant$keyword$1373);var map__44707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44706__$1,cljs.core.constant$keyword$1354);var map__44707__$1 = ((cljs.core.seq_QMARK_(map__44707))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44707):map__44707);var controls = map__44707__$1;var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44707__$1,cljs.core.constant$keyword$1379);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44707__$1,cljs.core.constant$keyword$1289);console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs44708 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1354,controls,cljs.core.constant$keyword$1373,table_data], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs44708))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs44708], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44708))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs44709 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1380], null),(function (){var iter__4283__auto__ = ((function (attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view){
return (function iter__44713(s__44714){return (new cljs.core.LazySeq(null,((function (attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view){
return (function (){var s__44714__$1 = s__44714;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44714__$1);if(temp__4126__auto__)
{var s__44714__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44714__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44714__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44716 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44715 = (0);while(true){
if((i__44715 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44715);cljs.core.chunk_append(b__44716,(function (){var vec__44719 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44719,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44719,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1382,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__44729 = (i__44715 + (1));
i__44715 = G__44729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44716),iter__44713(cljs.core.chunk_rest(s__44714__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44716),null);
}
} else
{var col = cljs.core.first(s__44714__$2);return cljs.core.cons((function (){var vec__44720 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44720,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44720,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1382,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__44713(cljs.core.rest(s__44714__$2)));
}
} else
{return null;
}
break;
}
});})(attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs44709))?sablono.interpreter.attributes(attrs44709):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44709))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44709)], null))));
})(),(function (){var attrs44710 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1275.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1213,((function (attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1379,columns,cljs.core.constant$keyword$1378,r,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1383.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs44710))?sablono.interpreter.attributes(attrs44710):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44710))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44710)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1354,controls,cljs.core.constant$keyword$1373,table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44708),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs44711 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1380], null),(function (){var iter__4283__auto__ = ((function (attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view){
return (function iter__44721(s__44722){return (new cljs.core.LazySeq(null,((function (attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view){
return (function (){var s__44722__$1 = s__44722;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44722__$1);if(temp__4126__auto__)
{var s__44722__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44722__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44722__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44724 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44723 = (0);while(true){
if((i__44723 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44723);cljs.core.chunk_append(b__44724,(function (){var vec__44727 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1382,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})());
{
var G__44730 = (i__44723 + (1));
i__44723 = G__44730;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44724),iter__44721(cljs.core.chunk_rest(s__44722__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44724),null);
}
} else
{var col = cljs.core.first(s__44722__$2);return cljs.core.cons((function (){var vec__44728 = col;var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44728,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44728,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1382,clustermap.components.table.order_col(controls,table_data,col_key,col_name)], null);
})(),iter__44721(cljs.core.rest(s__44722__$2)));
}
} else
{return null;
}
break;
}
});})(attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs44711))?sablono.interpreter.attributes(attrs44711):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44711))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44711)], null))));
})(),(function (){var attrs44712 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1275.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1213,((function (attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1379,columns,cljs.core.constant$keyword$1378,r,cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1383.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs44708,map__44706,map__44706__$1,props,table_data,map__44707,map__44707__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs44712))?sablono.interpreter.attributes(attrs44712):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44712))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44712)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1354,controls,cljs.core.constant$keyword$1373,table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.simple_table,cljs.core.array_seq([index,index_type,filter_spec,bounds,sort_spec,from,size], 0));
});
clustermap.components.table.table_component = (function table_component(p__44731,owner){var map__44746 = p__44731;var map__44746__$1 = ((cljs.core.seq_QMARK_(map__44746))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44746):map__44746);var props = map__44746__$1;var map__44747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44746__$1,cljs.core.constant$keyword$1384);var map__44747__$1 = ((cljs.core.seq_QMARK_(map__44747))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44747):map__44747);var table_state = map__44747__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44747__$1,cljs.core.constant$keyword$1373);var map__44748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44747__$1,cljs.core.constant$keyword$1354);var map__44748__$1 = ((cljs.core.seq_QMARK_(map__44748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44748):map__44748);var controls = map__44748__$1;var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44748__$1,cljs.core.constant$keyword$1136);var sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44748__$1,cljs.core.constant$keyword$1367);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44748__$1,cljs.core.constant$keyword$1126);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44748__$1,cljs.core.constant$keyword$1127);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44748__$1,cljs.core.constant$keyword$1379);var map__44749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44746__$1,cljs.core.constant$keyword$1128);var map__44749__$1 = ((cljs.core.seq_QMARK_(map__44749))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44749):map__44749);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44749__$1,cljs.core.constant$keyword$1289);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44749__$1,cljs.core.constant$keyword$1304);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44746__$1,cljs.core.constant$keyword$1120);if(typeof clustermap.components.table.t44750 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t44750 = (function (sort_spec,table_component,owner,map__44746,filter_by_view,props,map__44747,table_data,index,filter_spec,columns,table_state,controls,p__44731,bounds,size,from,map__44749,map__44748,meta44751){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.map__44746 = map__44746;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__44747 = map__44747;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.p__44731 = p__44731;
this.bounds = bounds;
this.size = size;
this.from = from;
this.map__44749 = map__44749;
this.map__44748 = map__44748;
this.meta44751 = meta44751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t44750.cljs$lang$type = true;
clustermap.components.table.t44750.cljs$lang$ctorStr = "clustermap.components.table/t44750";
clustermap.components.table.t44750.cljs$lang$ctorPrWriter = ((function (map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t44750");
});})(map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t44750.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t44750.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__44753,p__44754){var self__ = this;
var map__44755 = p__44753;var map__44755__$1 = ((cljs.core.seq_QMARK_(map__44755))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44755):map__44755);var next_props = map__44755__$1;var map__44756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44755__$1,cljs.core.constant$keyword$1384);var map__44756__$1 = ((cljs.core.seq_QMARK_(map__44756))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44756):map__44756);var next_table_state = map__44756__$1;var next_table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44756__$1,cljs.core.constant$keyword$1373);var map__44757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44756__$1,cljs.core.constant$keyword$1354);var map__44757__$1 = ((cljs.core.seq_QMARK_(map__44757))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44757):map__44757);var next_controls = map__44757__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44757__$1,cljs.core.constant$keyword$1136);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44757__$1,cljs.core.constant$keyword$1355);var next_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44757__$1,cljs.core.constant$keyword$1367);var next_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44757__$1,cljs.core.constant$keyword$1126);var next_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44757__$1,cljs.core.constant$keyword$1127);var map__44758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44755__$1,cljs.core.constant$keyword$1128);var map__44758__$1 = ((cljs.core.seq_QMARK_(map__44758))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44758):map__44758);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44758__$1,cljs.core.constant$keyword$1289);var next_filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44758__$1,cljs.core.constant$keyword$1304);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44755__$1,cljs.core.constant$keyword$1120);var map__44759 = p__44754;var map__44759__$1 = ((cljs.core.seq_QMARK_(map__44759))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44759):map__44759);var next_state = map__44759__$1;var table_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44759__$1,cljs.core.constant$keyword$1385);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_table_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_controls,self__.controls);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_sort_spec,self__.sort_spec);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var or__3558__auto____$3 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_spec,self__.filter_spec);if(or__3558__auto____$3)
{return or__3558__auto____$3;
} else
{var or__3558__auto____$4 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$4)
{return or__3558__auto____$4;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds);
} else
{return and__3546__auto__;
}
}
}
}
}
}
})()))
{return clustermap.components.table.request_table_data(table_data_resource,next_index,next_index_type,next_filter_spec,(cljs.core.truth_(next_filter_by_view)?next_bounds:null),next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t44750.prototype.om$core$IRender$ = true;
clustermap.components.table.t44750.prototype.om$core$IRender$render$arity$1 = ((function (map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1373,self__.table_data,cljs.core.constant$keyword$1354,self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t44750.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t44750.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource("table-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1385,tdr);
return clustermap.ordered_resource.retrieve_responses(tdr,((function (tdr,___$1,map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1373], null),data);
});})(tdr,___$1,map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds))
);
});})(map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t44750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds){
return (function (_44752){var self__ = this;
var _44752__$1 = this;return self__.meta44751;
});})(map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t44750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds){
return (function (_44752,meta44751__$1){var self__ = this;
var _44752__$1 = this;return (new clustermap.components.table.t44750(self__.sort_spec,self__.table_component,self__.owner,self__.map__44746,self__.filter_by_view,self__.props,self__.map__44747,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.p__44731,self__.bounds,self__.size,self__.from,self__.map__44749,self__.map__44748,meta44751__$1));
});})(map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t44750 = ((function (map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t44750(sort_spec__$1,table_component__$1,owner__$1,map__44746__$2,filter_by_view__$1,props__$1,map__44747__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,p__44731__$1,bounds__$1,size__$1,from__$1,map__44749__$2,map__44748__$2,meta44751){return (new clustermap.components.table.t44750(sort_spec__$1,table_component__$1,owner__$1,map__44746__$2,filter_by_view__$1,props__$1,map__44747__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,p__44731__$1,bounds__$1,size__$1,from__$1,map__44749__$2,map__44748__$2,meta44751));
});})(map__44746,map__44746__$1,props,map__44747,map__44747__$1,table_state,table_data,map__44748,map__44748__$1,controls,index,sort_spec,from,size,columns,map__44749,map__44749__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t44750(sort_spec,table_component,owner,map__44746__$1,filter_by_view,props,map__44747__$1,table_data,index,filter_spec,columns,table_state,controls,p__44731,bounds,size,from,map__44749__$1,map__44748__$1,null));
});
