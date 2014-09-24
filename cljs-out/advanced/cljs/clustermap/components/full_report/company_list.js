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
{var attrs38208 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38208))?sablono.interpreter.attributes(attrs38208):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38208))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38208),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__38217){var map__38230 = p__38217;var map__38230__$1 = ((cljs.core.seq_QMARK_(map__38230))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38230):map__38230);var opts = map__38230__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38230__$1,cljs.core.constant$keyword$964);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38230__$1,cljs.core.constant$keyword$965);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$966,company) : path_fn.call(null,cljs.core.constant$keyword$966,company));if(typeof clustermap.components.full_report.company_list.t38231 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t38231 = (function (company_path,link_fn,path_fn,opts,map__38230,p__38217,owner,company,portfolio_company,meta38232){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__38230 = map__38230;
this.p__38217 = p__38217;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta38232 = meta38232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t38231.cljs$lang$type = true;
clustermap.components.full_report.company_list.t38231.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t38231";
clustermap.components.full_report.company_list.t38231.cljs$lang$ctorPrWriter = ((function (company_path,map__38230,map__38230__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t38231");
});})(company_path,map__38230,map__38230__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38231.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t38231.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__38230,map__38230__$1,opts,path_fn,link_fn){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs38234 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$966,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$966,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38234))?sablono.interpreter.attributes(attrs38234):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38234))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38234)], null))));
})(),(function (){var attrs38235 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$967,cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38235))?sablono.interpreter.attributes(attrs38235):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38235))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38235)], null))));
})(),(function (){var attrs38236 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$969,(function (){var G__38241 = self__.company;var G__38241__$1 = (((G__38241 == null))?null:cljs.core.constant$keyword$877.cljs$core$IFn$_invoke$arity$1(G__38241));var G__38241__$2 = (((G__38241__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__38241,G__38241__$1,this__9536__auto____$1,company_path,map__38230,map__38230__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$970.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__38241,G__38241__$1,this__9536__auto____$1,company_path,map__38230,map__38230__$1,opts,path_fn,link_fn))
,G__38241__$1));return G__38241__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38236))?sablono.interpreter.attributes(attrs38236):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38236))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38236)], null))));
})(),(function (){var attrs38237 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$873.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$890,(2),cljs.core.constant$keyword$835,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$873.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$890,(2),cljs.core.constant$keyword$835,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38237))?sablono.interpreter.attributes(attrs38237):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38237))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38237),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs38238 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$972.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38238))?sablono.interpreter.attributes(attrs38238):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38238))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38238)], null))));
})(),(function (){var attrs38239 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$972.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$890,(2),cljs.core.constant$keyword$835,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$972.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$890,(2),cljs.core.constant$keyword$835,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38239))?sablono.interpreter.attributes(attrs38239):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38239))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38239)], null))));
})(),(function (){var attrs38240 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$973.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$892,(0),cljs.core.constant$keyword$835,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$973.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$892,(0),cljs.core.constant$keyword$835,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38240))?sablono.interpreter.attributes(attrs38240):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38240))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38240),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__38230,map__38230__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__38230,map__38230__$1,opts,path_fn,link_fn){
return (function (_38233){var self__ = this;
var _38233__$1 = this;return self__.meta38232;
});})(company_path,map__38230,map__38230__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__38230,map__38230__$1,opts,path_fn,link_fn){
return (function (_38233,meta38232__$1){var self__ = this;
var _38233__$1 = this;return (new clustermap.components.full_report.company_list.t38231(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__38230,self__.p__38217,self__.owner,self__.company,self__.portfolio_company,meta38232__$1));
});})(company_path,map__38230,map__38230__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t38231 = ((function (company_path,map__38230,map__38230__$1,opts,path_fn,link_fn){
return (function __GT_t38231(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38230__$2,p__38217__$1,owner__$1,company__$1,portfolio_company__$1,meta38232){return (new clustermap.components.full_report.company_list.t38231(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38230__$2,p__38217__$1,owner__$1,company__$1,portfolio_company__$1,meta38232));
});})(company_path,map__38230,map__38230__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t38231(company_path,link_fn,path_fn,opts,map__38230__$1,p__38217,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$974);if(typeof clustermap.components.full_report.company_list.t38262 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t38262 = (function (comm,opts,owner,companies,company_list,meta38263){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta38263 = meta38263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t38262.cljs$lang$type = true;
clustermap.components.full_report.company_list.t38262.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t38262";
clustermap.components.full_report.company_list.t38262.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t38262");
});})(comm))
;
clustermap.components.full_report.company_list.t38262.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t38262.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;var attrs38265 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$975);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38265))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$894,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs38265], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38265))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38266 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$975,"Investor-backed company",cljs.core.constant$keyword$912);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38266))?sablono.interpreter.attributes(attrs38266):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38266))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38266)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs38271 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$975,"Revenue",cljs.core.constant$keyword$873);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38271))?sablono.interpreter.attributes(attrs38271):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38271))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38271)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$975,"Rev. change",cljs.core.constant$keyword$972))),(function (){var attrs38272 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$975,"Employees",cljs.core.constant$keyword$973);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38272))?sablono.interpreter.attributes(attrs38272):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38272))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38272)], null))));
})())),(function (){var attrs38273 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$954,cljs.core.constant$keyword$977,cljs.core.constant$keyword$957,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38273))?sablono.interpreter.attributes(attrs38273):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38273))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38273)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$975))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38265),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38274 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$975,"Investor-backed company",cljs.core.constant$keyword$912);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38274))?sablono.interpreter.attributes(attrs38274):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38274))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38274)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs38279 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$975,"Revenue",cljs.core.constant$keyword$873);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38279))?sablono.interpreter.attributes(attrs38279):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38279))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38279)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$975,"Rev. change",cljs.core.constant$keyword$972))),(function (){var attrs38280 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$975,"Employees",cljs.core.constant$keyword$973);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38280))?sablono.interpreter.attributes(attrs38280):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38280))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38280)], null))));
})())),(function (){var attrs38281 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$954,cljs.core.constant$keyword$977,cljs.core.constant$keyword$957,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38281))?sablono.interpreter.attributes(attrs38281):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38281))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38281)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$975))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t38262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_38264){var self__ = this;
var _38264__$1 = this;return self__.meta38263;
});})(comm))
;
clustermap.components.full_report.company_list.t38262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_38264,meta38263__$1){var self__ = this;
var _38264__$1 = this;return (new clustermap.components.full_report.company_list.t38262(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta38263__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t38262 = ((function (comm){
return (function __GT_t38262(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta38263){return (new clustermap.components.full_report.company_list.t38262(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta38263));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t38262(comm,opts,owner,companies,company_list,null));
});
