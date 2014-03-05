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
{var attrs34011 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs34011))
{return React.DOM.div(sablono.interpreter.attributes(attrs34011),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs34011),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__34020){var map__34035 = p__34020;var map__34035__$1 = ((cljs.core.seq_QMARK_(map__34035))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34035):map__34035);var opts = map__34035__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34035__$1,cljs.core.constant$keyword$632);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34035__$1,cljs.core.constant$keyword$649);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,company) : path_fn.call(null,cljs.core.constant$keyword$629,company));if(typeof clustermap.components.full_report.company_list.t34036 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34036 = (function (company_path,link_fn,path_fn,opts,map__34035,p__34020,owner,company,portfolio_company,meta34037){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__34035 = map__34035;
this.p__34020 = p__34020;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta34037 = meta34037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34036.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34036.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34036";
clustermap.components.full_report.company_list.t34036.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t34036");
});
clustermap.components.full_report.company_list.t34036.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34036.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs34039 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$629,self__.company));if(cljs.core.map_QMARK_(attrs34039))
{return React.DOM.td(sablono.interpreter.attributes(attrs34039),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34039));
}
})(),(function (){var attrs34040 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$630,cljs.core.constant$keyword$686.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs34040))
{return React.DOM.td(sablono.interpreter.attributes(attrs34040),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34040));
}
})(),(function (){var attrs34041 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$631,(function (){var G__34048 = self__.company;var G__34048__$1 = (((G__34048 == null))?null:cljs.core.constant$keyword$687.cljs$core$IFn$_invoke$arity$1(G__34048));var G__34048__$2 = (((G__34048__$1 == null))?null:cljs.core.filter(((function (G__34048,G__34048__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$688.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__34048,G__34048__$1))
,G__34048__$1));return G__34048__$2;
})());if(cljs.core.map_QMARK_(attrs34041))
{return React.DOM.td(sablono.interpreter.attributes(attrs34041),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34041));
}
})(),(function (){var attrs34042 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$570.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$570.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34042))
{return React.DOM.td(sablono.interpreter.attributes(attrs34042),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34042),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs34043 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs34043))
{return React.DOM.td(sablono.interpreter.attributes(attrs34043),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34043));
}
})(),(function (){var attrs34044 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$690.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$625,2,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34044))
{return React.DOM.td(sablono.interpreter.attributes(attrs34044),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34044));
}
})(),(function (){var attrs34045 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$691.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$691.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34045))
{return React.DOM.td(sablono.interpreter.attributes(attrs34045),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34045),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$689.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs34046 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$692.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs34046))
{return React.DOM.td(sablono.interpreter.attributes(attrs34046),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34046));
}
})(),(function (){var attrs34047 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$692.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$692.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$627,0,cljs.core.constant$keyword$541,"-"));if(cljs.core.map_QMARK_(attrs34047))
{return React.DOM.td(sablono.interpreter.attributes(attrs34047),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs34047));
}
})());
});
clustermap.components.full_report.company_list.t34036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34038){var self__ = this;
var _34038__$1 = this;return self__.meta34037;
});
clustermap.components.full_report.company_list.t34036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34038,meta34037__$1){var self__ = this;
var _34038__$1 = this;return (new clustermap.components.full_report.company_list.t34036(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__34035,self__.p__34020,self__.owner,self__.company,self__.portfolio_company,meta34037__$1));
});
clustermap.components.full_report.company_list.__GT_t34036 = (function __GT_t34036(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34035__$2,p__34020__$1,owner__$1,company__$1,portfolio_company__$1,meta34037){return (new clustermap.components.full_report.company_list.t34036(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__34035__$2,p__34020__$1,owner__$1,company__$1,portfolio_company__$1,meta34037));
});
}
return (new clustermap.components.full_report.company_list.t34036(company_path,link_fn,path_fn,opts,map__34035__$1,p__34020,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$633);if(typeof clustermap.components.full_report.company_list.t34069 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t34069 = (function (comm,opts,owner,companies,company_list,meta34070){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta34070 = meta34070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t34069.cljs$lang$type = true;
clustermap.components.full_report.company_list.t34069.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t34069";
clustermap.components.full_report.company_list.t34069.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t34069");
});
clustermap.components.full_report.company_list.t34069.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t34069.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs34072 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$693);if(cljs.core.map_QMARK_(attrs34072))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs34072], 0))),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34073 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Portfolio Company",cljs.core.constant$keyword$594);if(cljs.core.map_QMARK_(attrs34073))
{return React.DOM.th(sablono.interpreter.attributes(attrs34073),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34073));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34078 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Revenue",cljs.core.constant$keyword$570);if(cljs.core.map_QMARK_(attrs34078))
{return React.DOM.th(sablono.interpreter.attributes(attrs34078),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34078));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Rev. change",cljs.core.constant$keyword$690))),(function (){var attrs34079 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Employees",cljs.core.constant$keyword$691);if(cljs.core.map_QMARK_(attrs34079))
{return React.DOM.th(sablono.interpreter.attributes(attrs34079),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34079));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Emp. change",cljs.core.constant$keyword$692))))),(function (){var attrs34080 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$662.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,cljs.core.constant$keyword$650,cljs.core.constant$keyword$620,self__.opts], null));if(cljs.core.map_QMARK_(attrs34080))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs34080),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs34080));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$693)));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret(attrs34072),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs34081 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Portfolio Company",cljs.core.constant$keyword$594);if(cljs.core.map_QMARK_(attrs34081))
{return React.DOM.th(sablono.interpreter.attributes(attrs34081),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34081));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs34086 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Revenue",cljs.core.constant$keyword$570);if(cljs.core.map_QMARK_(attrs34086))
{return React.DOM.th(sablono.interpreter.attributes(attrs34086),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34086));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Rev. change",cljs.core.constant$keyword$690))),(function (){var attrs34087 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Employees",cljs.core.constant$keyword$691);if(cljs.core.map_QMARK_(attrs34087))
{return React.DOM.th(sablono.interpreter.attributes(attrs34087),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs34087));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$693,"Emp. change",cljs.core.constant$keyword$692))))),(function (){var attrs34088 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$662.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,cljs.core.constant$keyword$650,cljs.core.constant$keyword$620,self__.opts], null));if(cljs.core.map_QMARK_(attrs34088))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs34088),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs34088));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$693)));
}
});
clustermap.components.full_report.company_list.t34069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34071){var self__ = this;
var _34071__$1 = this;return self__.meta34070;
});
clustermap.components.full_report.company_list.t34069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34071,meta34070__$1){var self__ = this;
var _34071__$1 = this;return (new clustermap.components.full_report.company_list.t34069(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta34070__$1));
});
clustermap.components.full_report.company_list.__GT_t34069 = (function __GT_t34069(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34070){return (new clustermap.components.full_report.company_list.t34069(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta34070));
});
}
return (new clustermap.components.full_report.company_list.t34069(comm,opts,owner,companies,company_list,null));
});
