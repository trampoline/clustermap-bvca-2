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
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__33236_33242 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33237_33243 = null;var count__33238_33244 = 0;var i__33239_33245 = 0;while(true){
if((i__33239_33245 < count__33238_33244))
{var vec__33240_33246 = cljs.core._nth.call(null,chunk__33237_33243,i__33239_33245);var v_33247 = cljs.core.nth.call(null,vec__33240_33246,0,null);var body_class_33248 = cljs.core.nth.call(null,vec__33240_33246,1,null);if(cljs.core._EQ_.call(null,v_33247,view))
{domina.add_class_BANG_.call(null,body,body_class_33248);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33248);
}
{
var G__33249 = seq__33236_33242;
var G__33250 = chunk__33237_33243;
var G__33251 = count__33238_33244;
var G__33252 = (i__33239_33245 + 1);
seq__33236_33242 = G__33249;
chunk__33237_33243 = G__33250;
count__33238_33244 = G__33251;
i__33239_33245 = G__33252;
continue;
}
} else
{var temp__4092__auto___33253 = cljs.core.seq.call(null,seq__33236_33242);if(temp__4092__auto___33253)
{var seq__33236_33254__$1 = temp__4092__auto___33253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33236_33254__$1))
{var c__4148__auto___33255 = cljs.core.chunk_first.call(null,seq__33236_33254__$1);{
var G__33256 = cljs.core.chunk_rest.call(null,seq__33236_33254__$1);
var G__33257 = c__4148__auto___33255;
var G__33258 = cljs.core.count.call(null,c__4148__auto___33255);
var G__33259 = 0;
seq__33236_33242 = G__33256;
chunk__33237_33243 = G__33257;
count__33238_33244 = G__33258;
i__33239_33245 = G__33259;
continue;
}
} else
{var vec__33241_33260 = cljs.core.first.call(null,seq__33236_33254__$1);var v_33261 = cljs.core.nth.call(null,vec__33241_33260,0,null);var body_class_33262 = cljs.core.nth.call(null,vec__33241_33260,1,null);if(cljs.core._EQ_.call(null,v_33261,view))
{domina.add_class_BANG_.call(null,body,body_class_33262);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33262);
}
{
var G__33263 = cljs.core.next.call(null,seq__33236_33254__$1);
var G__33264 = null;
var G__33265 = 0;
var G__33266 = 0;
seq__33236_33242 = G__33263;
chunk__33237_33243 = G__33264;
count__33238_33244 = G__33265;
i__33239_33245 = G__33266;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33273 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33274 = null;var count__33275 = 0;var i__33276 = 0;while(true){
if((i__33276 < count__33275))
{var vec__33277 = cljs.core._nth.call(null,chunk__33274,i__33276);var v = cljs.core.nth.call(null,vec__33277,0,null);var _ = cljs.core.nth.call(null,vec__33277,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33273,chunk__33274,count__33275,i__33276,vec__33277,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33273,chunk__33274,count__33275,i__33276,vec__33277,v,_))
);
{
var G__33279 = seq__33273;
var G__33280 = chunk__33274;
var G__33281 = count__33275;
var G__33282 = (i__33276 + 1);
seq__33273 = G__33279;
chunk__33274 = G__33280;
count__33275 = G__33281;
i__33276 = G__33282;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33273);if(temp__4092__auto__)
{var seq__33273__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33273__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33273__$1);{
var G__33283 = cljs.core.chunk_rest.call(null,seq__33273__$1);
var G__33284 = c__4148__auto__;
var G__33285 = cljs.core.count.call(null,c__4148__auto__);
var G__33286 = 0;
seq__33273 = G__33283;
chunk__33274 = G__33284;
count__33275 = G__33285;
i__33276 = G__33286;
continue;
}
} else
{var vec__33278 = cljs.core.first.call(null,seq__33273__$1);var v = cljs.core.nth.call(null,vec__33278,0,null);var _ = cljs.core.nth.call(null,vec__33278,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33273,chunk__33274,count__33275,i__33276,vec__33278,v,_,seq__33273__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33273,chunk__33274,count__33275,i__33276,vec__33278,v,_,seq__33273__$1,temp__4092__auto__))
);
{
var G__33287 = cljs.core.next.call(null,seq__33273__$1);
var G__33288 = null;
var G__33289 = 0;
var G__33290 = 0;
seq__33273 = G__33287;
chunk__33274 = G__33288;
count__33275 = G__33289;
i__33276 = G__33290;
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
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});
