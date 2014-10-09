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
var pred__53708 = cljs.core._EQ_;var expr__53709 = current_order_dir;if(cljs.core.truth_(pred__53708.call(null,"asc",expr__53709)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__53708.call(null,"desc",expr__53709)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__53711 = cljs.core._EQ_;var expr__53712 = current_order_dir;if(cljs.core.truth_(pred__53711.call(null,"asc",expr__53712)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__53714,owner,opts){var map__53731 = p__53714;var map__53731__$1 = ((cljs.core.seq_QMARK_.call(null,map__53731))?cljs.core.apply.call(null,cljs.core.hash_map,map__53731):map__53731);var controls = cljs.core.get.call(null,map__53731__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__53732 = cljs.core.get.call(null,map__53731__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__53732__$1 = ((cljs.core.seq_QMARK_.call(null,map__53732))?cljs.core.apply.call(null,cljs.core.hash_map,map__53732):map__53732);var table_data = map__53732__$1;var count = cljs.core.get.call(null,map__53732__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__53732__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__53732__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t53733 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t53733 = (function (owner,paginate,table_data,p__53714,map__53732,controls,map__53731,size,from,count,opts,meta53734){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.p__53714 = p__53714;
this.map__53732 = map__53732;
this.controls = controls;
this.map__53731 = map__53731;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta53734 = meta53734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t53733.cljs$lang$type = true;
clustermap.components.table.t53733.cljs$lang$ctorStr = "clustermap.components.table/t53733";
clustermap.components.table.t53733.cljs$lang$ctorPrWriter = ((function (map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t53733");
});})(map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size))
;
clustermap.components.table.t53733.prototype.om$core$IRender$ = true;
clustermap.components.table.t53733.prototype.om$core$IRender$render$arity$1 = ((function (map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs53736 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs53736))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs53736)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53736))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs53737 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs53737))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs53737)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53737))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53737)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs53736,this__9504__auto____$1,map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs53736,this__9504__auto____$1,map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53736),(function (){var attrs53738 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs53738))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs53738)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53738))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53738)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs53736,this__9504__auto____$1,map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs53736,this__9504__auto____$1,map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size))
;
clustermap.components.table.t53733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size){
return (function (_53735){var self__ = this;
var _53735__$1 = this;return self__.meta53734;
});})(map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size))
;
clustermap.components.table.t53733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size){
return (function (_53735,meta53734__$1){var self__ = this;
var _53735__$1 = this;return (new clustermap.components.table.t53733(self__.owner,self__.paginate,self__.table_data,self__.p__53714,self__.map__53732,self__.controls,self__.map__53731,self__.size,self__.from,self__.count,self__.opts,meta53734__$1));
});})(map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t53733 = ((function (map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size){
return (function __GT_t53733(owner__$1,paginate__$1,table_data__$1,p__53714__$1,map__53732__$2,controls__$1,map__53731__$2,size__$1,from__$1,count__$1,opts__$1,meta53734){return (new clustermap.components.table.t53733(owner__$1,paginate__$1,table_data__$1,p__53714__$1,map__53732__$2,controls__$1,map__53731__$2,size__$1,from__$1,count__$1,opts__$1,meta53734));
});})(map__53731,map__53731__$1,controls,map__53732,map__53732__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t53733(owner,paginate,table_data,p__53714,map__53732__$1,controls,map__53731__$1,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__53747){var map__53788 = p__53747;var map__53788__$1 = ((cljs.core.seq_QMARK_.call(null,map__53788))?cljs.core.apply.call(null,cljs.core.hash_map,map__53788):map__53788);var record = cljs.core.get.call(null,map__53788__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__53788__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t53789 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t53789 = (function (columns,record,map__53788,p__53747,render_table_row,meta53790){
this.columns = columns;
this.record = record;
this.map__53788 = map__53788;
this.p__53747 = p__53747;
this.render_table_row = render_table_row;
this.meta53790 = meta53790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t53789.cljs$lang$type = true;
clustermap.components.table.t53789.cljs$lang$ctorStr = "clustermap.components.table/t53789";
clustermap.components.table.t53789.cljs$lang$ctorPrWriter = ((function (map__53788,map__53788__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t53789");
});})(map__53788,map__53788__$1,record,columns))
;
clustermap.components.table.t53789.prototype.om$core$IRender$ = true;
clustermap.components.table.t53789.prototype.om$core$IRender$render$arity$1 = ((function (map__53788,map__53788__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__53788,map__53788__$1,record,columns){
return (function iter__53792(s__53793){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__53788,map__53788__$1,record,columns){
return (function (){var s__53793__$1 = s__53793;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53793__$1);if(temp__4126__auto__)
{var s__53793__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53793__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53793__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53795 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53794 = (0);while(true){
if((i__53794 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__53794);cljs.core.chunk_append.call(null,b__53795,(function (){var iter__4283__auto__ = ((function (i__53794,col,c__4281__auto__,size__4282__auto__,b__53795,s__53793__$2,temp__4126__auto__,this__9504__auto____$1,map__53788,map__53788__$1,record,columns){
return (function iter__53812(s__53813){return (new cljs.core.LazySeq(null,((function (i__53794,col,c__4281__auto__,size__4282__auto__,b__53795,s__53793__$2,temp__4126__auto__,this__9504__auto____$1,map__53788,map__53788__$1,record,columns){
return (function (){var s__53813__$1 = s__53813;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53813__$1);if(temp__4126__auto____$1)
{var s__53813__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53813__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__53813__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__53815 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__53814 = (0);while(true){
if((i__53814 < size__4282__auto____$1))
{var vec__53818 = cljs.core._nth.call(null,c__4281__auto____$1,i__53814);var col_key = cljs.core.nth.call(null,vec__53818,(0),null);var col_name = cljs.core.nth.call(null,vec__53818,(1),null);cljs.core.chunk_append.call(null,b__53815,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__53828 = (i__53814 + (1));
i__53814 = G__53828;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53815),iter__53812.call(null,cljs.core.chunk_rest.call(null,s__53813__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53815),null);
}
} else
{var vec__53819 = cljs.core.first.call(null,s__53813__$2);var col_key = cljs.core.nth.call(null,vec__53819,(0),null);var col_name = cljs.core.nth.call(null,vec__53819,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__53812.call(null,cljs.core.rest.call(null,s__53813__$2)));
}
} else
{return null;
}
break;
}
});})(i__53794,col,c__4281__auto__,size__4282__auto__,b__53795,s__53793__$2,temp__4126__auto__,this__9504__auto____$1,map__53788,map__53788__$1,record,columns))
,null,null));
});})(i__53794,col,c__4281__auto__,size__4282__auto__,b__53795,s__53793__$2,temp__4126__auto__,this__9504__auto____$1,map__53788,map__53788__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})());
{
var G__53829 = (i__53794 + (1));
i__53794 = G__53829;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53795),iter__53792.call(null,cljs.core.chunk_rest.call(null,s__53793__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53795),null);
}
} else
{var col = cljs.core.first.call(null,s__53793__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__53793__$2,temp__4126__auto__,this__9504__auto____$1,map__53788,map__53788__$1,record,columns){
return (function iter__53820(s__53821){return (new cljs.core.LazySeq(null,((function (col,s__53793__$2,temp__4126__auto__,this__9504__auto____$1,map__53788,map__53788__$1,record,columns){
return (function (){var s__53821__$1 = s__53821;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53821__$1);if(temp__4126__auto____$1)
{var s__53821__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53821__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53821__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53823 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53822 = (0);while(true){
if((i__53822 < size__4282__auto__))
{var vec__53826 = cljs.core._nth.call(null,c__4281__auto__,i__53822);var col_key = cljs.core.nth.call(null,vec__53826,(0),null);var col_name = cljs.core.nth.call(null,vec__53826,(1),null);cljs.core.chunk_append.call(null,b__53823,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__53830 = (i__53822 + (1));
i__53822 = G__53830;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53823),iter__53820.call(null,cljs.core.chunk_rest.call(null,s__53821__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53823),null);
}
} else
{var vec__53827 = cljs.core.first.call(null,s__53821__$2);var col_key = cljs.core.nth.call(null,vec__53827,(0),null);var col_name = cljs.core.nth.call(null,vec__53827,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__53820.call(null,cljs.core.rest.call(null,s__53821__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__53793__$2,temp__4126__auto__,this__9504__auto____$1,map__53788,map__53788__$1,record,columns))
,null,null));
});})(col,s__53793__$2,temp__4126__auto__,this__9504__auto____$1,map__53788,map__53788__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})(),iter__53792.call(null,cljs.core.rest.call(null,s__53793__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__53788,map__53788__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__53788,map__53788__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})()));return row;
})());
});})(map__53788,map__53788__$1,record,columns))
;
clustermap.components.table.t53789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53788,map__53788__$1,record,columns){
return (function (_53791){var self__ = this;
var _53791__$1 = this;return self__.meta53790;
});})(map__53788,map__53788__$1,record,columns))
;
clustermap.components.table.t53789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53788,map__53788__$1,record,columns){
return (function (_53791,meta53790__$1){var self__ = this;
var _53791__$1 = this;return (new clustermap.components.table.t53789(self__.columns,self__.record,self__.map__53788,self__.p__53747,self__.render_table_row,meta53790__$1));
});})(map__53788,map__53788__$1,record,columns))
;
clustermap.components.table.__GT_t53789 = ((function (map__53788,map__53788__$1,record,columns){
return (function __GT_t53789(columns__$1,record__$1,map__53788__$2,p__53747__$1,render_table_row__$1,meta53790){return (new clustermap.components.table.t53789(columns__$1,record__$1,map__53788__$2,p__53747__$1,render_table_row__$1,meta53790));
});})(map__53788,map__53788__$1,record,columns))
;
}
return (new clustermap.components.table.t53789(columns,record,map__53788__$1,p__53747,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__53831,owner,opts){var map__53911 = p__53831;var map__53911__$1 = ((cljs.core.seq_QMARK_.call(null,map__53911))?cljs.core.apply.call(null,cljs.core.hash_map,map__53911):map__53911);var props = map__53911__$1;var table_data = cljs.core.get.call(null,map__53911__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__53912 = cljs.core.get.call(null,map__53911__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__53912__$1 = ((cljs.core.seq_QMARK_.call(null,map__53912))?cljs.core.apply.call(null,cljs.core.hash_map,map__53912):map__53912);var controls = map__53912__$1;var columns = cljs.core.get.call(null,map__53912__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__53912__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var attrs53913 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs53913))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs53913)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53913))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs53914 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function iter__53918(s__53919){return (new cljs.core.LazySeq(null,((function (attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function (){var s__53919__$1 = s__53919;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53919__$1);if(temp__4126__auto__)
{var s__53919__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53919__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53919__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53921 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53920 = (0);while(true){
if((i__53920 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__53920);cljs.core.chunk_append.call(null,b__53921,(function (){var iter__4283__auto__ = ((function (i__53920,col,c__4281__auto__,size__4282__auto__,b__53921,s__53919__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function iter__53938(s__53939){return (new cljs.core.LazySeq(null,((function (i__53920,col,c__4281__auto__,size__4282__auto__,b__53921,s__53919__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function (){var s__53939__$1 = s__53939;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53939__$1);if(temp__4126__auto____$1)
{var s__53939__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53939__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__53939__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__53941 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__53940 = (0);while(true){
if((i__53940 < size__4282__auto____$1))
{var vec__53944 = cljs.core._nth.call(null,c__4281__auto____$1,i__53940);var col_key = cljs.core.nth.call(null,vec__53944,(0),null);var col_name = cljs.core.nth.call(null,vec__53944,(1),null);cljs.core.chunk_append.call(null,b__53941,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__53990 = (i__53940 + (1));
i__53940 = G__53990;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53941),iter__53938.call(null,cljs.core.chunk_rest.call(null,s__53939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53941),null);
}
} else
{var vec__53945 = cljs.core.first.call(null,s__53939__$2);var col_key = cljs.core.nth.call(null,vec__53945,(0),null);var col_name = cljs.core.nth.call(null,vec__53945,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__53938.call(null,cljs.core.rest.call(null,s__53939__$2)));
}
} else
{return null;
}
break;
}
});})(i__53920,col,c__4281__auto__,size__4282__auto__,b__53921,s__53919__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
,null,null));
});})(i__53920,col,c__4281__auto__,size__4282__auto__,b__53921,s__53919__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__53991 = (i__53920 + (1));
i__53920 = G__53991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53921),iter__53918.call(null,cljs.core.chunk_rest.call(null,s__53919__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53921),null);
}
} else
{var col = cljs.core.first.call(null,s__53919__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__53919__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function iter__53946(s__53947){return (new cljs.core.LazySeq(null,((function (col,s__53919__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function (){var s__53947__$1 = s__53947;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53947__$1);if(temp__4126__auto____$1)
{var s__53947__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53947__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53947__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53949 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53948 = (0);while(true){
if((i__53948 < size__4282__auto__))
{var vec__53952 = cljs.core._nth.call(null,c__4281__auto__,i__53948);var col_key = cljs.core.nth.call(null,vec__53952,(0),null);var col_name = cljs.core.nth.call(null,vec__53952,(1),null);cljs.core.chunk_append.call(null,b__53949,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__53992 = (i__53948 + (1));
i__53948 = G__53992;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53949),iter__53946.call(null,cljs.core.chunk_rest.call(null,s__53947__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53949),null);
}
} else
{var vec__53953 = cljs.core.first.call(null,s__53947__$2);var col_key = cljs.core.nth.call(null,vec__53953,(0),null);var col_name = cljs.core.nth.call(null,vec__53953,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__53946.call(null,cljs.core.rest.call(null,s__53947__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__53919__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__53919__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__53918.call(null,cljs.core.rest.call(null,s__53919__$2)));
}
} else
{return null;
}
break;
}
});})(attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs53914))?sablono.interpreter.attributes.call(null,attrs53914):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53914))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53914)], null))));
})(),(function (){var attrs53915 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs53915))?sablono.interpreter.attributes.call(null,attrs53915):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53915))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53915)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53913),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs53916 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function iter__53954(s__53955){return (new cljs.core.LazySeq(null,((function (attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function (){var s__53955__$1 = s__53955;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53955__$1);if(temp__4126__auto__)
{var s__53955__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53955__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53955__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53957 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53956 = (0);while(true){
if((i__53956 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__53956);cljs.core.chunk_append.call(null,b__53957,(function (){var iter__4283__auto__ = ((function (i__53956,col,c__4281__auto__,size__4282__auto__,b__53957,s__53955__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function iter__53974(s__53975){return (new cljs.core.LazySeq(null,((function (i__53956,col,c__4281__auto__,size__4282__auto__,b__53957,s__53955__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function (){var s__53975__$1 = s__53975;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53975__$1);if(temp__4126__auto____$1)
{var s__53975__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53975__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__53975__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__53977 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__53976 = (0);while(true){
if((i__53976 < size__4282__auto____$1))
{var vec__53980 = cljs.core._nth.call(null,c__4281__auto____$1,i__53976);var col_key = cljs.core.nth.call(null,vec__53980,(0),null);var col_name = cljs.core.nth.call(null,vec__53980,(1),null);cljs.core.chunk_append.call(null,b__53977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__53993 = (i__53976 + (1));
i__53976 = G__53993;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53977),iter__53974.call(null,cljs.core.chunk_rest.call(null,s__53975__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53977),null);
}
} else
{var vec__53981 = cljs.core.first.call(null,s__53975__$2);var col_key = cljs.core.nth.call(null,vec__53981,(0),null);var col_name = cljs.core.nth.call(null,vec__53981,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__53974.call(null,cljs.core.rest.call(null,s__53975__$2)));
}
} else
{return null;
}
break;
}
});})(i__53956,col,c__4281__auto__,size__4282__auto__,b__53957,s__53955__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
,null,null));
});})(i__53956,col,c__4281__auto__,size__4282__auto__,b__53957,s__53955__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__53994 = (i__53956 + (1));
i__53956 = G__53994;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53957),iter__53954.call(null,cljs.core.chunk_rest.call(null,s__53955__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53957),null);
}
} else
{var col = cljs.core.first.call(null,s__53955__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__53955__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function iter__53982(s__53983){return (new cljs.core.LazySeq(null,((function (col,s__53955__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function (){var s__53983__$1 = s__53983;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__53983__$1);if(temp__4126__auto____$1)
{var s__53983__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__53983__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53983__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53985 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53984 = (0);while(true){
if((i__53984 < size__4282__auto__))
{var vec__53988 = cljs.core._nth.call(null,c__4281__auto__,i__53984);var col_key = cljs.core.nth.call(null,vec__53988,(0),null);var col_name = cljs.core.nth.call(null,vec__53988,(1),null);cljs.core.chunk_append.call(null,b__53985,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__53995 = (i__53984 + (1));
i__53984 = G__53995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53985),iter__53982.call(null,cljs.core.chunk_rest.call(null,s__53983__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53985),null);
}
} else
{var vec__53989 = cljs.core.first.call(null,s__53983__$2);var col_key = cljs.core.nth.call(null,vec__53989,(0),null);var col_name = cljs.core.nth.call(null,vec__53989,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__53982.call(null,cljs.core.rest.call(null,s__53983__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__53955__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__53955__$2,temp__4126__auto__,attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__53954.call(null,cljs.core.rest.call(null,s__53955__$2)));
}
} else
{return null;
}
break;
}
});})(attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs53916))?sablono.interpreter.attributes.call(null,attrs53916):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53916))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53916)], null))));
})(),(function (){var attrs53917 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs53913,map__53911,map__53911__$1,props,table_data,map__53912,map__53912__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs53917))?sablono.interpreter.attributes.call(null,attrs53917):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53917))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53917)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__53996,owner){var map__54011 = p__53996;var map__54011__$1 = ((cljs.core.seq_QMARK_.call(null,map__54011))?cljs.core.apply.call(null,cljs.core.hash_map,map__54011):map__54011);var props = map__54011__$1;var map__54012 = cljs.core.get.call(null,map__54011__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__54012__$1 = ((cljs.core.seq_QMARK_.call(null,map__54012))?cljs.core.apply.call(null,cljs.core.hash_map,map__54012):map__54012);var table_state = map__54012__$1;var table_data = cljs.core.get.call(null,map__54012__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__54013 = cljs.core.get.call(null,map__54012__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__54013__$1 = ((cljs.core.seq_QMARK_.call(null,map__54013))?cljs.core.apply.call(null,cljs.core.hash_map,map__54013):map__54013);var controls = map__54013__$1;var index = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__54013__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__54014 = cljs.core.get.call(null,map__54011__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__54014__$1 = ((cljs.core.seq_QMARK_.call(null,map__54014))?cljs.core.apply.call(null,cljs.core.hash_map,map__54014):map__54014);var filter_by_view = cljs.core.get.call(null,map__54014__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__54014__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__54011__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t54015 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t54015 = (function (sort_spec,table_component,owner,filter_by_view,props,map__54012,table_data,p__53996,index,filter_spec,columns,table_state,controls,map__54011,map__54014,bounds,size,map__54013,from,meta54016){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__54012 = map__54012;
this.table_data = table_data;
this.p__53996 = p__53996;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.map__54011 = map__54011;
this.map__54014 = map__54014;
this.bounds = bounds;
this.size = size;
this.map__54013 = map__54013;
this.from = from;
this.meta54016 = meta54016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t54015.cljs$lang$type = true;
clustermap.components.table.t54015.cljs$lang$ctorStr = "clustermap.components.table/t54015";
clustermap.components.table.t54015.cljs$lang$ctorPrWriter = ((function (map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t54015");
});})(map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t54015.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t54015.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__54018,p__54019){var self__ = this;
var map__54020 = p__54018;var map__54020__$1 = ((cljs.core.seq_QMARK_.call(null,map__54020))?cljs.core.apply.call(null,cljs.core.hash_map,map__54020):map__54020);var next_props = map__54020__$1;var map__54021 = cljs.core.get.call(null,map__54020__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__54021__$1 = ((cljs.core.seq_QMARK_.call(null,map__54021))?cljs.core.apply.call(null,cljs.core.hash_map,map__54021):map__54021);var next_table_state = map__54021__$1;var next_table_data = cljs.core.get.call(null,map__54021__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__54022 = cljs.core.get.call(null,map__54021__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__54022__$1 = ((cljs.core.seq_QMARK_.call(null,map__54022))?cljs.core.apply.call(null,cljs.core.hash_map,map__54022):map__54022);var next_controls = map__54022__$1;var next_index = cljs.core.get.call(null,map__54022__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__54022__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__54022__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__54022__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__54022__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__54023 = cljs.core.get.call(null,map__54020__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__54023__$1 = ((cljs.core.seq_QMARK_.call(null,map__54023))?cljs.core.apply.call(null,cljs.core.hash_map,map__54023):map__54023);var next_filter_by_view = cljs.core.get.call(null,map__54023__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__54023__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__54020__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__54024 = p__54019;var map__54024__$1 = ((cljs.core.seq_QMARK_.call(null,map__54024))?cljs.core.apply.call(null,cljs.core.hash_map,map__54024):map__54024);var next_state = map__54024__$1;var table_data_resource = cljs.core.get.call(null,map__54024__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.call(null,next_controls,self__.controls);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.call(null,next_filter_spec,self__.filter_spec);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var or__3558__auto____$3 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$3)
{return or__3558__auto____$3;
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
})()))
{return clustermap.components.table.request_table_data.call(null,table_data_resource,next_index,next_index_type,next_filter_spec,(cljs.core.truth_(next_filter_by_view)?next_bounds:null),next_sort_spec,next_from,next_size);
} else
{return null;
}
});})(map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t54015.prototype.om$core$IRender$ = true;
clustermap.components.table.t54015.prototype.om$core$IRender$render$arity$1 = ((function (map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t54015.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t54015.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds))
);
});})(map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t54015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds){
return (function (_54017){var self__ = this;
var _54017__$1 = this;return self__.meta54016;
});})(map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t54015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds){
return (function (_54017,meta54016__$1){var self__ = this;
var _54017__$1 = this;return (new clustermap.components.table.t54015(self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.map__54012,self__.table_data,self__.p__53996,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.controls,self__.map__54011,self__.map__54014,self__.bounds,self__.size,self__.map__54013,self__.from,meta54016__$1));
});})(map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t54015 = ((function (map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t54015(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__54012__$2,table_data__$1,p__53996__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__54011__$2,map__54014__$2,bounds__$1,size__$1,map__54013__$2,from__$1,meta54016){return (new clustermap.components.table.t54015(sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__54012__$2,table_data__$1,p__53996__$1,index__$1,filter_spec__$1,columns__$1,table_state__$1,controls__$1,map__54011__$2,map__54014__$2,bounds__$1,size__$1,map__54013__$2,from__$1,meta54016));
});})(map__54011,map__54011__$1,props,map__54012,map__54012__$1,table_state,table_data,map__54013,map__54013__$1,controls,index,sort_spec,from,size,columns,map__54014,map__54014__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t54015(sort_spec,table_component,owner,filter_by_view,props,map__54012__$1,table_data,p__53996,index,filter_spec,columns,table_state,controls,map__54011__$1,map__54014__$1,bounds,size,map__54013__$1,from,null));
});

//# sourceMappingURL=table.js.map