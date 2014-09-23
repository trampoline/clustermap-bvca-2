// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs38148 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38148))?sablono.interpreter.attributes(attrs38148):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38148))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38148),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{return null;

}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__38157){var map__38170 = p__38157;var map__38170__$1 = ((cljs.core.seq_QMARK_(map__38170))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38170):map__38170);var opts = map__38170__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38170__$1,cljs.core.constant$keyword$955);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38170__$1,cljs.core.constant$keyword$956);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$957,company) : path_fn.call(null,cljs.core.constant$keyword$957,company));if(typeof clustermap.components.full_report.company_list.t38171 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t38171 = (function (company_path,link_fn,path_fn,opts,map__38170,p__38157,owner,company,portfolio_company,meta38172){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__38170 = map__38170;
this.p__38157 = p__38157;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta38172 = meta38172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t38171.cljs$lang$type = true;
clustermap.components.full_report.company_list.t38171.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t38171";
clustermap.components.full_report.company_list.t38171.cljs$lang$ctorPrWriter = ((function (company_path,map__38170,map__38170__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t38171");
});})(company_path,map__38170,map__38170__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38171.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t38171.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__38170,map__38170__$1,opts,path_fn,link_fn){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs38174 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$957,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$957,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38174))?sablono.interpreter.attributes(attrs38174):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38174))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38174)], null))));
})(),(function (){var attrs38175 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$958,cljs.core.constant$keyword$959.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38175))?sablono.interpreter.attributes(attrs38175):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38175))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38175)], null))));
})(),(function (){var attrs38176 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$960,(function (){var G__38181 = self__.company;var G__38181__$1 = (((G__38181 == null))?null:cljs.core.constant$keyword$868.cljs$core$IFn$_invoke$arity$1(G__38181));var G__38181__$2 = (((G__38181__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__38181,G__38181__$1,this__9536__auto____$1,company_path,map__38170,map__38170__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$961.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__38181,G__38181__$1,this__9536__auto____$1,company_path,map__38170,map__38170__$1,opts,path_fn,link_fn))
,G__38181__$1));return G__38181__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38176))?sablono.interpreter.attributes(attrs38176):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38176))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38176)], null))));
})(),(function (){var attrs38177 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38177))?sablono.interpreter.attributes(attrs38177):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38177))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38177),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs38178 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$963.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38178))?sablono.interpreter.attributes(attrs38178):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38178))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38178)], null))));
})(),(function (){var attrs38179 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$963.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$963.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38179))?sablono.interpreter.attributes(attrs38179):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38179))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38179)], null))));
})(),(function (){var attrs38180 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$964.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$964.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38180))?sablono.interpreter.attributes(attrs38180):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38180))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38180),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__38170,map__38170__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__38170,map__38170__$1,opts,path_fn,link_fn){
return (function (_38173){var self__ = this;
var _38173__$1 = this;return self__.meta38172;
});})(company_path,map__38170,map__38170__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__38170,map__38170__$1,opts,path_fn,link_fn){
return (function (_38173,meta38172__$1){var self__ = this;
var _38173__$1 = this;return (new clustermap.components.full_report.company_list.t38171(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__38170,self__.p__38157,self__.owner,self__.company,self__.portfolio_company,meta38172__$1));
});})(company_path,map__38170,map__38170__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t38171 = ((function (company_path,map__38170,map__38170__$1,opts,path_fn,link_fn){
return (function __GT_t38171(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38170__$2,p__38157__$1,owner__$1,company__$1,portfolio_company__$1,meta38172){return (new clustermap.components.full_report.company_list.t38171(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38170__$2,p__38157__$1,owner__$1,company__$1,portfolio_company__$1,meta38172));
});})(company_path,map__38170,map__38170__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t38171(company_path,link_fn,path_fn,opts,map__38170__$1,p__38157,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$965);if(typeof clustermap.components.full_report.company_list.t38202 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t38202 = (function (comm,opts,owner,companies,company_list,meta38203){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta38203 = meta38203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t38202.cljs$lang$type = true;
clustermap.components.full_report.company_list.t38202.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t38202";
clustermap.components.full_report.company_list.t38202.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t38202");
});})(comm))
;
clustermap.components.full_report.company_list.t38202.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t38202.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;var attrs38205 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$966);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38205))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$885,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs38205], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38205))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38206 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$966,"Investor-backed company",cljs.core.constant$keyword$903);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38206))?sablono.interpreter.attributes(attrs38206):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38206))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38206)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs38211 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$966,"Revenue",cljs.core.constant$keyword$864);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38211))?sablono.interpreter.attributes(attrs38211):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38211))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38211)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$966,"Rev. change",cljs.core.constant$keyword$963))),(function (){var attrs38212 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$966,"Employees",cljs.core.constant$keyword$964);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38212))?sablono.interpreter.attributes(attrs38212):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38212))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38212)], null))));
})())),(function (){var attrs38213 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$945,cljs.core.constant$keyword$968,cljs.core.constant$keyword$948,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38213))?sablono.interpreter.attributes(attrs38213):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38213))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38213)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$966))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38205),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38214 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$966,"Investor-backed company",cljs.core.constant$keyword$903);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38214))?sablono.interpreter.attributes(attrs38214):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38214))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38214)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs38219 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$966,"Revenue",cljs.core.constant$keyword$864);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38219))?sablono.interpreter.attributes(attrs38219):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38219))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38219)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$966,"Rev. change",cljs.core.constant$keyword$963))),(function (){var attrs38220 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$966,"Employees",cljs.core.constant$keyword$964);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38220))?sablono.interpreter.attributes(attrs38220):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38220))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38220)], null))));
})())),(function (){var attrs38221 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$945,cljs.core.constant$keyword$968,cljs.core.constant$keyword$948,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38221))?sablono.interpreter.attributes(attrs38221):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38221))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38221)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$966))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t38202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_38204){var self__ = this;
var _38204__$1 = this;return self__.meta38203;
});})(comm))
;
clustermap.components.full_report.company_list.t38202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_38204,meta38203__$1){var self__ = this;
var _38204__$1 = this;return (new clustermap.components.full_report.company_list.t38202(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta38203__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t38202 = ((function (comm){
return (function __GT_t38202(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta38203){return (new clustermap.components.full_report.company_list.t38202(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta38203));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t38202(comm,opts,owner,companies,company_list,null));
});
