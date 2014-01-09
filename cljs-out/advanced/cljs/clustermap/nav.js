// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('jayq.core');
clustermap.nav.toggle_nav_search = (function toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$195,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.clear_search = (function clear_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search button"),cljs.core.constant$keyword$195,(function (e){var search_input = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search input");return domina.set_value_BANG_(search_input,"");
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
clustermap.nav.switch_view = (function switch_view(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .map > a, #nav .lists > a"),cljs.core.constant$keyword$195,(function (e){var target = domina.events.target(e);var li = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");var ul = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(li,"..");var active_li = domina.css.sel.cljs$core$IFn$_invoke$arity$2(ul,"> .active");var body = domina.css.sel.cljs$core$IFn$_invoke$arity$1("body");domina.events.prevent_default(e);
domina.remove_class_BANG_(active_li,"active");
domina.add_class_BANG_(li,"active");
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19850){var vec__19851 = p__19850;var li_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19851,0,null);var body_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19851,1,null);if(cljs.core.truth_(domina.has_class_QMARK_(li,li_class)))
{return domina.add_class_BANG_(body,body_class);
} else
{return domina.remove_class_BANG_(body,body_class);
}
}),clustermap.nav.body_view_classes));
}));
});
clustermap.nav.map_report = (function map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$195,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
} else
{return null;
}
}
}));
});
clustermap.nav.init = (function init(){clustermap.nav.toggle_nav_search();
clustermap.nav.switch_view();
clustermap.nav.clear_search();
return clustermap.nav.map_report();
});
