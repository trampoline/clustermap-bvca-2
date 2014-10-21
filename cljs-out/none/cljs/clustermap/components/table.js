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
clustermap.components.table.order_col = (function order_col(controls,p__84643,col_key,col_name){var map__84653 = p__84643;var map__84653__$1 = ((cljs.core.seq_QMARK_.call(null,map__84653))?cljs.core.apply.call(null,cljs.core.hash_map,map__84653):map__84653);var table_data = map__84653__$1;var current_sort_spec = cljs.core.get.call(null,map__84653__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__84654 = current_sort_spec__$1;var G__84654__$1 = (((G__84654 == null))?null:cljs.core.keys.call(null,G__84654));var G__84654__$2 = (((G__84654__$1 == null))?null:cljs.core.first.call(null,G__84654__$1));return G__84654__$2;
})();var current_sort_dir = (function (){var G__84655 = current_sort_spec__$1;var G__84655__$1 = (((G__84655 == null))?null:current_sort_key.call(null,G__84655));var G__84655__$2 = (((G__84655__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__84655__$1));return G__84655__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__84653,map__84653__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__84656 = cljs.core._EQ_;var expr__84657 = current_sort_dir;if(cljs.core.truth_(pred__84656.call(null,"asc",expr__84657)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__84656.call(null,"desc",expr__84657)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__84653,map__84653__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__84659 = cljs.core._EQ_;var expr__84660 = current_sort_dir;if(cljs.core.truth_(pred__84659.call(null,"asc",expr__84660)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__84662,owner,opts){var map__84679 = p__84662;var map__84679__$1 = ((cljs.core.seq_QMARK_.call(null,map__84679))?cljs.core.apply.call(null,cljs.core.hash_map,map__84679):map__84679);var controls = cljs.core.get.call(null,map__84679__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__84680 = cljs.core.get.call(null,map__84679__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__84680__$1 = ((cljs.core.seq_QMARK_.call(null,map__84680))?cljs.core.apply.call(null,cljs.core.hash_map,map__84680):map__84680);var table_data = map__84680__$1;var count = cljs.core.get.call(null,map__84680__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__84680__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__84680__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t84681 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t84681 = (function (owner,paginate,table_data,p__84662,controls,map__84679,size,from,count,opts,map__84680,meta84682){
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.p__84662 = p__84662;
this.controls = controls;
this.map__84679 = map__84679;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.map__84680 = map__84680;
this.meta84682 = meta84682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t84681.cljs$lang$type = true;
clustermap.components.table.t84681.cljs$lang$ctorStr = "clustermap.components.table/t84681";
clustermap.components.table.t84681.cljs$lang$ctorPrWriter = ((function (map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t84681");
});})(map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size))
;
clustermap.components.table.t84681.prototype.om$core$IRender$ = true;
clustermap.components.table.t84681.prototype.om$core$IRender$render$arity$1 = ((function (map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs84684 = (cljs.core.truth_((function (){var and__3625__auto__ = self__.from;if(cljs.core.truth_(and__3625__auto__))
{return (self__.from > (0));
} else
{return and__3625__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__10071__auto____$1,map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3944__auto__ = (0);var y__3945__auto__ = (self__.from - self__.size);return ((x__3944__auto__ > y__3945__auto__) ? x__3944__auto__ : y__3945__auto__);
})());
});})(this__10071__auto____$1,map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs84684))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs84684)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs84684))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs84685 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs84685))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs84685)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs84685))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs84685)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs84684,this__10071__auto____$1,map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs84684,this__10071__auto____$1,map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs84684),(function (){var attrs84686 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs84686))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs84686)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs84686))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs84686)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs84684,this__10071__auto____$1,map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs84684,this__10071__auto____$1,map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size))
;
clustermap.components.table.t84681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size){
return (function (_84683){var self__ = this;
var _84683__$1 = this;return self__.meta84682;
});})(map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size))
;
clustermap.components.table.t84681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size){
return (function (_84683,meta84682__$1){var self__ = this;
var _84683__$1 = this;return (new clustermap.components.table.t84681(self__.owner,self__.paginate,self__.table_data,self__.p__84662,self__.controls,self__.map__84679,self__.size,self__.from,self__.count,self__.opts,self__.map__84680,meta84682__$1));
});})(map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t84681 = ((function (map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size){
return (function __GT_t84681(owner__$1,paginate__$1,table_data__$1,p__84662__$1,controls__$1,map__84679__$2,size__$1,from__$1,count__$1,opts__$1,map__84680__$2,meta84682){return (new clustermap.components.table.t84681(owner__$1,paginate__$1,table_data__$1,p__84662__$1,controls__$1,map__84679__$2,size__$1,from__$1,count__$1,opts__$1,map__84680__$2,meta84682));
});})(map__84679,map__84679__$1,controls,map__84680,map__84680__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t84681(owner,paginate,table_data,p__84662,controls,map__84679__$1,size,from,count,opts,map__84680__$1,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__84695){var map__84708 = p__84695;var map__84708__$1 = ((cljs.core.seq_QMARK_.call(null,map__84708))?cljs.core.apply.call(null,cljs.core.hash_map,map__84708):map__84708);var record = cljs.core.get.call(null,map__84708__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__84708__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t84709 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t84709 = (function (columns,record,map__84708,p__84695,render_table_row,meta84710){
this.columns = columns;
this.record = record;
this.map__84708 = map__84708;
this.p__84695 = p__84695;
this.render_table_row = render_table_row;
this.meta84710 = meta84710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t84709.cljs$lang$type = true;
clustermap.components.table.t84709.cljs$lang$ctorStr = "clustermap.components.table/t84709";
clustermap.components.table.t84709.cljs$lang$ctorPrWriter = ((function (map__84708,map__84708__$1,record,columns){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t84709");
});})(map__84708,map__84708__$1,record,columns))
;
clustermap.components.table.t84709.prototype.om$core$IRender$ = true;
clustermap.components.table.t84709.prototype.om$core$IRender$render$arity$1 = ((function (map__84708,map__84708__$1,record,columns){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__84708,map__84708__$1,record,columns){
return (function iter__84712(s__84713){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__84708,map__84708__$1,record,columns){
return (function (){var s__84713__$1 = s__84713;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84713__$1);if(temp__4126__auto__)
{var s__84713__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84713__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__84713__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__84715 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__84714 = (0);while(true){
if((i__84714 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__84714);cljs.core.chunk_append.call(null,b__84715,(function (){var vec__84718 = col;var col_key = cljs.core.nth.call(null,vec__84718,(0),null);var col_name = cljs.core.nth.call(null,vec__84718,(1),null);var formatter = cljs.core.nth.call(null,vec__84718,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__84720 = (i__84714 + (1));
i__84714 = G__84720;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84715),iter__84712.call(null,cljs.core.chunk_rest.call(null,s__84713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84715),null);
}
} else
{var col = cljs.core.first.call(null,s__84713__$2);return cljs.core.cons.call(null,(function (){var vec__84719 = col;var col_key = cljs.core.nth.call(null,vec__84719,(0),null);var col_name = cljs.core.nth.call(null,vec__84719,(1),null);var formatter = cljs.core.nth.call(null,vec__84719,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__84712.call(null,cljs.core.rest.call(null,s__84713__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__84708,map__84708__$1,record,columns))
,null,null));
});})(this__10071__auto____$1,map__84708,map__84708__$1,record,columns))
;return iter__4375__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__84708,map__84708__$1,record,columns))
;
clustermap.components.table.t84709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__84708,map__84708__$1,record,columns){
return (function (_84711){var self__ = this;
var _84711__$1 = this;return self__.meta84710;
});})(map__84708,map__84708__$1,record,columns))
;
clustermap.components.table.t84709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__84708,map__84708__$1,record,columns){
return (function (_84711,meta84710__$1){var self__ = this;
var _84711__$1 = this;return (new clustermap.components.table.t84709(self__.columns,self__.record,self__.map__84708,self__.p__84695,self__.render_table_row,meta84710__$1));
});})(map__84708,map__84708__$1,record,columns))
;
clustermap.components.table.__GT_t84709 = ((function (map__84708,map__84708__$1,record,columns){
return (function __GT_t84709(columns__$1,record__$1,map__84708__$2,p__84695__$1,render_table_row__$1,meta84710){return (new clustermap.components.table.t84709(columns__$1,record__$1,map__84708__$2,p__84695__$1,render_table_row__$1,meta84710));
});})(map__84708,map__84708__$1,record,columns))
;
}
return (new clustermap.components.table.t84709(columns,record,map__84708__$1,p__84695,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__84721,owner,opts){var map__84745 = p__84721;var map__84745__$1 = ((cljs.core.seq_QMARK_.call(null,map__84745))?cljs.core.apply.call(null,cljs.core.hash_map,map__84745):map__84745);var props = map__84745__$1;var table_data = cljs.core.get.call(null,map__84745__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__84746 = cljs.core.get.call(null,map__84745__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__84746__$1 = ((cljs.core.seq_QMARK_.call(null,map__84746))?cljs.core.apply.call(null,cljs.core.hash_map,map__84746):map__84746);var controls = map__84746__$1;var columns = cljs.core.get.call(null,map__84746__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__84746__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs84747 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs84747))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs84747)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs84747))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs84748 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view){
return (function iter__84752(s__84753){return (new cljs.core.LazySeq(null,((function (attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view){
return (function (){var s__84753__$1 = s__84753;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84753__$1);if(temp__4126__auto__)
{var s__84753__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84753__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__84753__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__84755 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__84754 = (0);while(true){
if((i__84754 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__84754);cljs.core.chunk_append.call(null,b__84755,(function (){var vec__84758 = col;var col_key = cljs.core.nth.call(null,vec__84758,(0),null);var col_name = cljs.core.nth.call(null,vec__84758,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__84768 = (i__84754 + (1));
i__84754 = G__84768;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84755),iter__84752.call(null,cljs.core.chunk_rest.call(null,s__84753__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84755),null);
}
} else
{var col = cljs.core.first.call(null,s__84753__$2);return cljs.core.cons.call(null,(function (){var vec__84759 = col;var col_key = cljs.core.nth.call(null,vec__84759,(0),null);var col_name = cljs.core.nth.call(null,vec__84759,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__84752.call(null,cljs.core.rest.call(null,s__84753__$2)));
}
} else
{return null;
}
break;
}
});})(attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs84748))?sablono.interpreter.attributes.call(null,attrs84748):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs84748))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs84748)], null))));
})(),(function (){var attrs84749 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs84749))?sablono.interpreter.attributes.call(null,attrs84749):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs84749))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs84749)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs84747),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs84750 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view){
return (function iter__84760(s__84761){return (new cljs.core.LazySeq(null,((function (attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view){
return (function (){var s__84761__$1 = s__84761;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84761__$1);if(temp__4126__auto__)
{var s__84761__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84761__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__84761__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__84763 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__84762 = (0);while(true){
if((i__84762 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__84762);cljs.core.chunk_append.call(null,b__84763,(function (){var vec__84766 = col;var col_key = cljs.core.nth.call(null,vec__84766,(0),null);var col_name = cljs.core.nth.call(null,vec__84766,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__84769 = (i__84762 + (1));
i__84762 = G__84769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84763),iter__84760.call(null,cljs.core.chunk_rest.call(null,s__84761__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84763),null);
}
} else
{var col = cljs.core.first.call(null,s__84761__$2);return cljs.core.cons.call(null,(function (){var vec__84767 = col;var col_key = cljs.core.nth.call(null,vec__84767,(0),null);var col_name = cljs.core.nth.call(null,vec__84767,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__84760.call(null,cljs.core.rest.call(null,s__84761__$2)));
}
} else
{return null;
}
break;
}
});})(attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs84750))?sablono.interpreter.attributes.call(null,attrs84750):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs84750))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs84750)], null))));
})(),(function (){var attrs84751 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs84747,map__84745,map__84745__$1,props,table_data,map__84746,map__84746__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs84751))?sablono.interpreter.attributes.call(null,attrs84751):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs84751))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs84751)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__84770,owner){var map__84785 = p__84770;var map__84785__$1 = ((cljs.core.seq_QMARK_.call(null,map__84785))?cljs.core.apply.call(null,cljs.core.hash_map,map__84785):map__84785);var props = map__84785__$1;var map__84786 = cljs.core.get.call(null,map__84785__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__84786__$1 = ((cljs.core.seq_QMARK_.call(null,map__84786))?cljs.core.apply.call(null,cljs.core.hash_map,map__84786):map__84786);var table_state = map__84786__$1;var table_data = cljs.core.get.call(null,map__84786__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__84787 = cljs.core.get.call(null,map__84786__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__84787__$1 = ((cljs.core.seq_QMARK_.call(null,map__84787))?cljs.core.apply.call(null,cljs.core.hash_map,map__84787):map__84787);var controls = map__84787__$1;var index = cljs.core.get.call(null,map__84787__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__84787__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__84787__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__84787__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__84787__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__84788 = cljs.core.get.call(null,map__84785__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__84788__$1 = ((cljs.core.seq_QMARK_.call(null,map__84788))?cljs.core.apply.call(null,cljs.core.hash_map,map__84788):map__84788);var filter_by_view = cljs.core.get.call(null,map__84788__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__84788__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__84785__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t84789 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t84789 = (function (sort_spec,map__84788,table_component,map__84787,owner,filter_by_view,props,table_data,index,filter_spec,columns,p__84770,table_state,controls,map__84786,bounds,size,from,map__84785,meta84790){
this.sort_spec = sort_spec;
this.map__84788 = map__84788;
this.table_component = table_component;
this.map__84787 = map__84787;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.p__84770 = p__84770;
this.table_state = table_state;
this.controls = controls;
this.map__84786 = map__84786;
this.bounds = bounds;
this.size = size;
this.from = from;
this.map__84785 = map__84785;
this.meta84790 = meta84790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t84789.cljs$lang$type = true;
clustermap.components.table.t84789.cljs$lang$ctorStr = "clustermap.components.table/t84789";
clustermap.components.table.t84789.cljs$lang$ctorPrWriter = ((function (map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t84789");
});})(map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t84789.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t84789.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__84792,p__84793){var self__ = this;
var map__84794 = p__84792;var map__84794__$1 = ((cljs.core.seq_QMARK_.call(null,map__84794))?cljs.core.apply.call(null,cljs.core.hash_map,map__84794):map__84794);var next_props = map__84794__$1;var map__84795 = cljs.core.get.call(null,map__84794__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__84795__$1 = ((cljs.core.seq_QMARK_.call(null,map__84795))?cljs.core.apply.call(null,cljs.core.hash_map,map__84795):map__84795);var next_table_state = map__84795__$1;var next_table_data = cljs.core.get.call(null,map__84795__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__84796 = cljs.core.get.call(null,map__84795__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__84796__$1 = ((cljs.core.seq_QMARK_.call(null,map__84796))?cljs.core.apply.call(null,cljs.core.hash_map,map__84796):map__84796);var next_controls = map__84796__$1;var next_index = cljs.core.get.call(null,map__84796__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__84796__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__84796__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__84796__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__84796__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__84797 = cljs.core.get.call(null,map__84794__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__84797__$1 = ((cljs.core.seq_QMARK_.call(null,map__84797))?cljs.core.apply.call(null,cljs.core.hash_map,map__84797):map__84797);var next_filter_by_view = cljs.core.get.call(null,map__84797__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__84797__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__84794__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__84798 = p__84793;var map__84798__$1 = ((cljs.core.seq_QMARK_.call(null,map__84798))?cljs.core.apply.call(null,cljs.core.hash_map,map__84798):map__84798);var next_state = map__84798__$1;var table_data_resource = cljs.core.get.call(null,map__84798__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not.call(null,next_table_data);if(or__3637__auto__)
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
});})(map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t84789.prototype.om$core$IRender$ = true;
clustermap.components.table.t84789.prototype.om$core$IRender$render$arity$1 = ((function (map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t84789.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t84789.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds))
);
});})(map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t84789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds){
return (function (_84791){var self__ = this;
var _84791__$1 = this;return self__.meta84790;
});})(map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t84789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds){
return (function (_84791,meta84790__$1){var self__ = this;
var _84791__$1 = this;return (new clustermap.components.table.t84789(self__.sort_spec,self__.map__84788,self__.table_component,self__.map__84787,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.p__84770,self__.table_state,self__.controls,self__.map__84786,self__.bounds,self__.size,self__.from,self__.map__84785,meta84790__$1));
});})(map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t84789 = ((function (map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t84789(sort_spec__$1,map__84788__$2,table_component__$1,map__84787__$2,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,p__84770__$1,table_state__$1,controls__$1,map__84786__$2,bounds__$1,size__$1,from__$1,map__84785__$2,meta84790){return (new clustermap.components.table.t84789(sort_spec__$1,map__84788__$2,table_component__$1,map__84787__$2,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,p__84770__$1,table_state__$1,controls__$1,map__84786__$2,bounds__$1,size__$1,from__$1,map__84785__$2,meta84790));
});})(map__84785,map__84785__$1,props,map__84786,map__84786__$1,table_state,table_data,map__84787,map__84787__$1,controls,index,sort_spec,from,size,columns,map__84788,map__84788__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t84789(sort_spec,map__84788__$1,table_component,map__84787__$1,owner,filter_by_view,props,table_data,index,filter_spec,columns,p__84770,table_state,controls,map__84786__$1,bounds,size,from,map__84785__$1,null));
});

//# sourceMappingURL=table.js.map