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
var seq__12492_12498 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12493_12499 = null;var count__12494_12500 = 0;var i__12495_12501 = 0;while(true){
if((i__12495_12501 < count__12494_12500))
{var vec__12496_12502 = cljs.core._nth.call(null,chunk__12493_12499,i__12495_12501);var v_12503 = cljs.core.nth.call(null,vec__12496_12502,0,null);var body_class_12504 = cljs.core.nth.call(null,vec__12496_12502,1,null);if(cljs.core._EQ_.call(null,v_12503,view))
{domina.add_class_BANG_.call(null,body,body_class_12504);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12504);
}
{
var G__12505 = seq__12492_12498;
var G__12506 = chunk__12493_12499;
var G__12507 = count__12494_12500;
var G__12508 = (i__12495_12501 + 1);
seq__12492_12498 = G__12505;
chunk__12493_12499 = G__12506;
count__12494_12500 = G__12507;
i__12495_12501 = G__12508;
continue;
}
} else
{var temp__4092__auto___12509 = cljs.core.seq.call(null,seq__12492_12498);if(temp__4092__auto___12509)
{var seq__12492_12510__$1 = temp__4092__auto___12509;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12492_12510__$1))
{var c__4148__auto___12511 = cljs.core.chunk_first.call(null,seq__12492_12510__$1);{
var G__12512 = cljs.core.chunk_rest.call(null,seq__12492_12510__$1);
var G__12513 = c__4148__auto___12511;
var G__12514 = cljs.core.count.call(null,c__4148__auto___12511);
var G__12515 = 0;
seq__12492_12498 = G__12512;
chunk__12493_12499 = G__12513;
count__12494_12500 = G__12514;
i__12495_12501 = G__12515;
continue;
}
} else
{var vec__12497_12516 = cljs.core.first.call(null,seq__12492_12510__$1);var v_12517 = cljs.core.nth.call(null,vec__12497_12516,0,null);var body_class_12518 = cljs.core.nth.call(null,vec__12497_12516,1,null);if(cljs.core._EQ_.call(null,v_12517,view))
{domina.add_class_BANG_.call(null,body,body_class_12518);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12518);
}
{
var G__12519 = cljs.core.next.call(null,seq__12492_12510__$1);
var G__12520 = null;
var G__12521 = 0;
var G__12522 = 0;
seq__12492_12498 = G__12519;
chunk__12493_12499 = G__12520;
count__12494_12500 = G__12521;
i__12495_12501 = G__12522;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12529 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12530 = null;var count__12531 = 0;var i__12532 = 0;while(true){
if((i__12532 < count__12531))
{var vec__12533 = cljs.core._nth.call(null,chunk__12530,i__12532);var v = cljs.core.nth.call(null,vec__12533,0,null);var _ = cljs.core.nth.call(null,vec__12533,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12529,chunk__12530,count__12531,i__12532,vec__12533,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12529,chunk__12530,count__12531,i__12532,vec__12533,v,_))
);
{
var G__12535 = seq__12529;
var G__12536 = chunk__12530;
var G__12537 = count__12531;
var G__12538 = (i__12532 + 1);
seq__12529 = G__12535;
chunk__12530 = G__12536;
count__12531 = G__12537;
i__12532 = G__12538;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12529);if(temp__4092__auto__)
{var seq__12529__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12529__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12529__$1);{
var G__12539 = cljs.core.chunk_rest.call(null,seq__12529__$1);
var G__12540 = c__4148__auto__;
var G__12541 = cljs.core.count.call(null,c__4148__auto__);
var G__12542 = 0;
seq__12529 = G__12539;
chunk__12530 = G__12540;
count__12531 = G__12541;
i__12532 = G__12542;
continue;
}
} else
{var vec__12534 = cljs.core.first.call(null,seq__12529__$1);var v = cljs.core.nth.call(null,vec__12534,0,null);var _ = cljs.core.nth.call(null,vec__12534,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12529,chunk__12530,count__12531,i__12532,vec__12534,v,_,seq__12529__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12529,chunk__12530,count__12531,i__12532,vec__12534,v,_,seq__12529__$1,temp__4092__auto__))
);
{
var G__12543 = cljs.core.next.call(null,seq__12529__$1);
var G__12544 = null;
var G__12545 = 0;
var G__12546 = 0;
seq__12529 = G__12543;
chunk__12530 = G__12544;
count__12531 = G__12545;
i__12532 = G__12546;
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

//# sourceMappingURL=nav.js.map