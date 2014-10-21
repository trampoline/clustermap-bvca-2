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
clustermap.components.table.order_col = (function order_col(controls,p__79300,col_key,col_name){var map__79310 = p__79300;var map__79310__$1 = ((cljs.core.seq_QMARK_.call(null,map__79310))?cljs.core.apply.call(null,cljs.core.hash_map,map__79310):map__79310);var table_data = map__79310__$1;var current_sort_spec = cljs.core.get.call(null,map__79310__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__79311 = current_sort_spec__$1;var G__79311__$1 = (((G__79311 == null))?null:cljs.core.keys.call(null,G__79311));var G__79311__$2 = (((G__79311__$1 == null))?null:cljs.core.first.call(null,G__79311__$1));return G__79311__$2;
})();var current_sort_dir = (function (){var G__79312 = current_sort_spec__$1;var G__79312__$1 = (((G__79312 == null))?null:current_sort_key.call(null,G__79312));var G__79312__$2 = (((G__79312__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__79312__$1));return G__79312__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__79310,map__79310__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__79313 = cljs.core._EQ_;var expr__79314 = current_sort_dir;if(cljs.core.truth_(pred__79313.call(null,"asc",expr__79314)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__79313.call(null,"desc",expr__79314)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__79310,map__79310__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__79316 = cljs.core._EQ_;var expr__79317 = current_sort_dir;if(cljs.core.truth_(pred__79316.call(null,"asc",expr__79317)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__79319,owner,opts){var map__79336 = p__79319;var map__79336__$1 = ((cljs.core.seq_QMARK_.call(null,map__79336))?cljs.core.apply.call(null,cljs.core.hash_map,map__79336):map__79336);var controls = cljs.core.get.call(null,map__79336__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__79337 = cljs.core.get.call(null,map__79336__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__79337__$1 = ((cljs.core.seq_QMARK_.call(null,map__79337))?cljs.core.apply.call(null,cljs.core.hash_map,map__79337):map__79337);var table_data = map__79337__$1;var count = cljs.core.get.call(null,map__79337__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__79337__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__79337__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t79338 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t79338 = (function (map__79337,owner,p__79319,paginate,table_data,controls,size,map__79336,from,count,opts,meta79339){
this.map__79337 = map__79337;
this.owner = owner;
this.p__79319 = p__79319;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.map__79336 = map__79336;
this.from = from;
this.count = count;
this.opts = opts;
this.meta79339 = meta79339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t79338.cljs$lang$type = true;
clustermap.components.table.t79338.cljs$lang$ctorStr = "clustermap.components.table/t79338";
clustermap.components.table.t79338.cljs$lang$ctorPrWriter = ((function (map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t79338");
});})(map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size))
;
clustermap.components.table.t79338.prototype.om$core$IRender$ = true;
clustermap.components.table.t79338.prototype.om$core$IRender$render$arity$1 = ((function (map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs79341 = (cljs.core.truth_((function (){var and__3625__auto__ = self__.from;if(cljs.core.truth_(and__3625__auto__))
{return (self__.from > (0));
} else
{return and__3625__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__10071__auto____$1,map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3944__auto__ = (0);var y__3945__auto__ = (self__.from - self__.size);return ((x__3944__auto__ > y__3945__auto__) ? x__3944__auto__ : y__3945__auto__);
})());
});})(this__10071__auto____$1,map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs79341))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs79341)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs79341))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs79342 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs79342))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs79342)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs79342))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs79342)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs79341,this__10071__auto____$1,map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs79341,this__10071__auto____$1,map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs79341),(function (){var attrs79343 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs79343))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs79343)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs79343))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs79343)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs79341,this__10071__auto____$1,map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs79341,this__10071__auto____$1,map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size))
;
clustermap.components.table.t79338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size){
return (function (_79340){var self__ = this;
var _79340__$1 = this;return self__.meta79339;
});})(map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size))
;
clustermap.components.table.t79338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size){
return (function (_79340,meta79339__$1){var self__ = this;
var _79340__$1 = this;return (new clustermap.components.table.t79338(self__.map__79337,self__.owner,self__.p__79319,self__.paginate,self__.table_data,self__.controls,self__.size,self__.map__79336,self__.from,self__.count,self__.opts,meta79339__$1));
});})(map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t79338 = ((function (map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size){
return (function __GT_t79338(map__79337__$2,owner__$1,p__79319__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__79336__$2,from__$1,count__$1,opts__$1,meta79339){return (new clustermap.components.table.t79338(map__79337__$2,owner__$1,p__79319__$1,paginate__$1,table_data__$1,controls__$1,size__$1,map__79336__$2,from__$1,count__$1,opts__$1,meta79339));
});})(map__79336,map__79336__$1,controls,map__79337,map__79337__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t79338(map__79337__$1,owner,p__79319,paginate,table_data,controls,size,map__79336__$1,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__79352){var map__79365 = p__79352;var map__79365__$1 = ((cljs.core.seq_QMARK_.call(null,map__79365))?cljs.core.apply.call(null,cljs.core.hash_map,map__79365):map__79365);var record = cljs.core.get.call(null,map__79365__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__79365__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t79366 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t79366 = (function (columns,record,map__79365,p__79352,render_table_row,meta79367){
this.columns = columns;
this.record = record;
this.map__79365 = map__79365;
this.p__79352 = p__79352;
this.render_table_row = render_table_row;
this.meta79367 = meta79367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t79366.cljs$lang$type = true;
clustermap.components.table.t79366.cljs$lang$ctorStr = "clustermap.components.table/t79366";
clustermap.components.table.t79366.cljs$lang$ctorPrWriter = ((function (map__79365,map__79365__$1,record,columns){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t79366");
});})(map__79365,map__79365__$1,record,columns))
;
clustermap.components.table.t79366.prototype.om$core$IRender$ = true;
clustermap.components.table.t79366.prototype.om$core$IRender$render$arity$1 = ((function (map__79365,map__79365__$1,record,columns){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__79365,map__79365__$1,record,columns){
return (function iter__79369(s__79370){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__79365,map__79365__$1,record,columns){
return (function (){var s__79370__$1 = s__79370;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__79370__$1);if(temp__4126__auto__)
{var s__79370__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79370__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__79370__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__79372 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__79371 = (0);while(true){
if((i__79371 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__79371);cljs.core.chunk_append.call(null,b__79372,(function (){var vec__79375 = col;var col_key = cljs.core.nth.call(null,vec__79375,(0),null);var col_name = cljs.core.nth.call(null,vec__79375,(1),null);var formatter = cljs.core.nth.call(null,vec__79375,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__79377 = (i__79371 + (1));
i__79371 = G__79377;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79372),iter__79369.call(null,cljs.core.chunk_rest.call(null,s__79370__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79372),null);
}
} else
{var col = cljs.core.first.call(null,s__79370__$2);return cljs.core.cons.call(null,(function (){var vec__79376 = col;var col_key = cljs.core.nth.call(null,vec__79376,(0),null);var col_name = cljs.core.nth.call(null,vec__79376,(1),null);var formatter = cljs.core.nth.call(null,vec__79376,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__79369.call(null,cljs.core.rest.call(null,s__79370__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__79365,map__79365__$1,record,columns))
,null,null));
});})(this__10071__auto____$1,map__79365,map__79365__$1,record,columns))
;return iter__4375__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__79365,map__79365__$1,record,columns))
;
clustermap.components.table.t79366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79365,map__79365__$1,record,columns){
return (function (_79368){var self__ = this;
var _79368__$1 = this;return self__.meta79367;
});})(map__79365,map__79365__$1,record,columns))
;
clustermap.components.table.t79366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79365,map__79365__$1,record,columns){
return (function (_79368,meta79367__$1){var self__ = this;
var _79368__$1 = this;return (new clustermap.components.table.t79366(self__.columns,self__.record,self__.map__79365,self__.p__79352,self__.render_table_row,meta79367__$1));
});})(map__79365,map__79365__$1,record,columns))
;
clustermap.components.table.__GT_t79366 = ((function (map__79365,map__79365__$1,record,columns){
return (function __GT_t79366(columns__$1,record__$1,map__79365__$2,p__79352__$1,render_table_row__$1,meta79367){return (new clustermap.components.table.t79366(columns__$1,record__$1,map__79365__$2,p__79352__$1,render_table_row__$1,meta79367));
});})(map__79365,map__79365__$1,record,columns))
;
}
return (new clustermap.components.table.t79366(columns,record,map__79365__$1,p__79352,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__79378,owner,opts){var map__79402 = p__79378;var map__79402__$1 = ((cljs.core.seq_QMARK_.call(null,map__79402))?cljs.core.apply.call(null,cljs.core.hash_map,map__79402):map__79402);var props = map__79402__$1;var table_data = cljs.core.get.call(null,map__79402__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__79403 = cljs.core.get.call(null,map__79402__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__79403__$1 = ((cljs.core.seq_QMARK_.call(null,map__79403))?cljs.core.apply.call(null,cljs.core.hash_map,map__79403):map__79403);var controls = map__79403__$1;var columns = cljs.core.get.call(null,map__79403__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__79403__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs79404 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs79404))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs79404)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs79404))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs79405 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view){
return (function iter__79409(s__79410){return (new cljs.core.LazySeq(null,((function (attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view){
return (function (){var s__79410__$1 = s__79410;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__79410__$1);if(temp__4126__auto__)
{var s__79410__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79410__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__79410__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__79412 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__79411 = (0);while(true){
if((i__79411 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__79411);cljs.core.chunk_append.call(null,b__79412,(function (){var vec__79415 = col;var col_key = cljs.core.nth.call(null,vec__79415,(0),null);var col_name = cljs.core.nth.call(null,vec__79415,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__79425 = (i__79411 + (1));
i__79411 = G__79425;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79412),iter__79409.call(null,cljs.core.chunk_rest.call(null,s__79410__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79412),null);
}
} else
{var col = cljs.core.first.call(null,s__79410__$2);return cljs.core.cons.call(null,(function (){var vec__79416 = col;var col_key = cljs.core.nth.call(null,vec__79416,(0),null);var col_name = cljs.core.nth.call(null,vec__79416,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__79409.call(null,cljs.core.rest.call(null,s__79410__$2)));
}
} else
{return null;
}
break;
}
});})(attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs79405))?sablono.interpreter.attributes.call(null,attrs79405):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs79405))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs79405)], null))));
})(),(function (){var attrs79406 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs79406))?sablono.interpreter.attributes.call(null,attrs79406):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs79406))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs79406)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs79404),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs79407 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view){
return (function iter__79417(s__79418){return (new cljs.core.LazySeq(null,((function (attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view){
return (function (){var s__79418__$1 = s__79418;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__79418__$1);if(temp__4126__auto__)
{var s__79418__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79418__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__79418__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__79420 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__79419 = (0);while(true){
if((i__79419 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__79419);cljs.core.chunk_append.call(null,b__79420,(function (){var vec__79423 = col;var col_key = cljs.core.nth.call(null,vec__79423,(0),null);var col_name = cljs.core.nth.call(null,vec__79423,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__79426 = (i__79419 + (1));
i__79419 = G__79426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79420),iter__79417.call(null,cljs.core.chunk_rest.call(null,s__79418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79420),null);
}
} else
{var col = cljs.core.first.call(null,s__79418__$2);return cljs.core.cons.call(null,(function (){var vec__79424 = col;var col_key = cljs.core.nth.call(null,vec__79424,(0),null);var col_name = cljs.core.nth.call(null,vec__79424,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__79417.call(null,cljs.core.rest.call(null,s__79418__$2)));
}
} else
{return null;
}
break;
}
});})(attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs79407))?sablono.interpreter.attributes.call(null,attrs79407):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs79407))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs79407)], null))));
})(),(function (){var attrs79408 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs79404,map__79402,map__79402__$1,props,table_data,map__79403,map__79403__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs79408))?sablono.interpreter.attributes.call(null,attrs79408):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs79408))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs79408)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__79427,owner){var map__79442 = p__79427;var map__79442__$1 = ((cljs.core.seq_QMARK_.call(null,map__79442))?cljs.core.apply.call(null,cljs.core.hash_map,map__79442):map__79442);var props = map__79442__$1;var map__79443 = cljs.core.get.call(null,map__79442__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__79443__$1 = ((cljs.core.seq_QMARK_.call(null,map__79443))?cljs.core.apply.call(null,cljs.core.hash_map,map__79443):map__79443);var table_state = map__79443__$1;var table_data = cljs.core.get.call(null,map__79443__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__79444 = cljs.core.get.call(null,map__79443__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__79444__$1 = ((cljs.core.seq_QMARK_.call(null,map__79444))?cljs.core.apply.call(null,cljs.core.hash_map,map__79444):map__79444);var controls = map__79444__$1;var index = cljs.core.get.call(null,map__79444__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__79444__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__79444__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__79444__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__79444__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__79445 = cljs.core.get.call(null,map__79442__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__79445__$1 = ((cljs.core.seq_QMARK_.call(null,map__79445))?cljs.core.apply.call(null,cljs.core.hash_map,map__79445):map__79445);var filter_by_view = cljs.core.get.call(null,map__79445__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__79445__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__79442__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t79446 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t79446 = (function (map__79445,sort_spec,table_component,owner,filter_by_view,props,p__79427,table_data,index,map__79442,filter_spec,map__79444,columns,table_state,controls,bounds,size,from,map__79443,meta79447){
this.map__79445 = map__79445;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.p__79427 = p__79427;
this.table_data = table_data;
this.index = index;
this.map__79442 = map__79442;
this.filter_spec = filter_spec;
this.map__79444 = map__79444;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.from = from;
this.map__79443 = map__79443;
this.meta79447 = meta79447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t79446.cljs$lang$type = true;
clustermap.components.table.t79446.cljs$lang$ctorStr = "clustermap.components.table/t79446";
clustermap.components.table.t79446.cljs$lang$ctorPrWriter = ((function (map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t79446");
});})(map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t79446.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t79446.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__79449,p__79450){var self__ = this;
var map__79451 = p__79449;var map__79451__$1 = ((cljs.core.seq_QMARK_.call(null,map__79451))?cljs.core.apply.call(null,cljs.core.hash_map,map__79451):map__79451);var next_props = map__79451__$1;var map__79452 = cljs.core.get.call(null,map__79451__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__79452__$1 = ((cljs.core.seq_QMARK_.call(null,map__79452))?cljs.core.apply.call(null,cljs.core.hash_map,map__79452):map__79452);var next_table_state = map__79452__$1;var next_table_data = cljs.core.get.call(null,map__79452__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__79453 = cljs.core.get.call(null,map__79452__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__79453__$1 = ((cljs.core.seq_QMARK_.call(null,map__79453))?cljs.core.apply.call(null,cljs.core.hash_map,map__79453):map__79453);var next_controls = map__79453__$1;var next_index = cljs.core.get.call(null,map__79453__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__79453__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__79453__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__79453__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__79453__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__79454 = cljs.core.get.call(null,map__79451__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__79454__$1 = ((cljs.core.seq_QMARK_.call(null,map__79454))?cljs.core.apply.call(null,cljs.core.hash_map,map__79454):map__79454);var next_filter_by_view = cljs.core.get.call(null,map__79454__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__79454__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__79451__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__79455 = p__79450;var map__79455__$1 = ((cljs.core.seq_QMARK_.call(null,map__79455))?cljs.core.apply.call(null,cljs.core.hash_map,map__79455):map__79455);var next_state = map__79455__$1;var table_data_resource = cljs.core.get.call(null,map__79455__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not.call(null,next_table_data);if(or__3637__auto__)
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
});})(map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t79446.prototype.om$core$IRender$ = true;
clustermap.components.table.t79446.prototype.om$core$IRender$render$arity$1 = ((function (map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t79446.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t79446.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds))
);
});})(map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t79446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds){
return (function (_79448){var self__ = this;
var _79448__$1 = this;return self__.meta79447;
});})(map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t79446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds){
return (function (_79448,meta79447__$1){var self__ = this;
var _79448__$1 = this;return (new clustermap.components.table.t79446(self__.map__79445,self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.p__79427,self__.table_data,self__.index,self__.map__79442,self__.filter_spec,self__.map__79444,self__.columns,self__.table_state,self__.controls,self__.bounds,self__.size,self__.from,self__.map__79443,meta79447__$1));
});})(map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t79446 = ((function (map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t79446(map__79445__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,p__79427__$1,table_data__$1,index__$1,map__79442__$2,filter_spec__$1,map__79444__$2,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,from__$1,map__79443__$2,meta79447){return (new clustermap.components.table.t79446(map__79445__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,p__79427__$1,table_data__$1,index__$1,map__79442__$2,filter_spec__$1,map__79444__$2,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,from__$1,map__79443__$2,meta79447));
});})(map__79442,map__79442__$1,props,map__79443,map__79443__$1,table_state,table_data,map__79444,map__79444__$1,controls,index,sort_spec,from,size,columns,map__79445,map__79445__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t79446(map__79445__$1,sort_spec,table_component,owner,filter_by_view,props,p__79427,table_data,index,map__79442__$1,filter_spec,map__79444__$1,columns,table_state,controls,bounds,size,from,map__79443__$1,null));
});

//# sourceMappingURL=table.js.map