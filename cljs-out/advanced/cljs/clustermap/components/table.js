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
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_(current_order))?cljs.core.first(current_order):current_order);var current_order_key = cljs.core.first(cljs.core.keys(current_order__$1));var current_order_dir = cljs.core.first(cljs.core.vals(current_order__$1));return React.DOM.a({"href": "#", "onClick": ((function (current_order,current_order__$1,current_order_key,current_order_dir){
return (function (e){e.preventDefault();
var pred__40495 = cljs.core._EQ_;var expr__40496 = current_order_dir;if(cljs.core.truth_((pred__40495.cljs$core$IFn$_invoke$arity$2 ? pred__40495.cljs$core$IFn$_invoke$arity$2("asc",expr__40496) : pred__40495.call(null,"asc",expr__40496))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$975,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$976], true, false)], null)], null));
} else
{if(cljs.core.truth_((pred__40495.cljs$core$IFn$_invoke$arity$2 ? pred__40495.cljs$core$IFn$_invoke$arity$2("desc",expr__40496) : pred__40495.call(null,"desc",expr__40496))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$975,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$977], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$975,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$976], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret(title),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_order_key,col))?sablono.interpreter.interpret((function (){var pred__40498 = cljs.core._EQ_;var expr__40499 = current_order_dir;if(cljs.core.truth_((pred__40498.cljs$core$IFn$_invoke$arity$2 ? pred__40498.cljs$core$IFn$_invoke$arity$2("asc",expr__40499) : pred__40498.call(null,"asc",expr__40499))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$978], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$979], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__40501,owner,opts){var map__40518 = p__40501;var map__40518__$1 = ((cljs.core.seq_QMARK_(map__40518))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40518):map__40518);var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40518__$1,cljs.core.constant$keyword$980);var map__40519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40518__$1,cljs.core.constant$keyword$981);var map__40519__$1 = ((cljs.core.seq_QMARK_(map__40519))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40519):map__40519);var table_data = map__40519__$1;var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40519__$1,cljs.core.constant$keyword$982);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40519__$1,cljs.core.constant$keyword$898);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40519__$1,cljs.core.constant$keyword$899);if(typeof clustermap.components.table.t40520 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t40520 = (function (owner,paginate,table_data,controls,size,map__40518,from,count,p__40501,opts,map__40519,meta40521){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.map__40518 = map__40518;
this.from = from;
this.count = count;
this.p__40501 = p__40501;
this.opts = opts;
this.map__40519 = map__40519;
this.meta40521 = meta40521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t40520.cljs$lang$type = true;
clustermap.components.table.t40520.cljs$lang$ctorStr = "clustermap.components.table/t40520";
clustermap.components.table.t40520.cljs$lang$ctorPrWriter = ((function (map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t40520");
});})(map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size))
;
clustermap.components.table.t40520.prototype.om$core$IRender$ = true;
clustermap.components.table.t40520.prototype.om$core$IRender$render$arity$1 = ((function (map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs40523 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$983,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$926,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$924,"#",cljs.core.constant$keyword$984,((function (this__9504__auto____$1,map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$898,(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$985], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$983,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$985], null)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs40523))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs40523], 0))):{"className": "paginate"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40523))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs40524 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs40524))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs40524], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40524))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40524)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs40523,this__9504__auto____$1,map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$898,(self__.from + self__.size));
});})(attrs40523,this__9504__auto____$1,map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40523),(function (){var attrs40525 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs40525))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs40525], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40525))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40525)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs40523,this__9504__auto____$1,map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$898,(self__.from + self__.size));
});})(attrs40523,this__9504__auto____$1,map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size))
;
clustermap.components.table.t40520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size){
return (function (_40522){var self__ = this;
var _40522__$1 = this;return self__.meta40521;
});})(map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size))
;
clustermap.components.table.t40520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size){
return (function (_40522,meta40521__$1){var self__ = this;
var _40522__$1 = this;return (new clustermap.components.table.t40520(self__.owner,self__.paginate,self__.table_data,self__.controls,self__.size,self__.map__40518,self__.from,self__.count,self__.p__40501,self__.opts,self__.map__40519,meta40521__$1));
});})(map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t40520 = ((function (map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size){
return (function __GT_t40520(owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__40518__$2,from__$1,count__$1,p__40501__$1,opts__$1,map__40519__$2,meta40521){return (new clustermap.components.table.t40520(owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__40518__$2,from__$1,count__$1,p__40501__$1,opts__$1,map__40519__$2,meta40521));
});})(map__40518,map__40518__$1,controls,map__40519,map__40519__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t40520(owner,paginate,table_data,controls,size,map__40518__$1,from,count,p__40501,opts,map__40519__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__40534){var map__40575 = p__40534;var map__40575__$1 = ((cljs.core.seq_QMARK_(map__40575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40575):map__40575);var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40575__$1,cljs.core.constant$keyword$986);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40575__$1,cljs.core.constant$keyword$987);if(typeof clustermap.components.table.t40576 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t40576 = (function (columns,record,map__40575,p__40534,render_table_row,meta40577){
this.columns = columns;
this.record = record;
this.map__40575 = map__40575;
this.p__40534 = p__40534;
this.render_table_row = render_table_row;
this.meta40577 = meta40577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t40576.cljs$lang$type = true;
clustermap.components.table.t40576.cljs$lang$ctorStr = "clustermap.components.table/t40576";
clustermap.components.table.t40576.cljs$lang$ctorPrWriter = ((function (map__40575,map__40575__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t40576");
});})(map__40575,map__40575__$1,record,columns))
;
clustermap.components.table.t40576.prototype.om$core$IRender$ = true;
clustermap.components.table.t40576.prototype.om$core$IRender$render$arity$1 = ((function (map__40575,map__40575__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret((function (){var row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$988], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__40575,map__40575__$1,record,columns){
return (function iter__40579(s__40580){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__40575,map__40575__$1,record,columns){
return (function (){var s__40580__$1 = s__40580;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40580__$1);if(temp__4126__auto__)
{var s__40580__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40580__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40580__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40582 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40581 = (0);while(true){
if((i__40581 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40581);cljs.core.chunk_append(b__40582,(function (){var iter__4283__auto__ = ((function (i__40581,col,c__4281__auto__,size__4282__auto__,b__40582,s__40580__$2,temp__4126__auto__,this__9504__auto____$1,map__40575,map__40575__$1,record,columns){
return (function iter__40599(s__40600){return (new cljs.core.LazySeq(null,((function (i__40581,col,c__4281__auto__,size__4282__auto__,b__40582,s__40580__$2,temp__4126__auto__,this__9504__auto____$1,map__40575,map__40575__$1,record,columns){
return (function (){var s__40600__$1 = s__40600;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40600__$1);if(temp__4126__auto____$1)
{var s__40600__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40600__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__40600__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__40602 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__40601 = (0);while(true){
if((i__40601 < size__4282__auto____$1))
{var vec__40605 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__40601);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40605,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40605,(1),null);cljs.core.chunk_append(b__40602,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$989,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null));
{
var G__40615 = (i__40601 + (1));
i__40601 = G__40615;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40602),iter__40599(cljs.core.chunk_rest(s__40600__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40602),null);
}
} else
{var vec__40606 = cljs.core.first(s__40600__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40606,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40606,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$989,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null),iter__40599(cljs.core.rest(s__40600__$2)));
}
} else
{return null;
}
break;
}
});})(i__40581,col,c__4281__auto__,size__4282__auto__,b__40582,s__40580__$2,temp__4126__auto__,this__9504__auto____$1,map__40575,map__40575__$1,record,columns))
,null,null));
});})(i__40581,col,c__4281__auto__,size__4282__auto__,b__40582,s__40580__$2,temp__4126__auto__,this__9504__auto____$1,map__40575,map__40575__$1,record,columns))
;return iter__4283__auto__(col);
})());
{
var G__40616 = (i__40581 + (1));
i__40581 = G__40616;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40582),iter__40579(cljs.core.chunk_rest(s__40580__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40582),null);
}
} else
{var col = cljs.core.first(s__40580__$2);return cljs.core.cons((function (){var iter__4283__auto__ = ((function (col,s__40580__$2,temp__4126__auto__,this__9504__auto____$1,map__40575,map__40575__$1,record,columns){
return (function iter__40607(s__40608){return (new cljs.core.LazySeq(null,((function (col,s__40580__$2,temp__4126__auto__,this__9504__auto____$1,map__40575,map__40575__$1,record,columns){
return (function (){var s__40608__$1 = s__40608;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40608__$1);if(temp__4126__auto____$1)
{var s__40608__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40608__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40608__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40610 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40609 = (0);while(true){
if((i__40609 < size__4282__auto__))
{var vec__40613 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40609);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40613,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40613,(1),null);cljs.core.chunk_append(b__40610,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$989,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null));
{
var G__40617 = (i__40609 + (1));
i__40609 = G__40617;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40610),iter__40607(cljs.core.chunk_rest(s__40608__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40610),null);
}
} else
{var vec__40614 = cljs.core.first(s__40608__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40614,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40614,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$989,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null),iter__40607(cljs.core.rest(s__40608__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__40580__$2,temp__4126__auto__,this__9504__auto____$1,map__40575,map__40575__$1,record,columns))
,null,null));
});})(col,s__40580__$2,temp__4126__auto__,this__9504__auto____$1,map__40575,map__40575__$1,record,columns))
;return iter__4283__auto__(col);
})(),iter__40579(cljs.core.rest(s__40580__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__40575,map__40575__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__40575,map__40575__$1,record,columns))
;return iter__4283__auto__(self__.columns);
})()));return row;
})());
});})(map__40575,map__40575__$1,record,columns))
;
clustermap.components.table.t40576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40575,map__40575__$1,record,columns){
return (function (_40578){var self__ = this;
var _40578__$1 = this;return self__.meta40577;
});})(map__40575,map__40575__$1,record,columns))
;
clustermap.components.table.t40576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40575,map__40575__$1,record,columns){
return (function (_40578,meta40577__$1){var self__ = this;
var _40578__$1 = this;return (new clustermap.components.table.t40576(self__.columns,self__.record,self__.map__40575,self__.p__40534,self__.render_table_row,meta40577__$1));
});})(map__40575,map__40575__$1,record,columns))
;
clustermap.components.table.__GT_t40576 = ((function (map__40575,map__40575__$1,record,columns){
return (function __GT_t40576(columns__$1,record__$1,map__40575__$2,p__40534__$1,render_table_row__$1,meta40577){return (new clustermap.components.table.t40576(columns__$1,record__$1,map__40575__$2,p__40534__$1,render_table_row__$1,meta40577));
});})(map__40575,map__40575__$1,record,columns))
;
}
return (new clustermap.components.table.t40576(columns,record,map__40575__$1,p__40534,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__40618,owner,opts){var map__40698 = p__40618;var map__40698__$1 = ((cljs.core.seq_QMARK_(map__40698))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40698):map__40698);var props = map__40698__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40698__$1,cljs.core.constant$keyword$981);var map__40699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40698__$1,cljs.core.constant$keyword$980);var map__40699__$1 = ((cljs.core.seq_QMARK_(map__40699))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40699):map__40699);var controls = map__40699__$1;var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40699__$1,cljs.core.constant$keyword$987);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40699__$1,cljs.core.constant$keyword$990);var attrs40700 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$980,controls,cljs.core.constant$keyword$981,table_data], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs40700))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs40700], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40700))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs40701 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$988], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function iter__40705(s__40706){return (new cljs.core.LazySeq(null,((function (attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function (){var s__40706__$1 = s__40706;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40706__$1);if(temp__4126__auto__)
{var s__40706__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40706__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40706__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40708 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40707 = (0);while(true){
if((i__40707 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40707);cljs.core.chunk_append(b__40708,(function (){var iter__4283__auto__ = ((function (i__40707,col,c__4281__auto__,size__4282__auto__,b__40708,s__40706__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function iter__40725(s__40726){return (new cljs.core.LazySeq(null,((function (i__40707,col,c__4281__auto__,size__4282__auto__,b__40708,s__40706__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function (){var s__40726__$1 = s__40726;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40726__$1);if(temp__4126__auto____$1)
{var s__40726__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40726__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__40726__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__40728 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__40727 = (0);while(true){
if((i__40727 < size__4282__auto____$1))
{var vec__40731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__40727);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40731,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40731,(1),null);cljs.core.chunk_append(b__40728,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,col_name], null));
{
var G__40777 = (i__40727 + (1));
i__40727 = G__40777;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40728),iter__40725(cljs.core.chunk_rest(s__40726__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40728),null);
}
} else
{var vec__40732 = cljs.core.first(s__40726__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40732,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40732,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,col_name], null),iter__40725(cljs.core.rest(s__40726__$2)));
}
} else
{return null;
}
break;
}
});})(i__40707,col,c__4281__auto__,size__4282__auto__,b__40708,s__40706__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
,null,null));
});})(i__40707,col,c__4281__auto__,size__4282__auto__,b__40708,s__40706__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(col);
})());
{
var G__40778 = (i__40707 + (1));
i__40707 = G__40778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40708),iter__40705(cljs.core.chunk_rest(s__40706__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40708),null);
}
} else
{var col = cljs.core.first(s__40706__$2);return cljs.core.cons((function (){var iter__4283__auto__ = ((function (col,s__40706__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function iter__40733(s__40734){return (new cljs.core.LazySeq(null,((function (col,s__40706__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function (){var s__40734__$1 = s__40734;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40734__$1);if(temp__4126__auto____$1)
{var s__40734__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40734__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40734__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40736 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40735 = (0);while(true){
if((i__40735 < size__4282__auto__))
{var vec__40739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40735);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40739,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40739,(1),null);cljs.core.chunk_append(b__40736,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,col_name], null));
{
var G__40779 = (i__40735 + (1));
i__40735 = G__40779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40736),iter__40733(cljs.core.chunk_rest(s__40734__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40736),null);
}
} else
{var vec__40740 = cljs.core.first(s__40734__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40740,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40740,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,col_name], null),iter__40733(cljs.core.rest(s__40734__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__40706__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__40706__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(col);
})(),iter__40705(cljs.core.rest(s__40706__$2)));
}
} else
{return null;
}
break;
}
});})(attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})()));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs40701))?sablono.interpreter.attributes(attrs40701):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40701))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40701)], null))));
})(),(function (){var attrs40702 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$966,cljs.core.constant$keyword$966,cljs.core.constant$keyword$963,((function (attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$987,columns,cljs.core.constant$keyword$986,r,cljs.core.constant$keyword$966,cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs40702))?sablono.interpreter.attributes(attrs40702):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40702))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40702)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$980,controls,cljs.core.constant$keyword$981,table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40700),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs40703 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$988], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function iter__40741(s__40742){return (new cljs.core.LazySeq(null,((function (attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function (){var s__40742__$1 = s__40742;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40742__$1);if(temp__4126__auto__)
{var s__40742__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40742__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40742__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40744 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40743 = (0);while(true){
if((i__40743 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40743);cljs.core.chunk_append(b__40744,(function (){var iter__4283__auto__ = ((function (i__40743,col,c__4281__auto__,size__4282__auto__,b__40744,s__40742__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function iter__40761(s__40762){return (new cljs.core.LazySeq(null,((function (i__40743,col,c__4281__auto__,size__4282__auto__,b__40744,s__40742__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function (){var s__40762__$1 = s__40762;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40762__$1);if(temp__4126__auto____$1)
{var s__40762__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40762__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__40762__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__40764 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__40763 = (0);while(true){
if((i__40763 < size__4282__auto____$1))
{var vec__40767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__40763);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40767,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40767,(1),null);cljs.core.chunk_append(b__40764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,col_name], null));
{
var G__40780 = (i__40763 + (1));
i__40763 = G__40780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40764),iter__40761(cljs.core.chunk_rest(s__40762__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40764),null);
}
} else
{var vec__40768 = cljs.core.first(s__40762__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40768,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40768,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,col_name], null),iter__40761(cljs.core.rest(s__40762__$2)));
}
} else
{return null;
}
break;
}
});})(i__40743,col,c__4281__auto__,size__4282__auto__,b__40744,s__40742__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
,null,null));
});})(i__40743,col,c__4281__auto__,size__4282__auto__,b__40744,s__40742__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(col);
})());
{
var G__40781 = (i__40743 + (1));
i__40743 = G__40781;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40744),iter__40741(cljs.core.chunk_rest(s__40742__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40744),null);
}
} else
{var col = cljs.core.first(s__40742__$2);return cljs.core.cons((function (){var iter__4283__auto__ = ((function (col,s__40742__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function iter__40769(s__40770){return (new cljs.core.LazySeq(null,((function (col,s__40742__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function (){var s__40770__$1 = s__40770;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__40770__$1);if(temp__4126__auto____$1)
{var s__40770__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__40770__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40770__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40772 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40771 = (0);while(true){
if((i__40771 < size__4282__auto__))
{var vec__40775 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40771);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40775,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40775,(1),null);cljs.core.chunk_append(b__40772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,col_name], null));
{
var G__40782 = (i__40771 + (1));
i__40771 = G__40782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40772),iter__40769(cljs.core.chunk_rest(s__40770__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40772),null);
}
} else
{var vec__40776 = cljs.core.first(s__40770__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40776,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40776,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$991,col_name], null),iter__40769(cljs.core.rest(s__40770__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__40742__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__40742__$2,temp__4126__auto__,attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(col);
})(),iter__40741(cljs.core.rest(s__40742__$2)));
}
} else
{return null;
}
break;
}
});})(attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})()));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs40703))?sablono.interpreter.attributes(attrs40703):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40703))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40703)], null))));
})(),(function (){var attrs40704 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$966,cljs.core.constant$keyword$966,cljs.core.constant$keyword$963,((function (attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$987,columns,cljs.core.constant$keyword$986,r,cljs.core.constant$keyword$966,cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs40700,map__40698,map__40698__$1,props,table_data,map__40699,map__40699__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs40704))?sablono.interpreter.attributes(attrs40704):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40704))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40704)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$980,controls,cljs.core.constant$keyword$981,table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.simple_table,cljs.core.array_seq([index,index_type,filter_spec,bounds,sort_spec,from,size], 0));
});
clustermap.components.table.table_component = (function table_component(p__40783,owner){var map__40798 = p__40783;var map__40798__$1 = ((cljs.core.seq_QMARK_(map__40798))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40798):map__40798);var props = map__40798__$1;var map__40799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40798__$1,cljs.core.constant$keyword$994);var map__40799__$1 = ((cljs.core.seq_QMARK_(map__40799))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40799):map__40799);var table_state = map__40799__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40799__$1,cljs.core.constant$keyword$981);var map__40800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40799__$1,cljs.core.constant$keyword$980);var map__40800__$1 = ((cljs.core.seq_QMARK_(map__40800))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40800):map__40800);var controls = map__40800__$1;var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,cljs.core.constant$keyword$902);var sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,cljs.core.constant$keyword$995);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,cljs.core.constant$keyword$898);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,cljs.core.constant$keyword$899);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800__$1,cljs.core.constant$keyword$987);var map__40801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40798__$1,cljs.core.constant$keyword$996);var map__40801__$1 = ((cljs.core.seq_QMARK_(map__40801))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40801):map__40801);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40801__$1,cljs.core.constant$keyword$990);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40801__$1,cljs.core.constant$keyword$997);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40798__$1,cljs.core.constant$keyword$892);if(typeof clustermap.components.table.t40802 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t40802 = (function (sort_spec,table_component,owner,filter_by_view,props,map__40798,table_data,index,filter_spec,columns,table_state,controls,map__40801,bounds,size,p__40783,map__40799,from,map__40800,meta40803){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__40798 = map__40798;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__40801 = map__40801;
this.bounds = bounds;
this.size = size;
this.p__40783 = p__40783;
this.map__40799 = map__40799;
this.from = from;
this.map__40800 = map__40800;
this.meta40803 = meta40803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t40802.cljs$lang$type = true;
clustermap.components.table.t40802.cljs$lang$ctorStr = "clustermap.components.table/t40802";
clustermap.components.table.t40802.cljs$lang$ctorPrWriter = ((function (map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t40802");
});})(map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40802.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t40802.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__40805,p__40806){var self__ = this;
var map__40807 = p__40805;var map__40807__$1 = ((cljs.core.seq_QMARK_(map__40807))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40807):map__40807);var next_props = map__40807__$1;var map__40808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40807__$1,cljs.core.constant$keyword$994);var map__40808__$1 = ((cljs.core.seq_QMARK_(map__40808))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40808):map__40808);var next_table_state = map__40808__$1;var next_table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40808__$1,cljs.core.constant$keyword$981);var map__40809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40808__$1,cljs.core.constant$keyword$980);var map__40809__$1 = ((cljs.core.seq_QMARK_(map__40809))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40809):map__40809);var next_controls = map__40809__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40809__$1,cljs.core.constant$keyword$902);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40809__$1,cljs.core.constant$keyword$998);var next_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40809__$1,cljs.core.constant$keyword$995);var next_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40809__$1,cljs.core.constant$keyword$898);var next_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40809__$1,cljs.core.constant$keyword$899);var map__40810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40807__$1,cljs.core.constant$keyword$996);var map__40810__$1 = ((cljs.core.seq_QMARK_(map__40810))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40810):map__40810);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40810__$1,cljs.core.constant$keyword$990);var next_filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40810__$1,cljs.core.constant$keyword$997);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40807__$1,cljs.core.constant$keyword$892);var map__40811 = p__40806;var map__40811__$1 = ((cljs.core.seq_QMARK_(map__40811))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40811):map__40811);var next_state = map__40811__$1;var table_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40811__$1,cljs.core.constant$keyword$999);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_table_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_controls,self__.controls);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_spec,self__.filter_spec);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var or__3558__auto____$3 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$3)
{return or__3558__auto____$3;
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
})()))
{return clustermap.components.table.request_table_data(table_data_resource,next_index,next_index_type,next_filter_spec,(cljs.core.truth_(next_filter_by_view)?next_bounds:null),next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40802.prototype.om$core$IRender$ = true;
clustermap.components.table.t40802.prototype.om$core$IRender$render$arity$1 = ((function (map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$981,self__.table_data,cljs.core.constant$keyword$980,self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40802.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t40802.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource("table-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$999,tdr);
return clustermap.ordered_resource.retrieve_responses(tdr,((function (tdr,___$1,map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$981], null),data);
});})(tdr,___$1,map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds))
);
});})(map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds){
return (function (_40804){var self__ = this;
var _40804__$1 = this;return self__.meta40803;
});})(map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds){
return (function (_40804,meta40803__$1){var self__ = this;
var _40804__$1 = this;return (new clustermap.components.table.t40802(self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.map__40798,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__40801,self__.bounds,self__.size,self__.p__40783,self__.map__40799,self__.from,self__.map__40800,meta40803__$1));
});})(map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t40802 = ((function (map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t40802(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__40798__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__40801__$2,bounds__$1,size__$1,p__40783__$1,map__40799__$2,from__$1,map__40800__$2,meta40803){return (new clustermap.components.table.t40802(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__40798__$2,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__40801__$2,bounds__$1,size__$1,p__40783__$1,map__40799__$2,from__$1,map__40800__$2,meta40803));
});})(map__40798,map__40798__$1,props,map__40799,map__40799__$1,table_state,table_data,map__40800,map__40800__$1,controls,index,sort_spec,from,size,columns,map__40801,map__40801__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t40802(sort_spec,table_component,owner,filter_by_view,props,map__40798__$1,table_data,index,filter_spec,columns,table_state,controls,map__40801__$1,bounds,size,p__40783,map__40799__$1,from,map__40800__$1,null));
});
