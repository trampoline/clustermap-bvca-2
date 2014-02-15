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
var seq__33248_33254 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33249_33255 = null;var count__33250_33256 = 0;var i__33251_33257 = 0;while(true){
if((i__33251_33257 < count__33250_33256))
{var vec__33252_33258 = cljs.core._nth.call(null,chunk__33249_33255,i__33251_33257);var v_33259 = cljs.core.nth.call(null,vec__33252_33258,0,null);var body_class_33260 = cljs.core.nth.call(null,vec__33252_33258,1,null);if(cljs.core._EQ_.call(null,v_33259,view))
{domina.add_class_BANG_.call(null,body,body_class_33260);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33260);
}
{
var G__33261 = seq__33248_33254;
var G__33262 = chunk__33249_33255;
var G__33263 = count__33250_33256;
var G__33264 = (i__33251_33257 + 1);
seq__33248_33254 = G__33261;
chunk__33249_33255 = G__33262;
count__33250_33256 = G__33263;
i__33251_33257 = G__33264;
continue;
}
} else
{var temp__4092__auto___33265 = cljs.core.seq.call(null,seq__33248_33254);if(temp__4092__auto___33265)
{var seq__33248_33266__$1 = temp__4092__auto___33265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33248_33266__$1))
{var c__4148__auto___33267 = cljs.core.chunk_first.call(null,seq__33248_33266__$1);{
var G__33268 = cljs.core.chunk_rest.call(null,seq__33248_33266__$1);
var G__33269 = c__4148__auto___33267;
var G__33270 = cljs.core.count.call(null,c__4148__auto___33267);
var G__33271 = 0;
seq__33248_33254 = G__33268;
chunk__33249_33255 = G__33269;
count__33250_33256 = G__33270;
i__33251_33257 = G__33271;
continue;
}
} else
{var vec__33253_33272 = cljs.core.first.call(null,seq__33248_33266__$1);var v_33273 = cljs.core.nth.call(null,vec__33253_33272,0,null);var body_class_33274 = cljs.core.nth.call(null,vec__33253_33272,1,null);if(cljs.core._EQ_.call(null,v_33273,view))
{domina.add_class_BANG_.call(null,body,body_class_33274);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33274);
}
{
var G__33275 = cljs.core.next.call(null,seq__33248_33266__$1);
var G__33276 = null;
var G__33277 = 0;
var G__33278 = 0;
seq__33248_33254 = G__33275;
chunk__33249_33255 = G__33276;
count__33250_33256 = G__33277;
i__33251_33257 = G__33278;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33285 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33286 = null;var count__33287 = 0;var i__33288 = 0;while(true){
if((i__33288 < count__33287))
{var vec__33289 = cljs.core._nth.call(null,chunk__33286,i__33288);var v = cljs.core.nth.call(null,vec__33289,0,null);var _ = cljs.core.nth.call(null,vec__33289,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33285,chunk__33286,count__33287,i__33288,vec__33289,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33285,chunk__33286,count__33287,i__33288,vec__33289,v,_))
);
{
var G__33291 = seq__33285;
var G__33292 = chunk__33286;
var G__33293 = count__33287;
var G__33294 = (i__33288 + 1);
seq__33285 = G__33291;
chunk__33286 = G__33292;
count__33287 = G__33293;
i__33288 = G__33294;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33285);if(temp__4092__auto__)
{var seq__33285__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33285__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33285__$1);{
var G__33295 = cljs.core.chunk_rest.call(null,seq__33285__$1);
var G__33296 = c__4148__auto__;
var G__33297 = cljs.core.count.call(null,c__4148__auto__);
var G__33298 = 0;
seq__33285 = G__33295;
chunk__33286 = G__33296;
count__33287 = G__33297;
i__33288 = G__33298;
continue;
}
} else
{var vec__33290 = cljs.core.first.call(null,seq__33285__$1);var v = cljs.core.nth.call(null,vec__33290,0,null);var _ = cljs.core.nth.call(null,vec__33290,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33285,chunk__33286,count__33287,i__33288,vec__33290,v,_,seq__33285__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33285,chunk__33286,count__33287,i__33288,vec__33290,v,_,seq__33285__$1,temp__4092__auto__))
);
{
var G__33299 = cljs.core.next.call(null,seq__33285__$1);
var G__33300 = null;
var G__33301 = 0;
var G__33302 = 0;
seq__33285 = G__33299;
chunk__33286 = G__33300;
count__33287 = G__33301;
i__33288 = G__33302;
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
