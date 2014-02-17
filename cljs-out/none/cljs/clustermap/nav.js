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
var seq__12490_12496 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12491_12497 = null;var count__12492_12498 = 0;var i__12493_12499 = 0;while(true){
if((i__12493_12499 < count__12492_12498))
{var vec__12494_12500 = cljs.core._nth.call(null,chunk__12491_12497,i__12493_12499);var v_12501 = cljs.core.nth.call(null,vec__12494_12500,0,null);var body_class_12502 = cljs.core.nth.call(null,vec__12494_12500,1,null);if(cljs.core._EQ_.call(null,v_12501,view))
{domina.add_class_BANG_.call(null,body,body_class_12502);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12502);
}
{
var G__12503 = seq__12490_12496;
var G__12504 = chunk__12491_12497;
var G__12505 = count__12492_12498;
var G__12506 = (i__12493_12499 + 1);
seq__12490_12496 = G__12503;
chunk__12491_12497 = G__12504;
count__12492_12498 = G__12505;
i__12493_12499 = G__12506;
continue;
}
} else
{var temp__4092__auto___12507 = cljs.core.seq.call(null,seq__12490_12496);if(temp__4092__auto___12507)
{var seq__12490_12508__$1 = temp__4092__auto___12507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12490_12508__$1))
{var c__4148__auto___12509 = cljs.core.chunk_first.call(null,seq__12490_12508__$1);{
var G__12510 = cljs.core.chunk_rest.call(null,seq__12490_12508__$1);
var G__12511 = c__4148__auto___12509;
var G__12512 = cljs.core.count.call(null,c__4148__auto___12509);
var G__12513 = 0;
seq__12490_12496 = G__12510;
chunk__12491_12497 = G__12511;
count__12492_12498 = G__12512;
i__12493_12499 = G__12513;
continue;
}
} else
{var vec__12495_12514 = cljs.core.first.call(null,seq__12490_12508__$1);var v_12515 = cljs.core.nth.call(null,vec__12495_12514,0,null);var body_class_12516 = cljs.core.nth.call(null,vec__12495_12514,1,null);if(cljs.core._EQ_.call(null,v_12515,view))
{domina.add_class_BANG_.call(null,body,body_class_12516);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12516);
}
{
var G__12517 = cljs.core.next.call(null,seq__12490_12508__$1);
var G__12518 = null;
var G__12519 = 0;
var G__12520 = 0;
seq__12490_12496 = G__12517;
chunk__12491_12497 = G__12518;
count__12492_12498 = G__12519;
i__12493_12499 = G__12520;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12527 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12528 = null;var count__12529 = 0;var i__12530 = 0;while(true){
if((i__12530 < count__12529))
{var vec__12531 = cljs.core._nth.call(null,chunk__12528,i__12530);var v = cljs.core.nth.call(null,vec__12531,0,null);var _ = cljs.core.nth.call(null,vec__12531,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12527,chunk__12528,count__12529,i__12530,vec__12531,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12527,chunk__12528,count__12529,i__12530,vec__12531,v,_))
);
{
var G__12533 = seq__12527;
var G__12534 = chunk__12528;
var G__12535 = count__12529;
var G__12536 = (i__12530 + 1);
seq__12527 = G__12533;
chunk__12528 = G__12534;
count__12529 = G__12535;
i__12530 = G__12536;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12527);if(temp__4092__auto__)
{var seq__12527__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12527__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12527__$1);{
var G__12537 = cljs.core.chunk_rest.call(null,seq__12527__$1);
var G__12538 = c__4148__auto__;
var G__12539 = cljs.core.count.call(null,c__4148__auto__);
var G__12540 = 0;
seq__12527 = G__12537;
chunk__12528 = G__12538;
count__12529 = G__12539;
i__12530 = G__12540;
continue;
}
} else
{var vec__12532 = cljs.core.first.call(null,seq__12527__$1);var v = cljs.core.nth.call(null,vec__12532,0,null);var _ = cljs.core.nth.call(null,vec__12532,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12527,chunk__12528,count__12529,i__12530,vec__12532,v,_,seq__12527__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12527,chunk__12528,count__12529,i__12530,vec__12532,v,_,seq__12527__$1,temp__4092__auto__))
);
{
var G__12541 = cljs.core.next.call(null,seq__12527__$1);
var G__12542 = null;
var G__12543 = 0;
var G__12544 = 0;
seq__12527 = G__12541;
chunk__12528 = G__12542;
count__12529 = G__12543;
i__12530 = G__12544;
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