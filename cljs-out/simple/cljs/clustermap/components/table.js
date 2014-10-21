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
clustermap.components.table.order_col = (function order_col(controls,p__32637,col_key,col_name){var map__32647 = p__32637;var map__32647__$1 = ((cljs.core.seq_QMARK_.call(null,map__32647))?cljs.core.apply.call(null,cljs.core.hash_map,map__32647):map__32647);var table_data = map__32647__$1;var current_sort_spec = cljs.core.get.call(null,map__32647__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var current_sort_spec__$1 = ((cljs.core.sequential_QMARK_.call(null,current_sort_spec))?cljs.core.first.call(null,current_sort_spec):current_sort_spec);var current_sort_key = (function (){var G__32648 = current_sort_spec__$1;var G__32648__$1 = (((G__32648 == null))?null:cljs.core.keys.call(null,G__32648));var G__32648__$2 = (((G__32648__$1 == null))?null:cljs.core.first.call(null,G__32648__$1));return G__32648__$2;
})();var current_sort_dir = (function (){var G__32649 = current_sort_spec__$1;var G__32649__$1 = (((G__32649 == null))?null:current_sort_key.call(null,G__32649));var G__32649__$2 = (((G__32649__$1 == null))?null:new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(G__32649__$1));return G__32649__$2;
})();return React.DOM.a({"href": "#", "onClick": ((function (current_sort_spec__$1,current_sort_key,current_sort_dir,map__32647,map__32647__$1,table_data,current_sort_spec){
return (function (e){e.preventDefault();
var pred__32650 = cljs.core._EQ_;var expr__32651 = current_sort_dir;if(cljs.core.truth_(pred__32650.call(null,"asc",expr__32651)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
} else
{if(cljs.core.truth_(pred__32650.call(null,"desc",expr__32651)))
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null)], true, false));
} else
{return om.core.update_BANG_.call(null,controls,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap.fromArray([col_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], true, false));
}
}
});})(current_sort_spec__$1,current_sort_key,current_sort_dir,map__32647,map__32647__$1,table_data,current_sort_spec))
},sablono.interpreter.interpret.call(null,col_name),((cljs.core._EQ_.call(null,current_sort_key,col_key))?sablono.interpreter.interpret.call(null,(function (){var pred__32653 = cljs.core._EQ_;var expr__32654 = current_sort_dir;if(cljs.core.truth_(pred__32653.call(null,"asc",expr__32654)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-asc","i.icon-asc",1318187620)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-desc","i.icon-desc",-1647067651)], null);
}
})()):null));
});
/**
* generate a table pagination control
*/
clustermap.components.table.paginate = (function paginate(p__32656,owner,opts){var map__32673 = p__32656;var map__32673__$1 = ((cljs.core.seq_QMARK_.call(null,map__32673))?cljs.core.apply.call(null,cljs.core.hash_map,map__32673):map__32673);var controls = cljs.core.get.call(null,map__32673__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32674 = cljs.core.get.call(null,map__32673__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32674__$1 = ((cljs.core.seq_QMARK_.call(null,map__32674))?cljs.core.apply.call(null,cljs.core.hash_map,map__32674):map__32674);var table_data = map__32674__$1;var count = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"count","count",2139924085));var from = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(typeof clustermap.components.table.t32675 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32675 = (function (p__32656,map__32674,owner,map__32673,paginate,table_data,controls,size,from,count,opts,meta32676){
this.p__32656 = p__32656;
this.map__32674 = map__32674;
this.owner = owner;
this.map__32673 = map__32673;
this.paginate = paginate;
this.table_data = table_data;
this.controls = controls;
this.size = size;
this.from = from;
this.count = count;
this.opts = opts;
this.meta32676 = meta32676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32675.cljs$lang$type = true;
clustermap.components.table.t32675.cljs$lang$ctorStr = "clustermap.components.table/t32675";
clustermap.components.table.t32675.cljs$lang$ctorPrWriter = ((function (map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t32675");
});})(map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size))
;
clustermap.components.table.t32675.prototype.om$core$IRender$ = true;
clustermap.components.table.t32675.prototype.om$core$IRender$render$arity$1 = ((function (map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var attrs32678 = (cljs.core.truth_((function (){var and__3625__auto__ = self__.from;if(cljs.core.truth_(and__3625__auto__))
{return (self__.from > (0));
} else
{return and__3625__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (this__10071__auto____$1,map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(function (){var x__3944__auto__ = (0);var y__3945__auto__ = (self__.from - self__.size);return ((x__3944__auto__ > y__3945__auto__) ? x__3944__auto__ : y__3945__auto__);
})());
});})(this__10071__auto____$1,map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.prev","span.prev",1950349585),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-left","i.icon-arrow-left",1090541868)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32678))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["paginate"], null)], null),attrs32678)):{"className": "paginate"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32678))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs32679 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs32679))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs32679)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32679))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32679)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs32678,this__10071__auto____$1,map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs32678,this__10071__auto____$1,map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32678),(function (){var attrs32680 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.from + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__3951__auto__ = (self__.from + self__.size);var y__3952__auto__ = self__.count;return ((x__3951__auto__ < y__3952__auto__) ? x__3951__auto__ : y__3952__auto__);
})())+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.count));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs32680))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page"], null)], null),attrs32680)):{"className": "page"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32680))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32680)], null))));
})(),((((self__.from + self__.size) < self__.count))?React.DOM.span({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs32678,this__10071__auto____$1,map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,self__.controls,new cljs.core.Keyword(null,"from","from",1815293044),(self__.from + self__.size));
});})(attrs32678,this__10071__auto____$1,map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size))
},React.DOM.i({"className": "icon-arrow-right"}))):React.DOM.span({"className": "next"},React.DOM.i({"className": "icon-arrow-right"})))], null))));
});})(map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size))
;
clustermap.components.table.t32675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size){
return (function (_32677){var self__ = this;
var _32677__$1 = this;return self__.meta32676;
});})(map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size))
;
clustermap.components.table.t32675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size){
return (function (_32677,meta32676__$1){var self__ = this;
var _32677__$1 = this;return (new clustermap.components.table.t32675(self__.p__32656,self__.map__32674,self__.owner,self__.map__32673,self__.paginate,self__.table_data,self__.controls,self__.size,self__.from,self__.count,self__.opts,meta32676__$1));
});})(map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size))
;
clustermap.components.table.__GT_t32675 = ((function (map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size){
return (function __GT_t32675(p__32656__$1,map__32674__$2,owner__$1,map__32673__$2,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta32676){return (new clustermap.components.table.t32675(p__32656__$1,map__32674__$2,owner__$1,map__32673__$2,paginate__$1,table_data__$1,controls__$1,size__$1,from__$1,count__$1,opts__$1,meta32676));
});})(map__32673,map__32673__$1,controls,map__32674,map__32674__$1,table_data,count,from,size))
;
}
return (new clustermap.components.table.t32675(p__32656,map__32674__$1,owner,map__32673__$1,paginate,table_data,controls,size,from,count,opts,null));
});
clustermap.components.table.render_table_row = (function render_table_row(p__32689){var map__32702 = p__32689;var map__32702__$1 = ((cljs.core.seq_QMARK_.call(null,map__32702))?cljs.core.apply.call(null,cljs.core.hash_map,map__32702):map__32702);var record = cljs.core.get.call(null,map__32702__$1,new cljs.core.Keyword(null,"record","record",-779106859));var columns = cljs.core.get.call(null,map__32702__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));if(typeof clustermap.components.table.t32703 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32703 = (function (columns,record,map__32702,p__32689,render_table_row,meta32704){
this.columns = columns;
this.record = record;
this.map__32702 = map__32702;
this.p__32689 = p__32689;
this.render_table_row = render_table_row;
this.meta32704 = meta32704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32703.cljs$lang$type = true;
clustermap.components.table.t32703.cljs$lang$ctorStr = "clustermap.components.table/t32703";
clustermap.components.table.t32703.cljs$lang$ctorPrWriter = ((function (map__32702,map__32702__$1,record,columns){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t32703");
});})(map__32702,map__32702__$1,record,columns))
;
clustermap.components.table.t32703.prototype.om$core$IRender$ = true;
clustermap.components.table.t32703.prototype.om$core$IRender$render$arity$1 = ((function (map__32702,map__32702__$1,record,columns){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return sablono.interpreter.interpret.call(null,(function (){var row = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__32702,map__32702__$1,record,columns){
return (function iter__32706(s__32707){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__32702,map__32702__$1,record,columns){
return (function (){var s__32707__$1 = s__32707;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32707__$1);if(temp__4126__auto__)
{var s__32707__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32707__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__32707__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__32709 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__32708 = (0);while(true){
if((i__32708 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__32708);cljs.core.chunk_append.call(null,b__32709,(function (){var vec__32712 = col;var col_key = cljs.core.nth.call(null,vec__32712,(0),null);var col_name = cljs.core.nth.call(null,vec__32712,(1),null);var formatter = cljs.core.nth.call(null,vec__32712,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})());
{
var G__32714 = (i__32708 + (1));
i__32708 = G__32714;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32709),iter__32706.call(null,cljs.core.chunk_rest.call(null,s__32707__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32709),null);
}
} else
{var col = cljs.core.first.call(null,s__32707__$2);return cljs.core.cons.call(null,(function (){var vec__32713 = col;var col_key = cljs.core.nth.call(null,vec__32713,(0),null);var col_name = cljs.core.nth.call(null,vec__32713,(1),null);var formatter = cljs.core.nth.call(null,vec__32713,(2),null);var formatter__$1 = (function (){var or__3637__auto__ = formatter;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.identity;
}
})();return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),formatter__$1.call(null,cljs.core.get.call(null,self__.record,col_key))], null);
})(),iter__32706.call(null,cljs.core.rest.call(null,s__32707__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__32702,map__32702__$1,record,columns))
,null,null));
});})(this__10071__auto____$1,map__32702,map__32702__$1,record,columns))
;return iter__4375__auto__.call(null,self__.columns);
})());return row;
})());
});})(map__32702,map__32702__$1,record,columns))
;
clustermap.components.table.t32703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32702,map__32702__$1,record,columns){
return (function (_32705){var self__ = this;
var _32705__$1 = this;return self__.meta32704;
});})(map__32702,map__32702__$1,record,columns))
;
clustermap.components.table.t32703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32702,map__32702__$1,record,columns){
return (function (_32705,meta32704__$1){var self__ = this;
var _32705__$1 = this;return (new clustermap.components.table.t32703(self__.columns,self__.record,self__.map__32702,self__.p__32689,self__.render_table_row,meta32704__$1));
});})(map__32702,map__32702__$1,record,columns))
;
clustermap.components.table.__GT_t32703 = ((function (map__32702,map__32702__$1,record,columns){
return (function __GT_t32703(columns__$1,record__$1,map__32702__$2,p__32689__$1,render_table_row__$1,meta32704){return (new clustermap.components.table.t32703(columns__$1,record__$1,map__32702__$2,p__32689__$1,render_table_row__$1,meta32704));
});})(map__32702,map__32702__$1,record,columns))
;
}
return (new clustermap.components.table.t32703(columns,record,map__32702__$1,p__32689,render_table_row,null));
});
clustermap.components.table.render_table = (function render_table(p__32715,owner,opts){var map__32739 = p__32715;var map__32739__$1 = ((cljs.core.seq_QMARK_.call(null,map__32739))?cljs.core.apply.call(null,cljs.core.hash_map,map__32739):map__32739);var props = map__32739__$1;var table_data = cljs.core.get.call(null,map__32739__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32740 = cljs.core.get.call(null,map__32739__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32740__$1 = ((cljs.core.seq_QMARK_.call(null,map__32740))?cljs.core.apply.call(null,cljs.core.hash_map,map__32740):map__32740);var controls = map__32740__$1;var columns = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var filter_by_view = cljs.core.get.call(null,map__32740__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COLUMNS",columns], null)));
var attrs32741 = om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs32741))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs32741)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32741))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs32742 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view){
return (function iter__32746(s__32747){return (new cljs.core.LazySeq(null,((function (attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view){
return (function (){var s__32747__$1 = s__32747;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32747__$1);if(temp__4126__auto__)
{var s__32747__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32747__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__32747__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__32749 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__32748 = (0);while(true){
if((i__32748 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__32748);cljs.core.chunk_append.call(null,b__32749,(function (){var vec__32752 = col;var col_key = cljs.core.nth.call(null,vec__32752,(0),null);var col_name = cljs.core.nth.call(null,vec__32752,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__32762 = (i__32748 + (1));
i__32748 = G__32762;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32749),iter__32746.call(null,cljs.core.chunk_rest.call(null,s__32747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32749),null);
}
} else
{var col = cljs.core.first.call(null,s__32747__$2);return cljs.core.cons.call(null,(function (){var vec__32753 = col;var col_key = cljs.core.nth.call(null,vec__32753,(0),null);var col_name = cljs.core.nth.call(null,vec__32753,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__32746.call(null,cljs.core.rest.call(null,s__32747__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32742))?sablono.interpreter.attributes.call(null,attrs32742):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32742))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32742)], null))));
})(),(function (){var attrs32743 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32743))?sablono.interpreter.attributes.call(null,attrs32743):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32743))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32743)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32741),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},(function (){var attrs32744 = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4375__auto__ = ((function (attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view){
return (function iter__32754(s__32755){return (new cljs.core.LazySeq(null,((function (attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view){
return (function (){var s__32755__$1 = s__32755;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32755__$1);if(temp__4126__auto__)
{var s__32755__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32755__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__32755__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__32757 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__32756 = (0);while(true){
if((i__32756 < size__4374__auto__))
{var col = cljs.core._nth.call(null,c__4373__auto__,i__32756);cljs.core.chunk_append.call(null,b__32757,(function (){var vec__32760 = col;var col_key = cljs.core.nth.call(null,vec__32760,(0),null);var col_name = cljs.core.nth.call(null,vec__32760,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})());
{
var G__32763 = (i__32756 + (1));
i__32756 = G__32763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32757),iter__32754.call(null,cljs.core.chunk_rest.call(null,s__32755__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32757),null);
}
} else
{var col = cljs.core.first.call(null,s__32755__$2);return cljs.core.cons.call(null,(function (){var vec__32761 = col;var col_key = cljs.core.nth.call(null,vec__32761,(0),null);var col_name = cljs.core.nth.call(null,vec__32761,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),clustermap.components.table.order_col.call(null,controls,table_data,col_key,col_name)], null);
})(),iter__32754.call(null,cljs.core.rest.call(null,s__32755__$2)));
}
} else
{return null;
}
break;
}
});})(attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view))
,null,null));
});})(attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view))
;return iter__4375__auto__.call(null,columns);
})());return cljs.core.apply.call(null,React.DOM.thead,((cljs.core.map_QMARK_.call(null,attrs32744))?sablono.interpreter.attributes.call(null,attrs32744):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32744))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32744)], null))));
})(),(function (){var attrs32745 = om.core.build_all.call(null,clustermap.components.table.render_table_row,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(table_data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view){
return (function (r){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"record","record",-779106859),r,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(r)], null);
});})(attrs32741,map__32739,map__32739__$1,props,table_data,map__32740,map__32740__$1,controls,columns,filter_by_view))
], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs32745))?sablono.interpreter.attributes.call(null,attrs32745):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32745))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32745)], null))));
})())),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.table.paginate,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),controls,new cljs.core.Keyword(null,"table-data","table-data",-1783738205),table_data], null)))], null))));
});
clustermap.components.table.request_table_data = (function request_table_data(resource,index,index_type,filter_spec,bounds,sort_spec,from,size){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.simple_table,index,index_type,filter_spec,bounds,sort_spec,from,size);
});
clustermap.components.table.table_component = (function table_component(p__32764,owner){var map__32779 = p__32764;var map__32779__$1 = ((cljs.core.seq_QMARK_.call(null,map__32779))?cljs.core.apply.call(null,cljs.core.hash_map,map__32779):map__32779);var props = map__32779__$1;var map__32780 = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32780__$1 = ((cljs.core.seq_QMARK_.call(null,map__32780))?cljs.core.apply.call(null,cljs.core.hash_map,map__32780):map__32780);var table_state = map__32780__$1;var table_data = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32781 = cljs.core.get.call(null,map__32780__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32781__$1 = ((cljs.core.seq_QMARK_.call(null,map__32781))?cljs.core.apply.call(null,cljs.core.hash_map,map__32781):map__32781);var controls = map__32781__$1;var index = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var sort_spec = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var from = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"from","from",1815293044));var size = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"size","size",1098693007));var columns = cljs.core.get.call(null,map__32781__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));var map__32782 = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32782__$1 = ((cljs.core.seq_QMARK_.call(null,map__32782))?cljs.core.apply.call(null,cljs.core.hash_map,map__32782):map__32782);var filter_by_view = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filter_spec = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.table.t32783 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.table.t32783 = (function (sort_spec,table_component,map__32781,owner,filter_by_view,props,table_data,index,filter_spec,columns,map__32779,table_state,controls,map__32780,bounds,size,p__32764,from,map__32782,meta32784){
this.sort_spec = sort_spec;
this.table_component = table_component;
this.map__32781 = map__32781;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.table_data = table_data;
this.index = index;
this.filter_spec = filter_spec;
this.columns = columns;
this.map__32779 = map__32779;
this.table_state = table_state;
this.controls = controls;
this.map__32780 = map__32780;
this.bounds = bounds;
this.size = size;
this.p__32764 = p__32764;
this.from = from;
this.map__32782 = map__32782;
this.meta32784 = meta32784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.table.t32783.cljs$lang$type = true;
clustermap.components.table.t32783.cljs$lang$ctorStr = "clustermap.components.table/t32783";
clustermap.components.table.t32783.cljs$lang$ctorPrWriter = ((function (map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.table/t32783");
});})(map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32783.prototype.om$core$IWillUpdate$ = true;
clustermap.components.table.t32783.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds){
return (function (_,p__32786,p__32787){var self__ = this;
var map__32788 = p__32786;var map__32788__$1 = ((cljs.core.seq_QMARK_.call(null,map__32788))?cljs.core.apply.call(null,cljs.core.hash_map,map__32788):map__32788);var next_props = map__32788__$1;var map__32789 = cljs.core.get.call(null,map__32788__$1,new cljs.core.Keyword(null,"table-state","table-state",-1662785974));var map__32789__$1 = ((cljs.core.seq_QMARK_.call(null,map__32789))?cljs.core.apply.call(null,cljs.core.hash_map,map__32789):map__32789);var next_table_state = map__32789__$1;var next_table_data = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"table-data","table-data",-1783738205));var map__32790 = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32790__$1 = ((cljs.core.seq_QMARK_.call(null,map__32790))?cljs.core.apply.call(null,cljs.core.hash_map,map__32790):map__32790);var next_controls = map__32790__$1;var next_index = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_sort_spec = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var next_from = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"from","from",1815293044));var next_size = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"size","size",1098693007));var map__32791 = cljs.core.get.call(null,map__32788__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32791__$1 = ((cljs.core.seq_QMARK_.call(null,map__32791))?cljs.core.apply.call(null,cljs.core.hash_map,map__32791):map__32791);var next_filter_by_view = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filter_spec = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__32788__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__32792 = p__32787;var map__32792__$1 = ((cljs.core.seq_QMARK_.call(null,map__32792))?cljs.core.apply.call(null,cljs.core.hash_map,map__32792):map__32792);var next_state = map__32792__$1;var table_data_resource = cljs.core.get.call(null,map__32792__$1,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133));var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not.call(null,next_table_data);if(or__3637__auto__)
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
});})(map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32783.prototype.om$core$IRender$ = true;
clustermap.components.table.t32783.prototype.om$core$IRender$render$arity$1 = ((function (map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.table.render_table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205),self__.table_data,new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls], null),self__.owner,cljs.core.PersistentArrayMap.EMPTY);
});})(map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32783.prototype.om$core$IDidMount$ = true;
clustermap.components.table.t32783.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var tdr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"table-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"table-data-resource","table-data-resource",-1272908133),tdr);
return clustermap.ordered_resource.retrieve_responses.call(null,tdr,((function (tdr,___$1,map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds){
return (function (data){return om.core.update_BANG_.call(null,self__.table_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-data","table-data",-1783738205)], null),data);
});})(tdr,___$1,map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds))
);
});})(map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds){
return (function (_32785){var self__ = this;
var _32785__$1 = this;return self__.meta32784;
});})(map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.t32783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds){
return (function (_32785,meta32784__$1){var self__ = this;
var _32785__$1 = this;return (new clustermap.components.table.t32783(self__.sort_spec,self__.table_component,self__.map__32781,self__.owner,self__.filter_by_view,self__.props,self__.table_data,self__.index,self__.filter_spec,self__.columns,self__.map__32779,self__.table_state,self__.controls,self__.map__32780,self__.bounds,self__.size,self__.p__32764,self__.from,self__.map__32782,meta32784__$1));
});})(map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds))
;
clustermap.components.table.__GT_t32783 = ((function (map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds){
return (function __GT_t32783(sort_spec__$1,table_component__$1,map__32781__$2,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__32779__$2,table_state__$1,controls__$1,map__32780__$2,bounds__$1,size__$1,p__32764__$1,from__$1,map__32782__$2,meta32784){return (new clustermap.components.table.t32783(sort_spec__$1,table_component__$1,map__32781__$2,owner__$1,filter_by_view__$1,props__$1,table_data__$1,index__$1,filter_spec__$1,columns__$1,map__32779__$2,table_state__$1,controls__$1,map__32780__$2,bounds__$1,size__$1,p__32764__$1,from__$1,map__32782__$2,meta32784));
});})(map__32779,map__32779__$1,props,map__32780,map__32780__$1,table_state,table_data,map__32781,map__32781__$1,controls,index,sort_spec,from,size,columns,map__32782,map__32782__$1,filter_by_view,filter_spec,bounds))
;
}
return (new clustermap.components.table.t32783(sort_spec,table_component,map__32781__$1,owner,filter_by_view,props,table_data,index,filter_spec,columns,map__32779__$1,table_state,controls,map__32780__$1,bounds,size,p__32764,from,map__32782__$1,null));
});
