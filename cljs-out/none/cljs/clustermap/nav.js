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
clustermap.nav.toggle_nav_search = (function toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.clear_search = (function clear_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#search button"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var search_input = domina.css.sel.call(null,"#search input");return domina.set_value_BANG_.call(null,search_input,"");
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
clustermap.nav.switch_view = (function switch_view(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .map > a, #nav .lists > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var li = domina.xpath.xpath.call(null,target,"..");var ul = domina.xpath.xpath.call(null,li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");var body = domina.css.sel.call(null,"body");domina.events.prevent_default.call(null,e);
domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,li,"active");
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__11239){var vec__11240 = p__11239;var li_class = cljs.core.nth.call(null,vec__11240,0,null);var body_class = cljs.core.nth.call(null,vec__11240,1,null);if(cljs.core.truth_(domina.has_class_QMARK_.call(null,li,li_class)))
{return domina.add_class_BANG_.call(null,body,body_class);
} else
{return domina.remove_class_BANG_.call(null,body,body_class);
}
}),clustermap.nav.body_view_classes));
}));
});
clustermap.nav.map_report = (function map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
} else
{return null;
}
}
}));
});
clustermap.nav.init = (function init(){clustermap.nav.toggle_nav_search.call(null);
clustermap.nav.switch_view.call(null);
clustermap.nav.clear_search.call(null);
return clustermap.nav.map_report.call(null);
});

//# sourceMappingURL=nav.js.map