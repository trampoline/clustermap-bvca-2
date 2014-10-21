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
clustermap.components.table.order_col = (function order_col(controls,p__58670,col_key,col_name){var map__58680 = p__58670;var map__58680__$1 = ((cljs.core.seq_QMARK_.call(null,map__58680))?cljs.core.apply.call(null,cljs.core.hash_map,map__58680):map__58680);var table_data = map__58680__$1;var current_sort_spec = cljs.core.get.call(null,map__58680__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__58681 = current_sort_spec__$1;var G__58681__$1 = (((G__58681 == null))?null:cljs.core.keys.call(null,G__58681));var G__58681__$2 = (((G__58681__$1 == null))?null:cljs.core.first.call(null,G__58681__$1));return G__58681__$2;
})();var current_sort_dir = (function (){var G__58682 = current_sort_spec__$1;var G__58682__$1 = (((G__58682 == null))?null:current_sort_key.call(null,G__58682));var G__58682__$2 = (((G__58682__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__58682__$1));return G__58682__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__58680,map__58680__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__58683 = cljs.core._EQ_;var expr__58684 = current_sort_dir;if(cljs.core.truth_(pred__58683.call(null,"asc",expr__58684)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__58683.call(null,"desc",expr__58684)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__58680,map__58680__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__58686 = cljs.core._EQ_;var expr__58687 = current_sort_dir;if(cljs.core.truth_(pred__58686.call(null,"asc",expr__58687)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__58689,owner,opts){var map__58706 = p__58689;var map__58706__$1 = ((cljs.core.seq_QMARK_.call(null,map__58706))?cljs.core.apply.call(null,cljs.core.hash_map,map__58706):map__58706);var controls = cljs.core.get.call(null,map__58706__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__58707 = cljs.core.get.call(null,map__58706__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__58707__$1 = ((cljs.core.seq_QMARK_.call(null,map__58707))?cljs.core.apply.call(null,cljs.core.hash_map,map__58707):map__58707);var table_data = map__58707__$1;var count = cljs.core.get.call(null,map__58707__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__58707__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__58707__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t58708 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t58708 = (function (owner,paginate,table_data,controls,size,map__58707,p__58689,from,count,opts,map__58706,meta58709){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.map__58707 = map__58707;
this.p__58689 = p__58689;
this.from = from;
this.count = count;
this.opts = opts;
this.map__58706 = map__58706;
this.meta58709 = meta58709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t58708.cljs$lang$type = true;
clustermap.components.table.t58708.cljs$lang$ctorStr = "clustermap.components.table/t58708";
clustermap.components.table.t58708.cljs$lang$ctorPrWriter = ((function (map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t58708");
});})(map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size))
;
clustermap.components.table.t58708.prototype.om$core$IRender$ = true;
clustermap.components.table.t58708.prototype.om$core$IRender$render$arity$1 = ((function (map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs58711 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs58711))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs58711)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58711))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs58712 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs58712))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs58712)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58712))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58712)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs58711,this__9504__auto____$1,map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs58711,this__9504__auto____$1,map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58711),(function (){var attrs58713 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs58713))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs58713)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58713))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58713)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs58711,this__9504__auto____$1,map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs58711,this__9504__auto____$1,map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size))
;
clustermap.components.table.t58708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size){
return (function (_58710){var self__ = this;
var _58710__$1 = this;return self__.meta58709;
});})(map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size))
;
clustermap.components.table.t58708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size){
return (function (_58710,meta58709__$1){var self__ = this;
var _58710__$1 = this;return (new clustermap.components.table.t58708(self__.owner,self__.paginate,self__.table_data,self__.controls,self__.size,self__.map__58707,self__.p__58689,self__.from,self__.count,self__.opts,self__.map__58706,meta58709__$1));
});})(map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t58708 = ((function (map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size){
return (function __GT_t58708(owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__58707__$2,p__58689__$1,from__$1,count__$1,opts__$1,map__58706__$2,meta58709){return (new clustermap.components.table.t58708(owner__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__58707__$2,p__58689__$1,from__$1,count__$1,opts__$1,map__58706__$2,meta58709));
});})(map__58706,map__58706__$1,controls,map__58707,map__58707__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t58708(owner,paginate,table_data,controls,size,map__58707__$1,p__58689,from,count,opts,map__58706__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__58722){var map__58735 = p__58722;var map__58735__$1 = ((cljs.core.seq_QMARK_.call(null,map__58735))?cljs.core.apply.call(null,cljs.core.hash_map,map__58735):map__58735);var record = cljs.core.get.call(null,map__58735__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__58735__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t58736 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t58736 = (function (columns,record,map__58735,p__58722,render_table_row,meta58737){
this.columns = columns;
this.record = record;
this.map__58735 = map__58735;
this.p__58722 = p__58722;
this.render_table_row = render_table_row;
this.meta58737 = meta58737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t58736.cljs$lang$type = true;
clustermap.components.table.t58736.cljs$lang$ctorStr = "clustermap.components.table/t58736";
clustermap.components.table.t58736.cljs$lang$ctorPrWriter = ((function (map__58735,map__58735__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t58736");
});})(map__58735,map__58735__$1,record,columns))
;
clustermap.components.table.t58736.prototype.om$core$IRender$ = true;
clustermap.components.table.t58736.prototype.om$core$IRender$render$arity$1 = ((function (map__58735,map__58735__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__58735,map__58735__$1,record,columns){
return (function iter__58739(s__58740){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__58735,map__58735__$1,record,columns){
return (function (){var s__58740__$1 = s__58740;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58740__$1);if(temp__4126__auto__)
{var s__58740__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58740__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58740__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58742 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58741 = (0);while(true){
if((i__58741 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__58741);cljs.core.chunk_append.call(null,b__58742,(function (){var vec__58745 = col;var col_key = cljs.core.nth.call(null,vec__58745,(0),null);var col_name = cljs.core.nth.call(null,vec__58745,(1),null);var formatter = cljs.core.nth.call(null,vec__58745,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__58747 = (i__58741 + (1));
i__58741 = G__58747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58742),iter__58739.call(null,cljs.core.chunk_rest.call(null,s__58740__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58742),null);
}
} else
{var col = cljs.core.first.call(null,s__58740__$2);return cljs.core.cons.call(null,(function (){var vec__58746 = col;var col_key = cljs.core.nth.call(null,vec__58746,(0),null);var col_name = cljs.core.nth.call(null,vec__58746,(1),null);var formatter = cljs.core.nth.call(null,vec__58746,(2),null);var formatter__$1 = (function (){var or__3558__auto__ = formatter;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__58739.call(null,cljs.core.rest.call(null,s__58740__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__58735,map__58735__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__58735,map__58735__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__58735,map__58735__$1,record,columns))
;
clustermap.components.table.t58736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__58735,map__58735__$1,record,columns){
return (function (_58738){var self__ = this;
var _58738__$1 = this;return self__.meta58737;
});})(map__58735,map__58735__$1,record,columns))
;
clustermap.components.table.t58736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__58735,map__58735__$1,record,columns){
return (function (_58738,meta58737__$1){var self__ = this;
var _58738__$1 = this;return (new clustermap.components.table.t58736(self__.columns,self__.record,self__.map__58735,self__.p__58722,self__.render_table_row,meta58737__$1));
});})(map__58735,map__58735__$1,record,columns))
;
clustermap.components.table.__GT_t58736 = ((function (map__58735,map__58735__$1,record,columns){
return (function __GT_t58736(columns__$1,record__$1,map__58735__$2,p__58722__$1,render_table_row__$1,meta58737){return (new clustermap.components.table.t58736(columns__$1,record__$1,map__58735__$2,p__58722__$1,render_table_row__$1,meta58737));
});})(map__58735,map__58735__$1,record,columns))
;
}
return (new clustermap.components.table.t58736(columns,record,map__58735__$1,p__58722,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__58748,owner,opts){var map__58772 = p__58748;var map__58772__$1 = ((cljs.core.seq_QMARK_.call(null,map__58772))?cljs.core.apply.call(null,cljs.core.hash_map,map__58772):map__58772);var props = map__58772__$1;var table_data = cljs.core.get.call(null,map__58772__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__58773 = cljs.core.get.call(null,map__58772__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__58773__$1 = ((cljs.core.seq_QMARK_.call(null,map__58773))?cljs.core.apply.call(null,cljs.core.hash_map,map__58773):map__58773);var controls = map__58773__$1;var columns = cljs.core.get.call(null,map__58773__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__58773__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs58774 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs58774))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs58774)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58774))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs58775 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view){
return (function iter__58779(s__58780){return (new cljs.core.LazySeq(null,((function (attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view){
return (function (){var s__58780__$1 = s__58780;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58780__$1);if(temp__4126__auto__)
{var s__58780__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58780__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58780__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58782 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58781 = (0);while(true){
if((i__58781 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__58781);cljs.core.chunk_append.call(null,b__58782,(function (){var vec__58785 = col;var col_key = cljs.core.nth.call(null,vec__58785,(0),null);var col_name = cljs.core.nth.call(null,vec__58785,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__58795 = (i__58781 + (1));
i__58781 = G__58795;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58782),iter__58779.call(null,cljs.core.chunk_rest.call(null,s__58780__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58782),null);
}
} else
{var col = cljs.core.first.call(null,s__58780__$2);return cljs.core.cons.call(null,(function (){var vec__58786 = col;var col_key = cljs.core.nth.call(null,vec__58786,(0),null);var col_name = cljs.core.nth.call(null,vec__58786,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__58779.call(null,cljs.core.rest.call(null,s__58780__$2)));
}
} else
{return null;
}
break;
}
});})(attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs58775))?sablono.interpreter.attributes.call(null,attrs58775):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58775))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58775)], null))));
})(),(function (){var attrs58776 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs58776))?sablono.interpreter.attributes.call(null,attrs58776):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58776))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58776)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58774),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs58777 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4283__auto__ = ((function (attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view){
return (function iter__58787(s__58788){return (new cljs.core.LazySeq(null,((function (attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view){
return (function (){var s__58788__$1 = s__58788;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58788__$1);if(temp__4126__auto__)
{var s__58788__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58788__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58788__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58790 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58789 = (0);while(true){
if((i__58789 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__58789);cljs.core.chunk_append.call(null,b__58790,(function (){var vec__58793 = col;var col_key = cljs.core.nth.call(null,vec__58793,(0),null);var col_name = cljs.core.nth.call(null,vec__58793,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__58796 = (i__58789 + (1));
i__58789 = G__58796;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58790),iter__58787.call(null,cljs.core.chunk_rest.call(null,s__58788__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58790),null);
}
} else
{var col = cljs.core.first.call(null,s__58788__$2);return cljs.core.cons.call(null,(function (){var vec__58794 = col;var col_key = cljs.core.nth.call(null,vec__58794,(0),null);var col_name = cljs.core.nth.call(null,vec__58794,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__58787.call(null,cljs.core.rest.call(null,s__58788__$2)));
}
} else
{return null;
}
break;
}
});})(attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs58777))?sablono.interpreter.attributes.call(null,attrs58777):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58777))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58777)], null))));
})(),(function (){var attrs58778 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs58774,map__58772,map__58772__$1,props,table_data,map__58773,map__58773__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs58778))?sablono.interpreter.attributes.call(null,attrs58778):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58778))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58778)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__58797,owner){var map__58812 = p__58797;var map__58812__$1 = ((cljs.core.seq_QMARK_.call(null,map__58812))?cljs.core.apply.call(null,cljs.core.hash_map,map__58812):map__58812);var props = map__58812__$1;var map__58813 = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__58813__$1 = ((cljs.core.seq_QMARK_.call(null,map__58813))?cljs.core.apply.call(null,cljs.core.hash_map,map__58813):map__58813);var table_state = map__58813__$1;var table_data = cljs.core.get.call(null,map__58813__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__58814 = cljs.core.get.call(null,map__58813__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__58814__$1 = ((cljs.core.seq_QMARK_.call(null,map__58814))?cljs.core.apply.call(null,cljs.core.hash_map,map__58814):map__58814);var controls = map__58814__$1;var index = cljs.core.get.call(null,map__58814__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__58814__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__58814__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__58814__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__58814__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__58815 = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__58815__$1 = ((cljs.core.seq_QMARK_.call(null,map__58815))?cljs.core.apply.call(null,cljs.core.hash_map,map__58815):map__58815);var filter_by_view = cljs.core.get.call(null,map__58815__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__58815__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__58812__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t58816 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t58816 = (function (map__58814,sort_spec,table_component,owner,filter_by_view,props,table_data,index,filter_spec,columns,p__58797,table_state,controls,map__58813,bounds,size,map__58812,map__58815,from,meta58817){
this.map__58814 = map__58814;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.p__58797 = p__58797;
this.table_state = table_state;
this.controls = controls;
this.map__58813 = map__58813;
this.bounds = bounds;
this.size = size;
this.map__58812 = map__58812;
this.map__58815 = map__58815;
this.from = from;
this.meta58817 = meta58817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t58816.cljs$lang$type = true;
clustermap.components.table.t58816.cljs$lang$ctorStr = "clustermap.components.table/t58816";
clustermap.components.table.t58816.cljs$lang$ctorPrWriter = ((function (map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t58816");
});})(map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t58816.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t58816.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__58819,p__58820){var self__ = this;
var map__58821 = p__58819;var map__58821__$1 = ((cljs.core.seq_QMARK_.call(null,map__58821))?cljs.core.apply.call(null,cljs.core.hash_map,map__58821):map__58821);var next_props = map__58821__$1;var map__58822 = cljs.core.get.call(null,map__58821__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__58822__$1 = ((cljs.core.seq_QMARK_.call(null,map__58822))?cljs.core.apply.call(null,cljs.core.hash_map,map__58822):map__58822);var next_table_state = map__58822__$1;var next_table_data = cljs.core.get.call(null,map__58822__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__58823 = cljs.core.get.call(null,map__58822__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__58823__$1 = ((cljs.core.seq_QMARK_.call(null,map__58823))?cljs.core.apply.call(null,cljs.core.hash_map,map__58823):map__58823);var next_controls = map__58823__$1;var next_index = cljs.core.get.call(null,map__58823__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__58823__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__58823__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__58823__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__58823__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__58824 = cljs.core.get.call(null,map__58821__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__58824__$1 = ((cljs.core.seq_QMARK_.call(null,map__58824))?cljs.core.apply.call(null,cljs.core.hash_map,map__58824):map__58824);var next_filter_by_view = cljs.core.get.call(null,map__58824__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__58824__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__58821__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__58825 = p__58820;var map__58825__$1 = ((cljs.core.seq_QMARK_.call(null,map__58825))?cljs.core.apply.call(null,cljs.core.hash_map,map__58825):map__58825);var next_state = map__58825__$1;var table_data_resource = cljs.core.get.call(null,map__58825__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t58816.prototype.om$core$IRender$ = true;
clustermap.components.table.t58816.prototype.om$core$IRender$render$arity$1 = ((function (map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t58816.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t58816.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds))
);
});})(map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t58816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds){
return (function (_58818){var self__ = this;
var _58818__$1 = this;return self__.meta58817;
});})(map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t58816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds){
return (function (_58818,meta58817__$1){var self__ = this;
var _58818__$1 = this;return (new clustermap.components.table.t58816(self__.map__58814,self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.p__58797,self__.table_state,self__.controls,self__.map__58813,self__.bounds,self__.size,self__.map__58812,self__.map__58815,self__.from,meta58817__$1));
});})(map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t58816 = ((function (map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t58816(map__58814__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,p__58797__$1,table_state__$1,controls__$1,map__58813__$2,bounds__$1,size__$1,map__58812__$2,map__58815__$2,from__$1,meta58817){return (new clustermap.components.table.t58816(map__58814__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,p__58797__$1,table_state__$1,controls__$1,map__58813__$2,bounds__$1,size__$1,map__58812__$2,map__58815__$2,from__$1,meta58817));
});})(map__58812,map__58812__$1,props,map__58813,map__58813__$1,table_state,table_data,map__58814,map__58814__$1,controls,index,sort_spec,from,size,columns,map__58815,map__58815__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t58816(map__58814__$1,sort_spec,table_component,owner,filter_by_view,props,table_data,index,filter_spec,columns,p__58797,table_state,controls,map__58813__$1,bounds,size,map__58812__$1,map__58815__$1,from,null));
});

//# sourceMappingURL=table.js.map