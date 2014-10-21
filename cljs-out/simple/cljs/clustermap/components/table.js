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
clustermap.components.table.order_col = (function order_col(controls,p__40171,col_key,col_name){var map__40181 = p__40171;var map__40181__$1 = ((cljs.core.seq_QMARK_.call(null,map__40181))?cljs.core.apply.call(null,cljs.core.hash_map,map__40181):map__40181);var table_data = map__40181__$1;var current_sort_spec = cljs.core.get.call(null,map__40181__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__40182 = current_sort_spec__$1;var G__40182__$1 = (((G__40182 == null))?null:cljs.core.keys.call(null,G__40182));var G__40182__$2 = (((G__40182__$1 == null))?null:cljs.core.first.call(null,G__40182__$1));return G__40182__$2;
})();var current_sort_dir = (function (){var G__40183 = current_sort_spec__$1;var G__40183__$1 = (((G__40183 == null))?null:current_sort_key.call(null,G__40183));var G__40183__$2 = (((G__40183__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__40183__$1));return G__40183__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__40181,map__40181__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__40184 = cljs.core._EQ_;var expr__40185 = current_sort_dir;if(cljs.core.truth_(pred__40184.call(null,"asc",expr__40185)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__40184.call(null,"desc",expr__40185)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__40181,map__40181__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__40187 = cljs.core._EQ_;var expr__40188 = current_sort_dir;if(cljs.core.truth_(pred__40187.call(null,"asc",expr__40188)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__40190,owner,opts){var map__40207 = p__40190;var map__40207__$1 = ((cljs.core.seq_QMARK_.call(null,map__40207))?cljs.core.apply.call(null,cljs.core.hash_map,map__40207):map__40207);var controls = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__40208 = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__40208__$1 = ((cljs.core.seq_QMARK_.call(null,map__40208))?cljs.core.apply.call(null,cljs.core.hash_map,map__40208):map__40208);var table_data = map__40208__$1;var count = cljs.core.get.call(null,map__40208__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__40208__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__40208__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t40209 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t40209 = (function (map__40208,owner,paginate,table_data,map__40207,controls,size,from,count,opts,p__40190,meta40210){
this.map__40208 = map__40208;
this.owner = owner;
this.paginate = paginate;
this.table_data = table_data;
this.map__40207 = map__40207;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.p__40190 = p__40190;
this.meta40210 = meta40210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t40209.cljs$lang$type = true;
clustermap.components.table.t40209.cljs$lang$ctorStr = "clustermap.components.table/t40209";
clustermap.components.table.t40209.cljs$lang$ctorPrWriter = ((function (map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t40209");
});})(map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size))
;
clustermap.components.table.t40209.prototype.om$core$IRender$ = true;
clustermap.components.table.t40209.prototype.om$core$IRender$render$arity$1 = ((function (map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs40212 = (cljs.core.truth_((function (){var and__3625__auto__ = self__.from;if(cljs.core.truth_(and__3625__auto__))
{return (self__.from > (0));
} else
{return and__3625__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__10071__auto____$1,map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3944__auto__ = (0);var y__3945__auto__ = (self__.from - self__.size);return ((x__3944__auto__ > y__3945__auto__) ? x__3944__auto__ : y__3945__auto__);
})());
});})(this__10071__auto____$1,map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs40212))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs40212)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40212))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs40213 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs40213))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs40213)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40213))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40213)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs40212,this__10071__auto____$1,map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs40212,this__10071__auto____$1,map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40212),(function (){var attrs40214 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs40214))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs40214)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40214))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40214)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs40212,this__10071__auto____$1,map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs40212,this__10071__auto____$1,map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size))
;
clustermap.components.table.t40209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size){
return (function (_40211){var self__ = this;
var _40211__$1 = this;return self__.meta40210;
});})(map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size))
;
clustermap.components.table.t40209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size){
return (function (_40211,meta40210__$1){var self__ = this;
var _40211__$1 = this;return (new clustermap.components.table.t40209(self__.map__40208,self__.owner,self__.paginate,self__.table_data,self__.map__40207,self__.controls,self__.size,self__.from,self__.count,self__.opts,self__.p__40190,meta40210__$1));
});})(map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t40209 = ((function (map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size){
return (function __GT_t40209(map__40208__$2,owner__$1,paginate__$1,table_data__$1,map__40207__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,p__40190__$1,meta40210){return (new clustermap.components.table.t40209(map__40208__$2,owner__$1,paginate__$1,table_data__$1,map__40207__$2,controls__$1,size__$1,from__$1,count__$1,opts__$1,p__40190__$1,meta40210));
});})(map__40207,map__40207__$1,controls,map__40208,map__40208__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t40209(map__40208__$1,owner,paginate,table_data,map__40207__$1,controls,size,from,count,opts,p__40190,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__40223){var map__40236 = p__40223;var map__40236__$1 = ((cljs.core.seq_QMARK_.call(null,map__40236))?cljs.core.apply.call(null,cljs.core.hash_map,map__40236):map__40236);var record = cljs.core.get.call(null,map__40236__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__40236__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t40237 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t40237 = (function (columns,record,map__40236,p__40223,render_table_row,meta40238){
this.columns = columns;
this.record = record;
this.map__40236 = map__40236;
this.p__40223 = p__40223;
this.render_table_row = render_table_row;
this.meta40238 = meta40238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t40237.cljs$lang$type = true;
clustermap.components.table.t40237.cljs$lang$ctorStr = "clustermap.components.table/t40237";
clustermap.components.table.t40237.cljs$lang$ctorPrWriter = ((function (map__40236,map__40236__$1,record,columns){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t40237");
});})(map__40236,map__40236__$1,record,columns))
;
clustermap.components.table.t40237.prototype.om$core$IRender$ = true;
clustermap.components.table.t40237.prototype.om$core$IRender$render$arity$1 = ((function (map__40236,map__40236__$1,record,columns){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__40236,map__40236__$1,record,columns){
return (function iter__40240(s__40241){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__40236,map__40236__$1,record,columns){
return (function (){var s__40241__$1 = s__40241;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40241__$1);if(temp__4126__auto__)
{var s__40241__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40241__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__40241__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__40243 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__40242 = (0);while(true){
if((i__40242 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__40242);cljs.core.chunk_append.call(null,b__40243,(function (){var vec__40246 = col;var col_key = cljs.core.nth.call(null,vec__40246,(0),null);var col_name = cljs.core.nth.call(null,vec__40246,(1),null);var formatter = cljs.core.nth.call(null,vec__40246,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__40248 = (i__40242 + (1));
i__40242 = G__40248;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40243),iter__40240.call(null,cljs.core.chunk_rest.call(null,s__40241__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40243),null);
}
} else
{var col = cljs.core.first.call(null,s__40241__$2);return cljs.core.cons.call(null,(function (){var vec__40247 = col;var col_key = cljs.core.nth.call(null,vec__40247,(0),null);var col_name = cljs.core.nth.call(null,vec__40247,(1),null);var formatter = cljs.core.nth.call(null,vec__40247,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__40240.call(null,cljs.core.rest.call(null,s__40241__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__40236,map__40236__$1,record,columns))
,null,null));
});})(this__10071__auto____$1,map__40236,map__40236__$1,record,columns))
;return iter__4375__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__40236,map__40236__$1,record,columns))
;
clustermap.components.table.t40237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40236,map__40236__$1,record,columns){
return (function (_40239){var self__ = this;
var _40239__$1 = this;return self__.meta40238;
});})(map__40236,map__40236__$1,record,columns))
;
clustermap.components.table.t40237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40236,map__40236__$1,record,columns){
return (function (_40239,meta40238__$1){var self__ = this;
var _40239__$1 = this;return (new clustermap.components.table.t40237(self__.columns,self__.record,self__.map__40236,self__.p__40223,self__.render_table_row,meta40238__$1));
});})(map__40236,map__40236__$1,record,columns))
;
clustermap.components.table.__GT_t40237 = ((function (map__40236,map__40236__$1,record,columns){
return (function __GT_t40237(columns__$1,record__$1,map__40236__$2,p__40223__$1,render_table_row__$1,meta40238){return (new clustermap.components.table.t40237(columns__$1,record__$1,map__40236__$2,p__40223__$1,render_table_row__$1,meta40238));
});})(map__40236,map__40236__$1,record,columns))
;
}
return (new clustermap.components.table.t40237(columns,record,map__40236__$1,p__40223,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__40249,owner,opts){var map__40273 = p__40249;var map__40273__$1 = ((cljs.core.seq_QMARK_.call(null,map__40273))?cljs.core.apply.call(null,cljs.core.hash_map,map__40273):map__40273);var props = map__40273__$1;var table_data = cljs.core.get.call(null,map__40273__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__40274 = cljs.core.get.call(null,map__40273__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__40274__$1 = ((cljs.core.seq_QMARK_.call(null,map__40274))?cljs.core.apply.call(null,cljs.core.hash_map,map__40274):map__40274);var controls = map__40274__$1;var columns = cljs.core.get.call(null,map__40274__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__40274__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs40275 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs40275))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs40275)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40275))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs40276 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view){
return (function iter__40280(s__40281){return (new cljs.core.LazySeq(null,((function (attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view){
return (function (){var s__40281__$1 = s__40281;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40281__$1);if(temp__4126__auto__)
{var s__40281__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40281__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__40281__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__40283 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__40282 = (0);while(true){
if((i__40282 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__40282);cljs.core.chunk_append.call(null,b__40283,(function (){var vec__40286 = col;var col_key = cljs.core.nth.call(null,vec__40286,(0),null);var col_name = cljs.core.nth.call(null,vec__40286,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__40296 = (i__40282 + (1));
i__40282 = G__40296;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40283),iter__40280.call(null,cljs.core.chunk_rest.call(null,s__40281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40283),null);
}
} else
{var col = cljs.core.first.call(null,s__40281__$2);return cljs.core.cons.call(null,(function (){var vec__40287 = col;var col_key = cljs.core.nth.call(null,vec__40287,(0),null);var col_name = cljs.core.nth.call(null,vec__40287,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__40280.call(null,cljs.core.rest.call(null,s__40281__$2)));
}
} else
{return null;
}
break;
}
});})(attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs40276))?sablono.interpreter.attributes.call(null,attrs40276):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40276))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40276)], null))));
})(),(function (){var attrs40277 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs40277))?sablono.interpreter.attributes.call(null,attrs40277):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40277))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40277)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40275),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs40278 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view){
return (function iter__40288(s__40289){return (new cljs.core.LazySeq(null,((function (attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view){
return (function (){var s__40289__$1 = s__40289;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40289__$1);if(temp__4126__auto__)
{var s__40289__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40289__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__40289__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__40291 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__40290 = (0);while(true){
if((i__40290 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__40290);cljs.core.chunk_append.call(null,b__40291,(function (){var vec__40294 = col;var col_key = cljs.core.nth.call(null,vec__40294,(0),null);var col_name = cljs.core.nth.call(null,vec__40294,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__40297 = (i__40290 + (1));
i__40290 = G__40297;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40291),iter__40288.call(null,cljs.core.chunk_rest.call(null,s__40289__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40291),null);
}
} else
{var col = cljs.core.first.call(null,s__40289__$2);return cljs.core.cons.call(null,(function (){var vec__40295 = col;var col_key = cljs.core.nth.call(null,vec__40295,(0),null);var col_name = cljs.core.nth.call(null,vec__40295,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__40288.call(null,cljs.core.rest.call(null,s__40289__$2)));
}
} else
{return null;
}
break;
}
});})(attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs40278))?sablono.interpreter.attributes.call(null,attrs40278):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40278))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40278)], null))));
})(),(function (){var attrs40279 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs40275,map__40273,map__40273__$1,props,table_data,map__40274,map__40274__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs40279))?sablono.interpreter.attributes.call(null,attrs40279):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40279))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40279)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__40298,owner){var map__40313 = p__40298;var map__40313__$1 = ((cljs.core.seq_QMARK_.call(null,map__40313))?cljs.core.apply.call(null,cljs.core.hash_map,map__40313):map__40313);var props = map__40313__$1;var map__40314 = cljs.core.get.call(null,map__40313__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__40314__$1 = ((cljs.core.seq_QMARK_.call(null,map__40314))?cljs.core.apply.call(null,cljs.core.hash_map,map__40314):map__40314);var table_state = map__40314__$1;var table_data = cljs.core.get.call(null,map__40314__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__40315 = cljs.core.get.call(null,map__40314__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__40315__$1 = ((cljs.core.seq_QMARK_.call(null,map__40315))?cljs.core.apply.call(null,cljs.core.hash_map,map__40315):map__40315);var controls = map__40315__$1;var index = cljs.core.get.call(null,map__40315__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__40315__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__40315__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__40315__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__40315__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__40316 = cljs.core.get.call(null,map__40313__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__40316__$1 = ((cljs.core.seq_QMARK_.call(null,map__40316))?cljs.core.apply.call(null,cljs.core.hash_map,map__40316):map__40316);var filter_by_view = cljs.core.get.call(null,map__40316__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__40316__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__40313__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t40317 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t40317 = (function (sort_spec,map__40313,table_component,owner,p__40298,filter_by_view,props,table_data,map__40314,index,filter_spec,columns,table_state,map__40315,controls,bounds,size,map__40316,from,meta40318){
this.sort_spec = sort_spec;
this.map__40313 = map__40313;
this.table_component = table_component;
this.owner = owner;
this.p__40298 = p__40298;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.map__40314 = map__40314;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.table_state = table_state;
this.map__40315 = map__40315;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.map__40316 = map__40316;
this.from = from;
this.meta40318 = meta40318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t40317.cljs$lang$type = true;
clustermap.components.table.t40317.cljs$lang$ctorStr = "clustermap.components.table/t40317";
clustermap.components.table.t40317.cljs$lang$ctorPrWriter = ((function (map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t40317");
});})(map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40317.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t40317.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__40320,p__40321){var self__ = this;
var map__40322 = p__40320;var map__40322__$1 = ((cljs.core.seq_QMARK_.call(null,map__40322))?cljs.core.apply.call(null,cljs.core.hash_map,map__40322):map__40322);var next_props = map__40322__$1;var map__40323 = cljs.core.get.call(null,map__40322__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__40323__$1 = ((cljs.core.seq_QMARK_.call(null,map__40323))?cljs.core.apply.call(null,cljs.core.hash_map,map__40323):map__40323);var next_table_state = map__40323__$1;var next_table_data = cljs.core.get.call(null,map__40323__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__40324 = cljs.core.get.call(null,map__40323__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__40324__$1 = ((cljs.core.seq_QMARK_.call(null,map__40324))?cljs.core.apply.call(null,cljs.core.hash_map,map__40324):map__40324);var next_controls = map__40324__$1;var next_index = cljs.core.get.call(null,map__40324__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__40324__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__40324__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__40324__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__40324__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__40325 = cljs.core.get.call(null,map__40322__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__40325__$1 = ((cljs.core.seq_QMARK_.call(null,map__40325))?cljs.core.apply.call(null,cljs.core.hash_map,map__40325):map__40325);var next_filter_by_view = cljs.core.get.call(null,map__40325__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__40325__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__40322__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__40326 = p__40321;var map__40326__$1 = ((cljs.core.seq_QMARK_.call(null,map__40326))?cljs.core.apply.call(null,cljs.core.hash_map,map__40326):map__40326);var next_state = map__40326__$1;var table_data_resource = cljs.core.get.call(null,map__40326__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not.call(null,next_table_data);if(or__3637__auto__)
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
});})(map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40317.prototype.om$core$IRender$ = true;
clustermap.components.table.t40317.prototype.om$core$IRender$render$arity$1 = ((function (map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40317.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t40317.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds))
);
});})(map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds){
return (function (_40319){var self__ = this;
var _40319__$1 = this;return self__.meta40318;
});})(map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t40317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds){
return (function (_40319,meta40318__$1){var self__ = this;
var _40319__$1 = this;return (new clustermap.components.table.t40317(self__.sort_spec,self__.map__40313,self__.table_component,self__.owner,self__.p__40298,self__.filter_by_view,self__.props,self__.table_data,self__.map__40314,self__.index,self__.filter_spec,self__.columns,self__.table_state,self__.map__40315,self__.controls,self__.bounds,self__.size,self__.map__40316,self__.from,meta40318__$1));
});})(map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t40317 = ((function (map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t40317(sort_spec__$1,map__40313__$2,table_component__$1,owner__$1,p__40298__$1,filter_by_view__$1,props__$1,table_data__$1,map__40314__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__40315__$2,controls__$1,bounds__$1,size__$1,map__40316__$2,from__$1,meta40318){return (new clustermap.components.table.t40317(sort_spec__$1,map__40313__$2,table_component__$1,owner__$1,p__40298__$1,filter_by_view__$1,props__$1,table_data__$1,map__40314__$2,index__$1,filter_spec__$1,columns__$1,table_state__$1,map__40315__$2,controls__$1,bounds__$1,size__$1,map__40316__$2,from__$1,meta40318));
});})(map__40313,map__40313__$1,props,map__40314,map__40314__$1,table_state,table_data,map__40315,map__40315__$1,controls,index,sort_spec,from,size,columns,map__40316,map__40316__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t40317(sort_spec,map__40313__$1,table_component,owner,p__40298,filter_by_view,props,table_data,map__40314__$1,index,filter_spec,columns,table_state,map__40315__$1,controls,bounds,size,map__40316__$1,from,null));
});
