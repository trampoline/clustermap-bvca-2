// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs33781 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs33781))
{return React.DOM.div(sablono.interpreter.attributes(attrs33781),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs33781),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__33790){var map__33803 = p__33790;var map__33803__$1 = ((cljs.core.seq_QMARK_(map__33803))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33803):map__33803);var opts = map__33803__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33803__$1,cljs.core.constant$keyword$634);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33803__$1,cljs.core.constant$keyword$652);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,company) : path_fn.call(null,cljs.core.constant$keyword$631,company));if(typeof clustermap.components.full_report.company_list.t33804 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33804 = (function (company_path,link_fn,path_fn,opts,map__33803,p__33790,owner,company,portfolio_company,meta33805){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__33803 = map__33803;
this.p__33790 = p__33790;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta33805 = meta33805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33804.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33804.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33804";
clustermap.components.full_report.company_list.t33804.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t33804");
});
clustermap.components.full_report.company_list.t33804.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33804.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs33807 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$631,self__.company));if(cljs.core.map_QMARK_(attrs33807))
{return React.DOM.td(sablono.interpreter.attributes(attrs33807),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33807));
}
})(),(function (){var attrs33808 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$632,cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs33808))
{return React.DOM.td(sablono.interpreter.attributes(attrs33808),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33808));
}
})(),(function (){var attrs33809 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$633,(function (){var G__33814 = self__.company;var G__33814__$1 = (((G__33814 == null))?null:cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(G__33814));var G__33814__$2 = (((G__33814__$1 == null))?null:cljs.core.filter(((function (G__33814,G__33814__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__33814,G__33814__$1))
,G__33814__$1));return G__33814__$2;
})());if(cljs.core.map_QMARK_(attrs33809))
{return React.DOM.td(sablono.interpreter.attributes(attrs33809),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33809));
}
})(),(function (){var attrs33810 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$572.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$572.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs33810))
{return React.DOM.td(sablono.interpreter.attributes(attrs33810),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33810),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs33811 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$691.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs33811))
{return React.DOM.td(sablono.interpreter.attributes(attrs33811),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33811));
}
})(),(function (){var attrs33812 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$691.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$691.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,2,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs33812))
{return React.DOM.td(sablono.interpreter.attributes(attrs33812),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33812));
}
})(),(function (){var attrs33813 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$692.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$692.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$629,0,cljs.core.constant$keyword$543,"-"));if(cljs.core.map_QMARK_(attrs33813))
{return React.DOM.td(sablono.interpreter.attributes(attrs33813),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs33813),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t33804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33806){var self__ = this;
var _33806__$1 = this;return self__.meta33805;
});
clustermap.components.full_report.company_list.t33804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33806,meta33805__$1){var self__ = this;
var _33806__$1 = this;return (new clustermap.components.full_report.company_list.t33804(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__33803,self__.p__33790,self__.owner,self__.company,self__.portfolio_company,meta33805__$1));
});
clustermap.components.full_report.company_list.__GT_t33804 = (function __GT_t33804(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33803__$2,p__33790__$1,owner__$1,company__$1,portfolio_company__$1,meta33805){return (new clustermap.components.full_report.company_list.t33804(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33803__$2,p__33790__$1,owner__$1,company__$1,portfolio_company__$1,meta33805));
});
}
return (new clustermap.components.full_report.company_list.t33804(company_path,link_fn,path_fn,opts,map__33803__$1,p__33790,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$635);if(typeof clustermap.components.full_report.company_list.t33835 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33835 = (function (comm,opts,owner,companies,company_list,meta33836){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta33836 = meta33836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33835.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33835.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33835";
clustermap.components.full_report.company_list.t33835.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t33835");
});
clustermap.components.full_report.company_list.t33835.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33835.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs33838 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$693);if(cljs.core.map_QMARK_(attrs33838))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$576,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs33838], 0))),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33839 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Investor-backed company",cljs.core.constant$keyword$596);if(cljs.core.map_QMARK_(attrs33839))
{return React.DOM.th(sablono.interpreter.attributes(attrs33839),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33839));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs33844 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Revenue",cljs.core.constant$keyword$572);if(cljs.core.map_QMARK_(attrs33844))
{return React.DOM.th(sablono.interpreter.attributes(attrs33844),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33844));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Rev. change",cljs.core.constant$keyword$691))),(function (){var attrs33845 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Employees",cljs.core.constant$keyword$692);if(cljs.core.map_QMARK_(attrs33845))
{return React.DOM.th(sablono.interpreter.attributes(attrs33845),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33845));
}
})())),(function (){var attrs33846 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$663.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,cljs.core.constant$keyword$694,cljs.core.constant$keyword$622,self__.opts], null));if(cljs.core.map_QMARK_(attrs33846))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs33846),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs33846));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$693)));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret(attrs33838),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33847 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Investor-backed company",cljs.core.constant$keyword$596);if(cljs.core.map_QMARK_(attrs33847))
{return React.DOM.th(sablono.interpreter.attributes(attrs33847),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33847));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs33852 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Revenue",cljs.core.constant$keyword$572);if(cljs.core.map_QMARK_(attrs33852))
{return React.DOM.th(sablono.interpreter.attributes(attrs33852),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33852));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Rev. change",cljs.core.constant$keyword$691))),(function (){var attrs33853 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Employees",cljs.core.constant$keyword$692);if(cljs.core.map_QMARK_(attrs33853))
{return React.DOM.th(sablono.interpreter.attributes(attrs33853),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs33853));
}
})())),(function (){var attrs33854 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$663.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,cljs.core.constant$keyword$694,cljs.core.constant$keyword$622,self__.opts], null));if(cljs.core.map_QMARK_(attrs33854))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs33854),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs33854));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$693)));
}
});
clustermap.components.full_report.company_list.t33835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33837){var self__ = this;
var _33837__$1 = this;return self__.meta33836;
});
clustermap.components.full_report.company_list.t33835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33837,meta33836__$1){var self__ = this;
var _33837__$1 = this;return (new clustermap.components.full_report.company_list.t33835(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta33836__$1));
});
clustermap.components.full_report.company_list.__GT_t33835 = (function __GT_t33835(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33836){return (new clustermap.components.full_report.company_list.t33835(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33836));
});
}
return (new clustermap.components.full_report.company_list.t33835(comm,opts,owner,companies,company_list,null));
});
