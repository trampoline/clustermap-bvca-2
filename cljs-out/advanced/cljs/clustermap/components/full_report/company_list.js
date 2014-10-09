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
{var attrs39788 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs39788))?sablono.interpreter.attributes(attrs39788):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39788))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39788),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__39797){var map__39810 = p__39797;var map__39810__$1 = ((cljs.core.seq_QMARK_(map__39810))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39810):map__39810);var opts = map__39810__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39810__$1,cljs.core.constant$keyword$1004);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39810__$1,cljs.core.constant$keyword$1005);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1006,company) : path_fn.call(null,cljs.core.constant$keyword$1006,company));if(typeof clustermap.components.full_report.company_list.t39811 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t39811 = (function (company_path,link_fn,path_fn,opts,map__39810,p__39797,owner,company,portfolio_company,meta39812){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__39810 = map__39810;
this.p__39797 = p__39797;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta39812 = meta39812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t39811.cljs$lang$type = true;
clustermap.components.full_report.company_list.t39811.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t39811";
clustermap.components.full_report.company_list.t39811.cljs$lang$ctorPrWriter = ((function (company_path,map__39810,map__39810__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t39811");
});})(company_path,map__39810,map__39810__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t39811.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t39811.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__39810,map__39810__$1,opts,path_fn,link_fn){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs39814 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1006,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$1006,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39814))?sablono.interpreter.attributes(attrs39814):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39814))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39814)], null))));
})(),(function (){var attrs39815 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1007,cljs.core.constant$keyword$1008.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39815))?sablono.interpreter.attributes(attrs39815):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39815))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39815)], null))));
})(),(function (){var attrs39816 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1009,(function (){var G__39821 = self__.company;var G__39821__$1 = (((G__39821 == null))?null:cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(G__39821));var G__39821__$2 = (((G__39821__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__39821,G__39821__$1,this__9504__auto____$1,company_path,map__39810,map__39810__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$1010.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__39821,G__39821__$1,this__9504__auto____$1,company_path,map__39810,map__39810__$1,opts,path_fn,link_fn))
,G__39821__$1));return G__39821__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39816))?sablono.interpreter.attributes(attrs39816):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39816))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39816)], null))));
})(),(function (){var attrs39817 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1011.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1000,(2),cljs.core.constant$keyword$863,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1011.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1000,(2),cljs.core.constant$keyword$863,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39817))?sablono.interpreter.attributes(attrs39817):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39817))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1012.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39817),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1012.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs39818 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$1013.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39818))?sablono.interpreter.attributes(attrs39818):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39818))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39818)], null))));
})(),(function (){var attrs39819 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1013.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1000,(2),cljs.core.constant$keyword$863,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1013.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1000,(2),cljs.core.constant$keyword$863,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39819))?sablono.interpreter.attributes(attrs39819):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39819))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39819)], null))));
})(),(function (){var attrs39820 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1014.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1002,(0),cljs.core.constant$keyword$863,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$1014.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1002,(0),cljs.core.constant$keyword$863,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs39820))?sablono.interpreter.attributes(attrs39820):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39820))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1012.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39820),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1012.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__39810,map__39810__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t39811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__39810,map__39810__$1,opts,path_fn,link_fn){
return (function (_39813){var self__ = this;
var _39813__$1 = this;return self__.meta39812;
});})(company_path,map__39810,map__39810__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t39811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__39810,map__39810__$1,opts,path_fn,link_fn){
return (function (_39813,meta39812__$1){var self__ = this;
var _39813__$1 = this;return (new clustermap.components.full_report.company_list.t39811(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__39810,self__.p__39797,self__.owner,self__.company,self__.portfolio_company,meta39812__$1));
});})(company_path,map__39810,map__39810__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t39811 = ((function (company_path,map__39810,map__39810__$1,opts,path_fn,link_fn){
return (function __GT_t39811(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__39810__$2,p__39797__$1,owner__$1,company__$1,portfolio_company__$1,meta39812){return (new clustermap.components.full_report.company_list.t39811(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__39810__$2,p__39797__$1,owner__$1,company__$1,portfolio_company__$1,meta39812));
});})(company_path,map__39810,map__39810__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t39811(company_path,link_fn,path_fn,opts,map__39810__$1,p__39797,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1015);if(typeof clustermap.components.full_report.company_list.t39842 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t39842 = (function (comm,opts,owner,companies,company_list,meta39843){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta39843 = meta39843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t39842.cljs$lang$type = true;
clustermap.components.full_report.company_list.t39842.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t39842";
clustermap.components.full_report.company_list.t39842.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t39842");
});})(comm))
;
clustermap.components.full_report.company_list.t39842.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t39842.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs39845 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1016);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs39845))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs39845], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39845))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs39846 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1016,"Investor-backed company",cljs.core.constant$keyword$933);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39846))?sablono.interpreter.attributes(attrs39846):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39846))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39846)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs39851 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1016,"Revenue",cljs.core.constant$keyword$1011);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39851))?sablono.interpreter.attributes(attrs39851):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39851))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39851)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1016,"Rev. change",cljs.core.constant$keyword$1013))),(function (){var attrs39852 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1016,"Employees",cljs.core.constant$keyword$1014);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39852))?sablono.interpreter.attributes(attrs39852):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39852))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39852)], null))));
})())),(function (){var attrs39853 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1017.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$966,cljs.core.constant$keyword$1018,cljs.core.constant$keyword$969,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs39853))?sablono.interpreter.attributes(attrs39853):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39853))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39853)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1016))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39845),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs39854 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1016,"Investor-backed company",cljs.core.constant$keyword$933);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39854))?sablono.interpreter.attributes(attrs39854):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39854))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39854)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs39859 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1016,"Revenue",cljs.core.constant$keyword$1011);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39859))?sablono.interpreter.attributes(attrs39859):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39859))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39859)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1016,"Rev. change",cljs.core.constant$keyword$1013))),(function (){var attrs39860 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1016,"Employees",cljs.core.constant$keyword$1014);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs39860))?sablono.interpreter.attributes(attrs39860):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39860))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39860)], null))));
})())),(function (){var attrs39861 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1017.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$966,cljs.core.constant$keyword$1018,cljs.core.constant$keyword$969,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs39861))?sablono.interpreter.attributes(attrs39861):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39861))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39861)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1016))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t39842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_39844){var self__ = this;
var _39844__$1 = this;return self__.meta39843;
});})(comm))
;
clustermap.components.full_report.company_list.t39842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_39844,meta39843__$1){var self__ = this;
var _39844__$1 = this;return (new clustermap.components.full_report.company_list.t39842(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta39843__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t39842 = ((function (comm){
return (function __GT_t39842(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta39843){return (new clustermap.components.full_report.company_list.t39842(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta39843));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t39842(comm,opts,owner,companies,company_list,null));
});
