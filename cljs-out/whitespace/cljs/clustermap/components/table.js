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
var pred__14054 = cljs.core._EQ_;var expr__14055 = current_order_dir;if(cljs.core.truth_(pred__14054.call(null,"asc",expr__14055)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
} else
{if(cljs.core.truth_(pred__14054.call(null,"desc",expr__14055)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"asc","asc",356854569)], true, false)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_update_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap.fromArray([col,new cljs.core.Keyword(null,"desc","desc",2093485764)], true, false)], null)], null));
}
}
});})(current_order,current_order__$1,current_order_key,current_order_dir))
},sablono.interpreter.interpret.call(null,title),((cljs.core._EQ_.call(null,current_order_key,col))?sablono.interpreter.interpret.call(null,(function (){var pred__14057 = cljs.core._EQ_;var expr__14058 = current_order_dir;if(cljs.core.truth_(pred__14057.call(null,"asc",expr__14058)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__14060,owner,opts){var map__14077 = p__14060;var map__14077__$1 = ((cljs.core.seq_QMARK_.call(null,map__14077))?cljs.core.apply.call(null,cljs.core.hash_map,map__14077):map__14077);var controls = cljs.core.get.call(null,map__14077__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__14078 = cljs.core.get.call(null,map__14077__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__14078__$1 = ((cljs.core.seq_QMARK_.call(null,map__14078))?cljs.core.apply.call(null,cljs.core.hash_map,map__14078):map__14078);var table_data = map__14078__$1;var count = cljs.core.get.call(null,map__14078__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__14078__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__14078__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t14079 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t14079 = (function (p__14060,owner,map__14077,map__14078,paginate,table_data,controls,size,from,count,opts,meta14080){
this.p__14060 = p__14060;
this.owner = owner;
this.map__14077 = map__14077;
this.map__14078 = map__14078;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta14080 = meta14080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t14079.cljs$lang$type = true;
clustermap.components.table.t14079.cljs$lang$ctorStr = "clustermap.components.table/t14079";
clustermap.components.table.t14079.cljs$lang$ctorPrWriter = ((function (map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t14079");
});})(map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size))
;
clustermap.components.table.t14079.prototype.om$core$IRender$ = true;
clustermap.components.table.t14079.prototype.om$core$IRender$render$arity$1 = ((function (map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs14082 = (cljs.core.truth_((function (){var and__3546__auto__ = self__.from;if(cljs.core.truth_(and__3546__auto__))
{return (self__.from > (0));
} else
{return and__3546__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__9504__auto____$1,map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3865__auto__ = (0);var y__3866__auto__ = (self__.from - self__.size);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})());
});})(this__9504__auto____$1,map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14082))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs14082)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14082))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14083 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs14083))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs14083)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14083))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14083)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs14082,this__9504__auto____$1,map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs14082,this__9504__auto____$1,map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14082),(function (){var attrs14084 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3872__auto__ = (self__.from + self__.size);var y__3873__auto__ = self__.count;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs14084))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs14084)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14084))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14084)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs14082,this__9504__auto____$1,map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs14082,this__9504__auto____$1,map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size))
;
clustermap.components.table.t14079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size){
return (function (_14081){var self__ = this;
var _14081__$1 = this;return self__.meta14080;
});})(map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size))
;
clustermap.components.table.t14079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size){
return (function (_14081,meta14080__$1){var self__ = this;
var _14081__$1 = this;return (new clustermap.components.table.t14079(self__.p__14060,self__.owner,self__.map__14077,self__.map__14078,self__.paginate,self__.table_data,self__.controls,self__.size,self__.from,self__.count,self__.opts,meta14080__$1));
});})(map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t14079 = ((function (map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size){
return (function __GT_t14079(p__14060__$1,owner__$1,map__14077__$2,map__14078__$2,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta14080){return (new clustermap.components.table.t14079(p__14060__$1,owner__$1,map__14077__$2,map__14078__$2,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta14080));
});})(map__14077,map__14077__$1,controls,map__14078,map__14078__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t14079(p__14060,owner,map__14077__$1,map__14078__$1,paginate,table_data,controls,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__14093){var map__14134 = p__14093;var map__14134__$1 = ((cljs.core.seq_QMARK_.call(null,map__14134))?cljs.core.apply.call(null,cljs.core.hash_map,map__14134):map__14134);var record = cljs.core.get.call(null,map__14134__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__14134__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t14135 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t14135 = (function (columns,record,map__14134,p__14093,render_table_row,meta14136){
this.columns = columns;
this.record = record;
this.map__14134 = map__14134;
this.p__14093 = p__14093;
this.render_table_row = render_table_row;
this.meta14136 = meta14136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t14135.cljs$lang$type = true;
clustermap.components.table.t14135.cljs$lang$ctorStr = "clustermap.components.table/t14135";
clustermap.components.table.t14135.cljs$lang$ctorPrWriter = ((function (map__14134,map__14134__$1,record,columns){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t14135");
});})(map__14134,map__14134__$1,record,columns))
;
clustermap.components.table.t14135.prototype.om$core$IRender$ = true;
clustermap.components.table.t14135.prototype.om$core$IRender$render$arity$1 = ((function (map__14134,map__14134__$1,record,columns){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__14134,map__14134__$1,record,columns){
return (function iter__14138(s__14139){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__14134,map__14134__$1,record,columns){
return (function (){var s__14139__$1 = s__14139;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14139__$1);if(temp__4126__auto__)
{var s__14139__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14139__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14139__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14141 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14140 = (0);while(true){
if((i__14140 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__14140);cljs.core.chunk_append.call(null,b__14141,(function (){var iter__4283__auto__ = ((function (i__14140,col,c__4281__auto__,size__4282__auto__,b__14141,s__14139__$2,temp__4126__auto__,this__9504__auto____$1,map__14134,map__14134__$1,record,columns){
return (function iter__14158(s__14159){return (new cljs.core.LazySeq(null,((function (i__14140,col,c__4281__auto__,size__4282__auto__,b__14141,s__14139__$2,temp__4126__auto__,this__9504__auto____$1,map__14134,map__14134__$1,record,columns){
return (function (){var s__14159__$1 = s__14159;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14159__$1);if(temp__4126__auto____$1)
{var s__14159__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14159__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__14159__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__14161 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__14160 = (0);while(true){
if((i__14160 < size__4282__auto____$1))
{var vec__14164 = cljs.core._nth.call(null,c__4281__auto____$1,i__14160);var col_key = cljs.core.nth.call(null,vec__14164,(0),null);var col_name = cljs.core.nth.call(null,vec__14164,(1),null);cljs.core.chunk_append.call(null,b__14161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__14174 = (i__14160 + (1));
i__14160 = G__14174;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14161),iter__14158.call(null,cljs.core.chunk_rest.call(null,s__14159__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14161),null);
}
} else
{var vec__14165 = cljs.core.first.call(null,s__14159__$2);var col_key = cljs.core.nth.call(null,vec__14165,(0),null);var col_name = cljs.core.nth.call(null,vec__14165,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__14158.call(null,cljs.core.rest.call(null,s__14159__$2)));
}
} else
{return null;
}
break;
}
});})(i__14140,col,c__4281__auto__,size__4282__auto__,b__14141,s__14139__$2,temp__4126__auto__,this__9504__auto____$1,map__14134,map__14134__$1,record,columns))
,null,null));
});})(i__14140,col,c__4281__auto__,size__4282__auto__,b__14141,s__14139__$2,temp__4126__auto__,this__9504__auto____$1,map__14134,map__14134__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})());
{
var G__14175 = (i__14140 + (1));
i__14140 = G__14175;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14141),iter__14138.call(null,cljs.core.chunk_rest.call(null,s__14139__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14141),null);
}
} else
{var col = cljs.core.first.call(null,s__14139__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__14139__$2,temp__4126__auto__,this__9504__auto____$1,map__14134,map__14134__$1,record,columns){
return (function iter__14166(s__14167){return (new cljs.core.LazySeq(null,((function (col,s__14139__$2,temp__4126__auto__,this__9504__auto____$1,map__14134,map__14134__$1,record,columns){
return (function (){var s__14167__$1 = s__14167;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14167__$1);if(temp__4126__auto____$1)
{var s__14167__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14167__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14167__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14169 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14168 = (0);while(true){
if((i__14168 < size__4282__auto__))
{var vec__14172 = cljs.core._nth.call(null,c__4281__auto__,i__14168);var col_key = cljs.core.nth.call(null,vec__14172,(0),null);var col_name = cljs.core.nth.call(null,vec__14172,(1),null);cljs.core.chunk_append.call(null,b__14169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null));
{
var G__14176 = (i__14168 + (1));
i__14168 = G__14176;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14169),iter__14166.call(null,cljs.core.chunk_rest.call(null,s__14167__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14169),null);
}
} else
{var vec__14173 = cljs.core.first.call(null,s__14167__$2);var col_key = cljs.core.nth.call(null,vec__14173,(0),null);var col_name = cljs.core.nth.call(null,vec__14173,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.call(null,self__.record,col_key)], null),iter__14166.call(null,cljs.core.rest.call(null,s__14167__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__14139__$2,temp__4126__auto__,this__9504__auto____$1,map__14134,map__14134__$1,record,columns))
,null,null));
});})(col,s__14139__$2,temp__4126__auto__,this__9504__auto____$1,map__14134,map__14134__$1,record,columns))
;return iter__4283__auto__.call(null,col);
})(),iter__14138.call(null,cljs.core.rest.call(null,s__14139__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__14134,map__14134__$1,record,columns))
,null,null));
});})(this__9504__auto____$1,map__14134,map__14134__$1,record,columns))
;return iter__4283__auto__.call(null,self__.columns);
})()));return row;
})());
});})(map__14134,map__14134__$1,record,columns))
;
clustermap.components.table.t14135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14134,map__14134__$1,record,columns){
return (function (_14137){var self__ = this;
var _14137__$1 = this;return self__.meta14136;
});})(map__14134,map__14134__$1,record,columns))
;
clustermap.components.table.t14135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14134,map__14134__$1,record,columns){
return (function (_14137,meta14136__$1){var self__ = this;
var _14137__$1 = this;return (new clustermap.components.table.t14135(self__.columns,self__.record,self__.map__14134,self__.p__14093,self__.render_table_row,meta14136__$1));
});})(map__14134,map__14134__$1,record,columns))
;
clustermap.components.table.__GT_t14135 = ((function (map__14134,map__14134__$1,record,columns){
return (function __GT_t14135(columns__$1,record__$1,map__14134__$2,p__14093__$1,render_table_row__$1,meta14136){return (new clustermap.components.table.t14135(columns__$1,record__$1,map__14134__$2,p__14093__$1,render_table_row__$1,meta14136));
});})(map__14134,map__14134__$1,record,columns))
;
}
return (new clustermap.components.table.t14135(columns,record,map__14134__$1,p__14093,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__14177,owner,opts){var map__14257 = p__14177;var map__14257__$1 = ((cljs.core.seq_QMARK_.call(null,map__14257))?cljs.core.apply.call(null,cljs.core.hash_map,map__14257):map__14257);var props = map__14257__$1;var table_data = cljs.core.get.call(null,map__14257__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__14258 = cljs.core.get.call(null,map__14257__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__14258__$1 = ((cljs.core.seq_QMARK_.call(null,map__14258))?cljs.core.apply.call(null,cljs.core.hash_map,map__14258):map__14258);var controls = map__14258__$1;var columns = cljs.core.get.call(null,map__14258__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__14258__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var attrs14259 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14259))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs14259)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14259))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs14260 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function iter__14264(s__14265){return (new cljs.core.LazySeq(null,((function (attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function (){var s__14265__$1 = s__14265;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14265__$1);if(temp__4126__auto__)
{var s__14265__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14265__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14265__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14267 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14266 = (0);while(true){
if((i__14266 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__14266);cljs.core.chunk_append.call(null,b__14267,(function (){var iter__4283__auto__ = ((function (i__14266,col,c__4281__auto__,size__4282__auto__,b__14267,s__14265__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function iter__14284(s__14285){return (new cljs.core.LazySeq(null,((function (i__14266,col,c__4281__auto__,size__4282__auto__,b__14267,s__14265__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function (){var s__14285__$1 = s__14285;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14285__$1);if(temp__4126__auto____$1)
{var s__14285__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14285__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__14285__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__14287 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__14286 = (0);while(true){
if((i__14286 < size__4282__auto____$1))
{var vec__14290 = cljs.core._nth.call(null,c__4281__auto____$1,i__14286);var col_key = cljs.core.nth.call(null,vec__14290,(0),null);var col_name = cljs.core.nth.call(null,vec__14290,(1),null);cljs.core.chunk_append.call(null,b__14287,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__14336 = (i__14286 + (1));
i__14286 = G__14336;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14287),iter__14284.call(null,cljs.core.chunk_rest.call(null,s__14285__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14287),null);
}
} else
{var vec__14291 = cljs.core.first.call(null,s__14285__$2);var col_key = cljs.core.nth.call(null,vec__14291,(0),null);var col_name = cljs.core.nth.call(null,vec__14291,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__14284.call(null,cljs.core.rest.call(null,s__14285__$2)));
}
} else
{return null;
}
break;
}
});})(i__14266,col,c__4281__auto__,size__4282__auto__,b__14267,s__14265__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
,null,null));
});})(i__14266,col,c__4281__auto__,size__4282__auto__,b__14267,s__14265__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__14337 = (i__14266 + (1));
i__14266 = G__14337;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14267),iter__14264.call(null,cljs.core.chunk_rest.call(null,s__14265__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14267),null);
}
} else
{var col = cljs.core.first.call(null,s__14265__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__14265__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function iter__14292(s__14293){return (new cljs.core.LazySeq(null,((function (col,s__14265__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function (){var s__14293__$1 = s__14293;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14293__$1);if(temp__4126__auto____$1)
{var s__14293__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14293__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14293__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14295 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14294 = (0);while(true){
if((i__14294 < size__4282__auto__))
{var vec__14298 = cljs.core._nth.call(null,c__4281__auto__,i__14294);var col_key = cljs.core.nth.call(null,vec__14298,(0),null);var col_name = cljs.core.nth.call(null,vec__14298,(1),null);cljs.core.chunk_append.call(null,b__14295,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__14338 = (i__14294 + (1));
i__14294 = G__14338;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14295),iter__14292.call(null,cljs.core.chunk_rest.call(null,s__14293__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14295),null);
}
} else
{var vec__14299 = cljs.core.first.call(null,s__14293__$2);var col_key = cljs.core.nth.call(null,vec__14299,(0),null);var col_name = cljs.core.nth.call(null,vec__14299,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__14292.call(null,cljs.core.rest.call(null,s__14293__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__14265__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__14265__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__14264.call(null,cljs.core.rest.call(null,s__14265__$2)));
}
} else
{return null;
}
break;
}
});})(attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs14260))?sablono.interpreter.attributes.call(null,attrs14260):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14260))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14260)], null))));
})(),(function (){var attrs14261 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs14261))?sablono.interpreter.attributes.call(null,attrs14261):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14261))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14261)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14259),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs14262 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4283__auto__ = ((function (attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function iter__14300(s__14301){return (new cljs.core.LazySeq(null,((function (attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function (){var s__14301__$1 = s__14301;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14301__$1);if(temp__4126__auto__)
{var s__14301__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14301__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14301__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14303 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14302 = (0);while(true){
if((i__14302 < size__4282__auto__))
{var col = cljs.core._nth.call(null,c__4281__auto__,i__14302);cljs.core.chunk_append.call(null,b__14303,(function (){var iter__4283__auto__ = ((function (i__14302,col,c__4281__auto__,size__4282__auto__,b__14303,s__14301__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function iter__14320(s__14321){return (new cljs.core.LazySeq(null,((function (i__14302,col,c__4281__auto__,size__4282__auto__,b__14303,s__14301__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function (){var s__14321__$1 = s__14321;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14321__$1);if(temp__4126__auto____$1)
{var s__14321__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14321__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__14321__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__14323 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__14322 = (0);while(true){
if((i__14322 < size__4282__auto____$1))
{var vec__14326 = cljs.core._nth.call(null,c__4281__auto____$1,i__14322);var col_key = cljs.core.nth.call(null,vec__14326,(0),null);var col_name = cljs.core.nth.call(null,vec__14326,(1),null);cljs.core.chunk_append.call(null,b__14323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__14339 = (i__14322 + (1));
i__14322 = G__14339;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14323),iter__14320.call(null,cljs.core.chunk_rest.call(null,s__14321__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14323),null);
}
} else
{var vec__14327 = cljs.core.first.call(null,s__14321__$2);var col_key = cljs.core.nth.call(null,vec__14327,(0),null);var col_name = cljs.core.nth.call(null,vec__14327,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__14320.call(null,cljs.core.rest.call(null,s__14321__$2)));
}
} else
{return null;
}
break;
}
});})(i__14302,col,c__4281__auto__,size__4282__auto__,b__14303,s__14301__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
,null,null));
});})(i__14302,col,c__4281__auto__,size__4282__auto__,b__14303,s__14301__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})());
{
var G__14340 = (i__14302 + (1));
i__14302 = G__14340;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14303),iter__14300.call(null,cljs.core.chunk_rest.call(null,s__14301__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14303),null);
}
} else
{var col = cljs.core.first.call(null,s__14301__$2);return cljs.core.cons.call(null,(function (){var iter__4283__auto__ = ((function (col,s__14301__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function iter__14328(s__14329){return (new cljs.core.LazySeq(null,((function (col,s__14301__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function (){var s__14329__$1 = s__14329;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14329__$1);if(temp__4126__auto____$1)
{var s__14329__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14329__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14329__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14331 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14330 = (0);while(true){
if((i__14330 < size__4282__auto__))
{var vec__14334 = cljs.core._nth.call(null,c__4281__auto__,i__14330);var col_key = cljs.core.nth.call(null,vec__14334,(0),null);var col_name = cljs.core.nth.call(null,vec__14334,(1),null);cljs.core.chunk_append.call(null,b__14331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null));
{
var G__14341 = (i__14330 + (1));
i__14330 = G__14341;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14331),iter__14328.call(null,cljs.core.chunk_rest.call(null,s__14329__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14331),null);
}
} else
{var vec__14335 = cljs.core.first.call(null,s__14329__$2);var col_key = cljs.core.nth.call(null,vec__14335,(0),null);var col_name = cljs.core.nth.call(null,vec__14335,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),col_name], null),iter__14328.call(null,cljs.core.rest.call(null,s__14329__$2)));
}
} else
{return null;
}
break;
}
});})(col,s__14301__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
,null,null));
});})(col,s__14301__$2,temp__4126__auto__,attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,col);
})(),iter__14300.call(null,cljs.core.rest.call(null,s__14301__$2)));
}
} else
{return null;
}
break;
}
});})(attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
;return iter__4283__auto__.call(null,columns);
})()));return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs14262))?sablono.interpreter.attributes.call(null,attrs14262):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14262))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14262)], null))));
})(),(function (){var attrs14263 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs14259,map__14257,map__14257__$1,props,table_data,map__14258,map__14258__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs14263))?sablono.interpreter.attributes.call(null,attrs14263):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14263))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14263)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__14342,owner){var map__14357 = p__14342;var map__14357__$1 = ((cljs.core.seq_QMARK_.call(null,map__14357))?cljs.core.apply.call(null,cljs.core.hash_map,map__14357):map__14357);var props = map__14357__$1;var map__14358 = cljs.core.get.call(null,map__14357__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__14358__$1 = ((cljs.core.seq_QMARK_.call(null,map__14358))?cljs.core.apply.call(null,cljs.core.hash_map,map__14358):map__14358);var table_state = map__14358__$1;var table_data = cljs.core.get.call(null,map__14358__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__14359 = cljs.core.get.call(null,map__14358__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__14359__$1 = ((cljs.core.seq_QMARK_.call(null,map__14359))?cljs.core.apply.call(null,cljs.core.hash_map,map__14359):map__14359);var controls = map__14359__$1;var index = cljs.core.get.call(null,map__14359__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__14359__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__14359__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__14359__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__14359__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__14360 = cljs.core.get.call(null,map__14357__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__14360__$1 = ((cljs.core.seq_QMARK_.call(null,map__14360))?cljs.core.apply.call(null,cljs.core.hash_map,map__14360):map__14360);var filter_by_view = cljs.core.get.call(null,map__14360__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__14360__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__14357__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t14361 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t14361 = (function (map__14359,sort_spec,table_component,owner,filter_by_view,props,map__14357,table_data,map__14358,index,filter_spec,map__14360,columns,table_state,controls,bounds,size,p__14342,from,meta14362){
this.map__14359 = map__14359;
this.sort_spec = sort_spec;
this.table_component = table_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__14357 = map__14357;
this.table_data = table_data;
this.map__14358 = map__14358;
this.index = index;
this.filter_spec = filter_spec;
this.map__14360 = map__14360;
this.columns = columns;
this.table_state = table_state;
this.controls = controls;
this.bounds = bounds;
this.size = size;
this.p__14342 = p__14342;
this.from = from;
this.meta14362 = meta14362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t14361.cljs$lang$type = true;
clustermap.components.table.t14361.cljs$lang$ctorStr = "clustermap.components.table/t14361";
clustermap.components.table.t14361.cljs$lang$ctorPrWriter = ((function (map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.table/t14361");
});})(map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t14361.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t14361.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__14364,p__14365){var self__ = this;
var map__14366 = p__14364;var map__14366__$1 = ((cljs.core.seq_QMARK_.call(null,map__14366))?cljs.core.apply.call(null,cljs.core.hash_map,map__14366):map__14366);var next_props = map__14366__$1;var map__14367 = cljs.core.get.call(null,map__14366__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__14367__$1 = ((cljs.core.seq_QMARK_.call(null,map__14367))?cljs.core.apply.call(null,cljs.core.hash_map,map__14367):map__14367);var next_table_state = map__14367__$1;var next_table_data = cljs.core.get.call(null,map__14367__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__14368 = cljs.core.get.call(null,map__14367__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__14368__$1 = ((cljs.core.seq_QMARK_.call(null,map__14368))?cljs.core.apply.call(null,cljs.core.hash_map,map__14368):map__14368);var next_controls = map__14368__$1;var next_index = cljs.core.get.call(null,map__14368__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__14368__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__14368__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__14368__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__14368__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__14369 = cljs.core.get.call(null,map__14366__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__14369__$1 = ((cljs.core.seq_QMARK_.call(null,map__14369))?cljs.core.apply.call(null,cljs.core.hash_map,map__14369):map__14369);var next_filter_by_view = cljs.core.get.call(null,map__14369__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__14369__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__14366__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__14370 = p__14365;var map__14370__$1 = ((cljs.core.seq_QMARK_.call(null,map__14370))?cljs.core.apply.call(null,cljs.core.hash_map,map__14370):map__14370);var next_state = map__14370__$1;var table_data_resource = cljs.core.get.call(null,map__14370__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_table_data);if(or__3558__auto__)
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
});})(map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t14361.prototype.om$core$IRender$ = true;
clustermap.components.table.t14361.prototype.om$core$IRender$render$arity$1 = ((function (map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t14361.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t14361.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds))
);
});})(map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t14361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds){
return (function (_14363){var self__ = this;
var _14363__$1 = this;return self__.meta14362;
});})(map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t14361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds){
return (function (_14363,meta14362__$1){var self__ = this;
var _14363__$1 = this;return (new clustermap.components.table.t14361(self__.map__14359,self__.sort_spec,self__.table_component,self__.owner,self__.filter_by_view,self__.props,self__.map__14357,self__.table_data,self__.map__14358,self__.index,self__.filter_spec,self__.map__14360,self__.columns,self__.table_state,self__.controls,self__.bounds,self__.size,self__.p__14342,self__.from,meta14362__$1));
});})(map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t14361 = ((function (map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t14361(map__14359__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__14357__$2,table_data__$1,map__14358__$2,index__$1,filter_spec__$1,map__14360__$2,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,p__14342__$1,from__$1,meta14362){return (new clustermap.components.table.t14361(map__14359__$2,sort_spec__$1,table_component__$1,owner__$1,filter_by_view__$1,props__$1,map__14357__$2,table_data__$1,map__14358__$2,index__$1,filter_spec__$1,map__14360__$2,columns__$1,table_state__$1,controls__$1,bounds__$1,size__$1,p__14342__$1,from__$1,meta14362));
});})(map__14357,map__14357__$1,props,map__14358,map__14358__$1,table_state,table_data,map__14359,map__14359__$1,controls,index,sort_spec,from,size,columns,map__14360,map__14360__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t14361(map__14359__$1,sort_spec,table_component,owner,filter_by_view,props,map__14357__$1,table_data,map__14358__$1,index,filter_spec,map__14360__$1,columns,table_state,controls,bounds,size,p__14342,from,null));
});
