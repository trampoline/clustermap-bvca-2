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
clustermap.components.table.order_col = (function order_col(comm,collection,view_update_key,title,col){var current_order = cljs.core.constant$keyword$1116.cljs$core$IFn$_invoke$arity$1(collection);var current_order__$1 = ((cljs.core.sequential_QMARK_(current_order))?cljs.core.first(current_order):current_order);var current_order_key = cljs.core.first(cljs.core.keys(current_order__$1));var current_order_dir = cljs.core.first(cljs.core.vals(current_order__$1));return React.DOM.a({"href": "#", "onClick": ((function (current_order,current_order__$1,current_order_key,current_order_dir){
return (function (e){e.preventDefault();
var pred__46682 = cljs.core._EQ_;var expr__46683 = current_order_dir;if(cljs.core.truth_((pred__46682.cljs$core$IFn$_invoke$arity$2 ? pred__46682.cljs$core$IFn$_invoke$arity$2("asc",expr__46683) : pred__46682.call(null,"asc",expr__46683))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1116,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$1117], true, false)], null)], null));
} else
{if(cljs.core.truth_((pred__46682.cljs$core$IFn$_invoke$arity$2 ? pred__46682.cljs$core$IFn$_invoke$arity$2("desc",expr__46683) : pred__46682.call(null,"desc",expr__46683))))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1116,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$1118], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1116,new cljs.core.PersistentArrayMap.fromArray([col,cljs.core.constant$keyword$1117], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret(title),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_order_key,col))?sablono.interpreter.interpret((function (){var pred__46685 = cljs.core._EQ_;var expr__46686 = current_order_dir;if(cljs.core.truth_((pred__46685.cljs$core$IFn$_invoke$arity$2 ? pred__46685.cljs$core$IFn$_invoke$arity$2("asc",expr__46686) : pred__46685.call(null,"asc",expr__46686))))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1119], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1120], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__46688,owner,opts){var map__46705 = p__46688;var map__46705__$1 = ((cljs.core.seq_QMARK_(map__46705))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46705):map__46705);var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46705__$1,cljs.core.constant$keyword$1109);var map__46706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46705__$1,cljs.core.constant$keyword$1121);var map__46706__$1 = ((cljs.core.seq_QMARK_(map__46706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46706):map__46706);var table_data = map__46706__$1;var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46706__$1,cljs.core.constant$keyword$1122);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46706__$1,cljs.core.constant$keyword$962);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46706__$1,cljs.core.constant$keyword$963);if(typeof clustermap.components.table.t46707 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t46707 = (function (owner,paginate,table_data,controls,map__46705,map__46706,p__46688,size,from,count,opts,meta46708){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.map__46705 = map__46705;
this.map__46706 = map__46706;
this.p__46688 = p__46688;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta46708 = meta46708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t46707.cljs$lang$type = true;
clustermap.components.table.t46707.cljs$lang$ctorStr = "clustermap.components.table/t46707";
clustermap.components.table.t46707.cljs$lang$ctorPrWriter = ((function (map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t46707");
});})(map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size))
;
clustermap.components.table.t46707.prototype.om$core$IRender$ = true;
clustermap.components.table.t46707.prototype.om$core$IRender$render$arity$1 = ((function (map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs46710 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1059,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1057,"#",cljs.core.constant$keyword$1124,((function (this__9504__auto____$1,map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$962,(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1125], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1123,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1125], null)], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs46710))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1049,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs46710], 0))):{"className": "paginate"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46710))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46711 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs46711))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1049,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs46711], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46711))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46711)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs46710,this__9504__auto____$1,map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$962,(self__.from + self__.size));
});})(attrs46710,this__9504__auto____$1,map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46710),(function (){var attrs46712 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs46712))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1049,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs46712], 0))):{"className": "page"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46712))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46712)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs46710,this__9504__auto____$1,map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.controls,cljs.core.constant$keyword$962,(self__.from + self__.size));
});})(attrs46710,this__9504__auto____$1,map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size))
;
clustermap.components.table.t46707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size){
return (function (_46709){var self__ = this;
var _46709__$1 = this;return self__.meta46708;
});})(map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size))
;
clustermap.components.table.t46707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size){
return (function (_46709,meta46708__$1){var self__ = this;
var _46709__$1 = this;return (new clustermap.components.table.t46707(self__.owner,self__.paginate,self__.table_data,self__.controls,self__.map__46705,self__.map__46706,self__.p__46688,self__.size,self__.from,self__.count,self__.opts,meta46708__$1));
});})(map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t46707 = ((function (map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size){
return (function __GT_t46707(owner__$1,paginate__$1,table_data__$1,controls__$1,map__46705__$2,map__46706__$2,p__46688__$1,size__$1,from__$1,count__$1,opts__$1,meta46708){return (new clustermap.components.table.t46707(owner__$1,paginate__$1,table_data__$1,controls__$1,map__46705__$2,map__46706__$2,p__46688__$1,size__$1,from__$1,count__$1,opts__$1,meta46708));
});})(map__46705,map__46705__$1,controls,map__46706,map__46706__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t46707(owner,paginate,table_data,controls,map__46705__$1,map__46706__$1,p__46688,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__46721){var map__46762 = p__46721;var map__46762__$1 = ((cljs.core.seq_QMARK_(map__46762))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46762):map__46762);var record = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46762__$1,cljs.core.constant$keyword$1126);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46762__$1,cljs.core.constant$keyword$1127);if(typeof clustermap.components.table.t46763 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t46763 = (function (columns,record,map__46762,p__46721,render_table_row,meta46764){
this.columns = columns;
this.record = record;
this.map__46762 = map__46762;
this.p__46721 = p__46721;
this.render_table_row = render_table_row;
this.meta46764 = meta46764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t46763.cljs$lang$type = true;
clustermap.components.table.t46763.cljs$lang$ctorStr = "clustermap.components.table/t46763";
clustermap.components.table.t46763.cljs$lang$ctorPrWriter = ((function (map__46762,map__46762__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t46763");
});})(map__46762,map__46762__$1,record,columns))
;
clustermap.components.table.t46763.prototype.om$core$IRender$ = true;
clustermap.components.table.t46763.prototype.om$core$IRender$render$arity$1 = ((function (map__46762,map__46762__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret((function (){var row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1128], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__46762,map__46762__$1,record,columns){
return (function iter__46766(s__46767){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__46762,map__46762__$1,record,columns){
return (function (){var s__46767__$1 = s__46767;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46767__$1);if(temp__4126__auto__)
{var s__46767__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46767__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46767__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46769 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46768 = (0);while(true){
if((i__46768 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46768);cljs.core.chunk_append(b__46769,(function (){var iter__4283__auto__ = ((function (i__46768,col,c__4281__auto__,size__4282__auto__,b__46769,s__46767__$2,temp__4126__auto__,this__9504__auto____$1,map__46762,map__46762__$1,record,columns){
return (function iter__46786(s__46787){return (new cljs.core.LazySeq(null,((function (i__46768,col,c__4281__auto__,size__4282__auto__,b__46769,s__46767__$2,temp__4126__auto__,this__9504__auto____$1,map__46762,map__46762__$1,record,columns){
return (function (){var s__46787__$1 = s__46787;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46787__$1);if(temp__4126__auto____$1)
{var s__46787__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46787__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__46787__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__46789 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__46788 = (0);while(true){
if((i__46788 < size__4282__auto____$1))
{var vec__46792 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__46788);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46792,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46792,(1),null);cljs.core.chunk_append(b__46789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1129,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null));
{
var G__46802 = (i__46788 + (1));
i__46788 = G__46802;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46789),iter__46786(cljs.core.chunk_rest(s__46787__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46789),null);
}
} else
{var vec__46793 = cljs.core.first(s__46787__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1129,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null),iter__46786(cljs.core.rest(s__46787__$2)));
}
} else
{return null;
}
break;
}
});})(i__46768,col,c__4281__auto__,size__4282__auto__,b__46769,s__46767__$2,temp__4126__auto__,this__9504__auto____$1,map__46762,map__46762__$1,record,columns))
,null,null));
});})(i__46768,col,c__4281__auto__,size__4282__auto__,b__46769,s__46767__$2,temp__4126__auto__,this__9504__auto____$1,map__46762,map__46762__$1,record,columns))
;return iter__4283__auto__(col);
})());
{
var G__46803 = (i__46768 + (1));
i__46768 = G__46803;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46769),iter__46766(cljs.core.chunk_rest(s__46767__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46769),null);
}
} else
{var col = cljs.core.first(s__46767__$2);return cljs.core.cons((function (){var iter__4283__auto__ = ((function (col,s__46767__$2,temp__4126__auto__,this__9504__auto____$1,map__46762,map__46762__$1,record,columns){
return (function iter__46794(s__46795){return (new cljs.core.LazySeq(null,((function (col,s__46767__$2,temp__4126__auto__,this__9504__auto____$1,map__46762,map__46762__$1,record,columns){
return (function (){var s__46795__$1 = s__46795;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46795__$1);if(temp__4126__auto____$1)
{var s__46795__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46795__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46795__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46797 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46796 = (0);while(true){
if((i__46796 < size__4282__auto__))
{var vec__46800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46796);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46800,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46800,(1),null);cljs.core.chunk_append(b__46797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1129,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null));
{
var G__46804 = (i__46796 + (1));
i__46796 = G__46804;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46797),iter__46794(cljs.core.chunk_rest(s__46795__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46797),null);
}
} else
{var vec__46801 = cljs.core.first(s__46795__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46801,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46801,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1129,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.record,col_key)], null),iter__46794(cljs.core.rest(s__46795__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__46767__$2,temp__4126__auto__,this__9504__auto____$1,map__46762,map__46762__$1,record,columns))
,null,null));
});})(col,s__46767__$2,temp__4126__auto__,this__9504__auto____$1,map__46762,map__46762__$1,record,columns))
;return iter__4283__auto__(col);
})(),iter__46766(cljs.core.rest(s__46767__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__46762,map__46762__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__46762,map__46762__$1,record,columns))
;return iter__4283__auto__(self__.columns);
})()));return row;
})());
});})(map__46762,map__46762__$1,record,columns))
;
clustermap.components.table.t46763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46762,map__46762__$1,record,columns){
return (function (_46765){var self__ = this;
var _46765__$1 = this;return self__.meta46764;
});})(map__46762,map__46762__$1,record,columns))
;
clustermap.components.table.t46763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46762,map__46762__$1,record,columns){
return (function (_46765,meta46764__$1){var self__ = this;
var _46765__$1 = this;return (new clustermap.components.table.t46763(self__.columns,self__.record,self__.map__46762,self__.p__46721,self__.render_table_row,meta46764__$1));
});})(map__46762,map__46762__$1,record,columns))
;
clustermap.components.table.__GT_t46763 = ((function (map__46762,map__46762__$1,record,columns){
return (function __GT_t46763(columns__$1,record__$1,map__46762__$2,p__46721__$1,render_table_row__$1,meta46764){return (new clustermap.components.table.t46763(columns__$1,record__$1,map__46762__$2,p__46721__$1,render_table_row__$1,meta46764));
});})(map__46762,map__46762__$1,record,columns))
;
}
return (new clustermap.components.table.t46763(columns,record,map__46762__$1,p__46721,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__46805,owner,opts){var map__46885 = p__46805;var map__46885__$1 = ((cljs.core.seq_QMARK_(map__46885))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46885):map__46885);var props = map__46885__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46885__$1,cljs.core.constant$keyword$1121);var map__46886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46885__$1,cljs.core.constant$keyword$1109);var map__46886__$1 = ((cljs.core.seq_QMARK_(map__46886))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46886):map__46886);var controls = map__46886__$1;var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46886__$1,cljs.core.constant$keyword$1127);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46886__$1,cljs.core.constant$keyword$1113);var attrs46887 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,controls,cljs.core.constant$keyword$1121,table_data], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs46887))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1049,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs46887], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46887))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs46888 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1128], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function iter__46892(s__46893){return (new cljs.core.LazySeq(null,((function (attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function (){var s__46893__$1 = s__46893;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46893__$1);if(temp__4126__auto__)
{var s__46893__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46893__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46893__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46895 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46894 = (0);while(true){
if((i__46894 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46894);cljs.core.chunk_append(b__46895,(function (){var iter__4283__auto__ = ((function (i__46894,col,c__4281__auto__,size__4282__auto__,b__46895,s__46893__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function iter__46912(s__46913){return (new cljs.core.LazySeq(null,((function (i__46894,col,c__4281__auto__,size__4282__auto__,b__46895,s__46893__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function (){var s__46913__$1 = s__46913;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46913__$1);if(temp__4126__auto____$1)
{var s__46913__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46913__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__46913__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__46915 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__46914 = (0);while(true){
if((i__46914 < size__4282__auto____$1))
{var vec__46918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__46914);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46918,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46918,(1),null);cljs.core.chunk_append(b__46915,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,col_name], null));
{
var G__46964 = (i__46914 + (1));
i__46914 = G__46964;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46915),iter__46912(cljs.core.chunk_rest(s__46913__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46915),null);
}
} else
{var vec__46919 = cljs.core.first(s__46913__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46919,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46919,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,col_name], null),iter__46912(cljs.core.rest(s__46913__$2)));
}
} else
{return null;
}
break;
}
});})(i__46894,col,c__4281__auto__,size__4282__auto__,b__46895,s__46893__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
,null,null));
});})(i__46894,col,c__4281__auto__,size__4282__auto__,b__46895,s__46893__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(col);
})());
{
var G__46965 = (i__46894 + (1));
i__46894 = G__46965;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46895),iter__46892(cljs.core.chunk_rest(s__46893__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46895),null);
}
} else
{var col = cljs.core.first(s__46893__$2);return cljs.core.cons((function (){var iter__4283__auto__ = ((function (col,s__46893__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function iter__46920(s__46921){return (new cljs.core.LazySeq(null,((function (col,s__46893__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function (){var s__46921__$1 = s__46921;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46921__$1);if(temp__4126__auto____$1)
{var s__46921__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46921__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46921__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46923 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46922 = (0);while(true){
if((i__46922 < size__4282__auto__))
{var vec__46926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46922);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46926,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46926,(1),null);cljs.core.chunk_append(b__46923,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,col_name], null));
{
var G__46966 = (i__46922 + (1));
i__46922 = G__46966;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46923),iter__46920(cljs.core.chunk_rest(s__46921__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46923),null);
}
} else
{var vec__46927 = cljs.core.first(s__46921__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46927,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46927,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,col_name], null),iter__46920(cljs.core.rest(s__46921__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__46893__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__46893__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(col);
})(),iter__46892(cljs.core.rest(s__46893__$2)));
}
} else
{return null;
}
break;
}
});})(attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})()));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs46888))?sablono.interpreter.attributes(attrs46888):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46888))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46888)], null))));
})(),(function (){var attrs46889 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1082.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1037,((function (attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1127,columns,cljs.core.constant$keyword$1126,r,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1131.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs46889))?sablono.interpreter.attributes(attrs46889):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46889))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46889)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,controls,cljs.core.constant$keyword$1121,table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46887),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs46890 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1128], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function iter__46928(s__46929){return (new cljs.core.LazySeq(null,((function (attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function (){var s__46929__$1 = s__46929;while(true){
var temp__4126__auto__ = cljs.core.seq(s__46929__$1);if(temp__4126__auto__)
{var s__46929__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__46929__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46929__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46931 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46930 = (0);while(true){
if((i__46930 < size__4282__auto__))
{var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46930);cljs.core.chunk_append(b__46931,(function (){var iter__4283__auto__ = ((function (i__46930,col,c__4281__auto__,size__4282__auto__,b__46931,s__46929__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function iter__46948(s__46949){return (new cljs.core.LazySeq(null,((function (i__46930,col,c__4281__auto__,size__4282__auto__,b__46931,s__46929__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function (){var s__46949__$1 = s__46949;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46949__$1);if(temp__4126__auto____$1)
{var s__46949__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46949__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first(s__46949__$2);var size__4282__auto____$1 = cljs.core.count(c__4281__auto____$1);var b__46951 = cljs.core.chunk_buffer(size__4282__auto____$1);if((function (){var i__46950 = (0);while(true){
if((i__46950 < size__4282__auto____$1))
{var vec__46954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto____$1,i__46950);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46954,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46954,(1),null);cljs.core.chunk_append(b__46951,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,col_name], null));
{
var G__46967 = (i__46950 + (1));
i__46950 = G__46967;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46951),iter__46948(cljs.core.chunk_rest(s__46949__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46951),null);
}
} else
{var vec__46955 = cljs.core.first(s__46949__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46955,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46955,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,col_name], null),iter__46948(cljs.core.rest(s__46949__$2)));
}
} else
{return null;
}
break;
}
});})(i__46930,col,c__4281__auto__,size__4282__auto__,b__46931,s__46929__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
,null,null));
});})(i__46930,col,c__4281__auto__,size__4282__auto__,b__46931,s__46929__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(col);
})());
{
var G__46968 = (i__46930 + (1));
i__46930 = G__46968;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46931),iter__46928(cljs.core.chunk_rest(s__46929__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46931),null);
}
} else
{var col = cljs.core.first(s__46929__$2);return cljs.core.cons((function (){var iter__4283__auto__ = ((function (col,s__46929__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function iter__46956(s__46957){return (new cljs.core.LazySeq(null,((function (col,s__46929__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function (){var s__46957__$1 = s__46957;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__46957__$1);if(temp__4126__auto____$1)
{var s__46957__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__46957__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__46957__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__46959 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__46958 = (0);while(true){
if((i__46958 < size__4282__auto__))
{var vec__46962 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__46958);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46962,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46962,(1),null);cljs.core.chunk_append(b__46959,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,col_name], null));
{
var G__46969 = (i__46958 + (1));
i__46958 = G__46969;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__46959),iter__46956(cljs.core.chunk_rest(s__46957__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__46959),null);
}
} else
{var vec__46963 = cljs.core.first(s__46957__$2);var col_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46963,(0),null);var col_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46963,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,col_name], null),iter__46956(cljs.core.rest(s__46957__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__46929__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__46929__$2,temp__4126__auto__,attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(col);
})(),iter__46928(cljs.core.rest(s__46929__$2)));
}
} else
{return null;
}
break;
}
});})(attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
;return iter__4283__auto__(columns);
})()));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.thead,((cljs.core.map_QMARK_(attrs46890))?sablono.interpreter.attributes(attrs46890):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46890))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46890)], null))));
})(),(function (){var attrs46891 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.table.render_table_row,cljs.core.constant$keyword$1082.cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1037,((function (attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1127,columns,cljs.core.constant$keyword$1126,r,cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1131.cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs46887,map__46885,map__46885__$1,props,table_data,map__46886,map__46886__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs46891))?sablono.interpreter.attributes(attrs46891):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46891))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46891)], null))));
})())),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1109,controls,cljs.core.constant$keyword$1121,table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.simple_table,cljs.core.array_seq([index,index_type,filter_spec,bounds,sort_spec,from,size], 0));
});
clustermap.components.table.table_component = (function table_component(p__46970,owner){var map__46985 = p__46970;var map__46985__$1 = ((cljs.core.seq_QMARK_(map__46985))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46985):map__46985);var props = map__46985__$1;var map__46986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,cljs.core.constant$keyword$1132);var map__46986__$1 = ((cljs.core.seq_QMARK_(map__46986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46986):map__46986);var table_state = map__46986__$1;var table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46986__$1,cljs.core.constant$keyword$1121);var map__46987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46986__$1,cljs.core.constant$keyword$1109);var map__46987__$1 = ((cljs.core.seq_QMARK_(map__46987))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46987):map__46987);var controls = map__46987__$1;var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46987__$1,cljs.core.constant$keyword$972);var sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46987__$1,cljs.core.constant$keyword$1133);var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46987__$1,cljs.core.constant$keyword$962);var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46987__$1,cljs.core.constant$keyword$963);var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46987__$1,cljs.core.constant$keyword$1127);var map__46988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,cljs.core.constant$keyword$964);var map__46988__$1 = ((cljs.core.seq_QMARK_(map__46988))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46988):map__46988);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46988__$1,cljs.core.constant$keyword$1113);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46988__$1,cljs.core.constant$keyword$1114);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46985__$1,cljs.core.constant$keyword$956);if(typeof clustermap.components.table.t46989 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t46989 = (function (map__46988,sort_spec,table_component,owner,filter_by_view,props,map__46986,p__46970,table_data,index,filter_spec,columns,table_state,controls,bounds,size,map__46985,map__46987,from,meta46990){
this.map__46988 = map__46988;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__46986 = map__46986;
this.p__46970 = p__46970;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.map__46985 = map__46985;
this.map__46987 = map__46987;
this.from = from;
this.meta46990 = meta46990;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t46989.cljs$lang$type = true;
clustermap.components.table.t46989.cljs$lang$ctorStr = "clustermap.components.table/t46989";
clustermap.components.table.t46989.cljs$lang$ctorPrWriter = ((function (map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.table/t46989");
});})(map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t46989.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t46989.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__46992,p__46993){var self__ = this;
var map__46994 = p__46992;var map__46994__$1 = ((cljs.core.seq_QMARK_(map__46994))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46994):map__46994);var next_props = map__46994__$1;var map__46995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,cljs.core.constant$keyword$1132);var map__46995__$1 = ((cljs.core.seq_QMARK_(map__46995))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46995):map__46995);var next_table_state = map__46995__$1;var next_table_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46995__$1,cljs.core.constant$keyword$1121);var map__46996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46995__$1,cljs.core.constant$keyword$1109);var map__46996__$1 = ((cljs.core.seq_QMARK_(map__46996))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46996):map__46996);var next_controls = map__46996__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46996__$1,cljs.core.constant$keyword$972);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46996__$1,cljs.core.constant$keyword$1110);var next_sort_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46996__$1,cljs.core.constant$keyword$1133);var next_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46996__$1,cljs.core.constant$keyword$962);var next_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46996__$1,cljs.core.constant$keyword$963);var map__46997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,cljs.core.constant$keyword$964);var map__46997__$1 = ((cljs.core.seq_QMARK_(map__46997))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46997):map__46997);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46997__$1,cljs.core.constant$keyword$1113);var next_filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46997__$1,cljs.core.constant$keyword$1114);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,cljs.core.constant$keyword$956);var map__46998 = p__46993;var map__46998__$1 = ((cljs.core.seq_QMARK_(map__46998))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46998):map__46998);var next_state = map__46998__$1;var table_data_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46998__$1,cljs.core.constant$keyword$1134);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_table_data);if(or__3558__auto__)
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
});})(map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t46989.prototype.om$core$IRender$ = true;
clustermap.components.table.t46989.prototype.om$core$IRender$render$arity$1 = ((function (map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1121,self__.table_data,cljs.core.constant$keyword$1109,self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t46989.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t46989.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource("table-data-resource");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1134,tdr);
return clustermap.ordered_resource.retrieve_responses(tdr,((function (tdr,___$1,map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1121], null),data);
});})(tdr,___$1,map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds))
);
});})(map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t46989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds){
return (function (_46991){var self__ = this;
var _46991__$1 = this;return self__.meta46990;
});})(map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t46989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds){
return (function (_46991,meta46990__$1){var self__ = this;
var _46991__$1 = this;return (new clustermap.components.table.t46989(self__.map__46988,self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.map__46986,self__.p__46970,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.bounds,self__.size,self__.map__46985,self__.map__46987,self__.from,meta46990__$1));
});})(map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t46989 = ((function (map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t46989(map__46988__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__46986__$2,p__46970__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__46985__$2,map__46987__$2,from__$1,meta46990){return (new clustermap.components.table.t46989(map__46988__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__46986__$2,p__46970__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,map__46985__$2,map__46987__$2,from__$1,meta46990));
});})(map__46985,map__46985__$1,props,map__46986,map__46986__$1,table_state,table_data,map__46987,map__46987__$1,controls,index,sort_spec,from,size,columns,map__46988,map__46988__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t46989(map__46988__$1,sort_spec,table_component,owner,filter_by_view,props,map__46986__$1,p__46970,table_data,index,filter_spec,columns,table_state,controls,bounds,size,map__46985__$1,map__46987__$1,from,null));
});
