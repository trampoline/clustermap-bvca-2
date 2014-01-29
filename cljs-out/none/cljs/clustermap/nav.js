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
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
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
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
clustermap.nav.select_view = (function select_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__12007_12013 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12008_12014 = null;var count__12009_12015 = 0;var i__12010_12016 = 0;while(true){
if((i__12010_12016 < count__12009_12015))
{var vec__12011_12017 = cljs.core._nth.call(null,chunk__12008_12014,i__12010_12016);var v_12018 = cljs.core.nth.call(null,vec__12011_12017,0,null);var body_class_12019 = cljs.core.nth.call(null,vec__12011_12017,1,null);if(cljs.core._EQ_.call(null,v_12018,view))
{domina.add_class_BANG_.call(null,body,body_class_12019);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12019);
}
{
var G__12020 = seq__12007_12013;
var G__12021 = chunk__12008_12014;
var G__12022 = count__12009_12015;
var G__12023 = (i__12010_12016 + 1);
seq__12007_12013 = G__12020;
chunk__12008_12014 = G__12021;
count__12009_12015 = G__12022;
i__12010_12016 = G__12023;
continue;
}
} else
{var temp__4092__auto___12024 = cljs.core.seq.call(null,seq__12007_12013);if(temp__4092__auto___12024)
{var seq__12007_12025__$1 = temp__4092__auto___12024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12007_12025__$1))
{var c__4148__auto___12026 = cljs.core.chunk_first.call(null,seq__12007_12025__$1);{
var G__12027 = cljs.core.chunk_rest.call(null,seq__12007_12025__$1);
var G__12028 = c__4148__auto___12026;
var G__12029 = cljs.core.count.call(null,c__4148__auto___12026);
var G__12030 = 0;
seq__12007_12013 = G__12027;
chunk__12008_12014 = G__12028;
count__12009_12015 = G__12029;
i__12010_12016 = G__12030;
continue;
}
} else
{var vec__12012_12031 = cljs.core.first.call(null,seq__12007_12025__$1);var v_12032 = cljs.core.nth.call(null,vec__12012_12031,0,null);var body_class_12033 = cljs.core.nth.call(null,vec__12012_12031,1,null);if(cljs.core._EQ_.call(null,v_12032,view))
{domina.add_class_BANG_.call(null,body,body_class_12033);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12033);
}
{
var G__12034 = cljs.core.next.call(null,seq__12007_12025__$1);
var G__12035 = null;
var G__12036 = 0;
var G__12037 = 0;
seq__12007_12013 = G__12034;
chunk__12008_12014 = G__12035;
count__12009_12015 = G__12036;
i__12010_12016 = G__12037;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,window).trigger("resize");
});
clustermap.nav.handle_view_switches = (function handle_view_switches(){var seq__12044 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12045 = null;var count__12046 = 0;var i__12047 = 0;while(true){
if((i__12047 < count__12046))
{var vec__12048 = cljs.core._nth.call(null,chunk__12045,i__12047);var v = cljs.core.nth.call(null,vec__12048,0,null);var _ = cljs.core.nth.call(null,vec__12048,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12044,chunk__12045,count__12046,i__12047,vec__12048,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return clustermap.nav.select_view.call(null,v);
});})(seq__12044,chunk__12045,count__12046,i__12047,vec__12048,v,_))
);
{
var G__12050 = seq__12044;
var G__12051 = chunk__12045;
var G__12052 = count__12046;
var G__12053 = (i__12047 + 1);
seq__12044 = G__12050;
chunk__12045 = G__12051;
count__12046 = G__12052;
i__12047 = G__12053;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12044);if(temp__4092__auto__)
{var seq__12044__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12044__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12044__$1);{
var G__12054 = cljs.core.chunk_rest.call(null,seq__12044__$1);
var G__12055 = c__4148__auto__;
var G__12056 = cljs.core.count.call(null,c__4148__auto__);
var G__12057 = 0;
seq__12044 = G__12054;
chunk__12045 = G__12055;
count__12046 = G__12056;
i__12047 = G__12057;
continue;
}
} else
{var vec__12049 = cljs.core.first.call(null,seq__12044__$1);var v = cljs.core.nth.call(null,vec__12049,0,null);var _ = cljs.core.nth.call(null,vec__12049,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12044,chunk__12045,count__12046,i__12047,vec__12049,v,_,seq__12044__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return clustermap.nav.select_view.call(null,v);
});})(seq__12044,chunk__12045,count__12046,i__12047,vec__12049,v,_,seq__12044__$1,temp__4092__auto__))
);
{
var G__12058 = cljs.core.next.call(null,seq__12044__$1);
var G__12059 = null;
var G__12060 = 0;
var G__12061 = 0;
seq__12044 = G__12058;
chunk__12045 = G__12059;
count__12046 = G__12060;
i__12047 = G__12061;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.nav.init = (function init(){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null);
});

//# sourceMappingURL=nav.js.map