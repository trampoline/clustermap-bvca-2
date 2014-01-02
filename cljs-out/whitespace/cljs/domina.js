// Compiled by ClojureScript 0.0-2080
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_46436 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_46437 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_46438 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_46437,table_section_wrapper_46437,opt_wrapper_46436,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_46438,table_section_wrapper_46437,cell_wrapper_46438,opt_wrapper_46436,table_section_wrapper_46437,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_46437]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__46443 = cljs.core.seq.call(null,tbody);var chunk__46444 = null;var count__46445 = 0;var i__46446 = 0;while(true){
if((i__46446 < count__46445))
{var child = cljs.core._nth.call(null,chunk__46444,i__46446);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__46447 = seq__46443;
var G__46448 = chunk__46444;
var G__46449 = count__46445;
var G__46450 = (i__46446 + 1);
seq__46443 = G__46447;
chunk__46444 = G__46448;
count__46445 = G__46449;
i__46446 = G__46450;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46443);if(temp__4092__auto__)
{var seq__46443__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46443__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__46443__$1);{
var G__46451 = cljs.core.chunk_rest.call(null,seq__46443__$1);
var G__46452 = c__4015__auto__;
var G__46453 = cljs.core.count.call(null,c__4015__auto__);
var G__46454 = 0;
seq__46443 = G__46451;
chunk__46444 = G__46452;
count__46445 = G__46453;
i__46446 = G__46454;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__46443__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__46455 = cljs.core.next.call(null,seq__46443__$1);
var G__46456 = null;
var G__46457 = 0;
var G__46458 = 0;
seq__46443 = G__46455;
chunk__46444 = G__46456;
count__46445 = G__46457;
i__46446 = G__46458;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__46460 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__46460,0,null);var start_wrap = cljs.core.nth.call(null,vec__46460,1,null);var end_wrap = cljs.core.nth.call(null,vec__46460,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__46461 = wrapper.lastChild;
var G__46462 = (level - 1);
wrapper = G__46461;
level = G__46462;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj46464 = {};return obj46464;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3279__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__46465){
var mesg = cljs.core.seq(arglist__46465);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__46466){
var mesg = cljs.core.seq(arglist__46466);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__46467){
var contents = cljs.core.seq(arglist__46467);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__46468_SHARP_){return p1__46468_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__46469_SHARP_,p2__46470_SHARP_){return goog.dom.insertChildAt(p1__46469_SHARP_,p2__46470_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__46472_SHARP_,p2__46471_SHARP_){return goog.dom.insertSiblingBefore(p2__46471_SHARP_,p1__46472_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__46474_SHARP_,p2__46473_SHARP_){return goog.dom.insertSiblingAfter(p2__46473_SHARP_,p1__46474_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__46476_SHARP_,p2__46475_SHARP_){return goog.dom.replaceNode(p2__46475_SHARP_,p1__46476_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__46481_46485 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46482_46486 = null;var count__46483_46487 = 0;var i__46484_46488 = 0;while(true){
if((i__46484_46488 < count__46483_46487))
{var n_46489 = cljs.core._nth.call(null,chunk__46482_46486,i__46484_46488);goog.style.setStyle(n_46489,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__46490 = seq__46481_46485;
var G__46491 = chunk__46482_46486;
var G__46492 = count__46483_46487;
var G__46493 = (i__46484_46488 + 1);
seq__46481_46485 = G__46490;
chunk__46482_46486 = G__46491;
count__46483_46487 = G__46492;
i__46484_46488 = G__46493;
continue;
}
} else
{var temp__4092__auto___46494 = cljs.core.seq.call(null,seq__46481_46485);if(temp__4092__auto___46494)
{var seq__46481_46495__$1 = temp__4092__auto___46494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46481_46495__$1))
{var c__4015__auto___46496 = cljs.core.chunk_first.call(null,seq__46481_46495__$1);{
var G__46497 = cljs.core.chunk_rest.call(null,seq__46481_46495__$1);
var G__46498 = c__4015__auto___46496;
var G__46499 = cljs.core.count.call(null,c__4015__auto___46496);
var G__46500 = 0;
seq__46481_46485 = G__46497;
chunk__46482_46486 = G__46498;
count__46483_46487 = G__46499;
i__46484_46488 = G__46500;
continue;
}
} else
{var n_46501 = cljs.core.first.call(null,seq__46481_46495__$1);goog.style.setStyle(n_46501,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__46502 = cljs.core.next.call(null,seq__46481_46495__$1);
var G__46503 = null;
var G__46504 = 0;
var G__46505 = 0;
seq__46481_46485 = G__46502;
chunk__46482_46486 = G__46503;
count__46483_46487 = G__46504;
i__46484_46488 = G__46505;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__46506){
var content = cljs.core.first(arglist__46506);
arglist__46506 = cljs.core.next(arglist__46506);
var name = cljs.core.first(arglist__46506);
var value = cljs.core.rest(arglist__46506);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__46511_46515 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46512_46516 = null;var count__46513_46517 = 0;var i__46514_46518 = 0;while(true){
if((i__46514_46518 < count__46513_46517))
{var n_46519 = cljs.core._nth.call(null,chunk__46512_46516,i__46514_46518);n_46519.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__46520 = seq__46511_46515;
var G__46521 = chunk__46512_46516;
var G__46522 = count__46513_46517;
var G__46523 = (i__46514_46518 + 1);
seq__46511_46515 = G__46520;
chunk__46512_46516 = G__46521;
count__46513_46517 = G__46522;
i__46514_46518 = G__46523;
continue;
}
} else
{var temp__4092__auto___46524 = cljs.core.seq.call(null,seq__46511_46515);if(temp__4092__auto___46524)
{var seq__46511_46525__$1 = temp__4092__auto___46524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46511_46525__$1))
{var c__4015__auto___46526 = cljs.core.chunk_first.call(null,seq__46511_46525__$1);{
var G__46527 = cljs.core.chunk_rest.call(null,seq__46511_46525__$1);
var G__46528 = c__4015__auto___46526;
var G__46529 = cljs.core.count.call(null,c__4015__auto___46526);
var G__46530 = 0;
seq__46511_46515 = G__46527;
chunk__46512_46516 = G__46528;
count__46513_46517 = G__46529;
i__46514_46518 = G__46530;
continue;
}
} else
{var n_46531 = cljs.core.first.call(null,seq__46511_46525__$1);n_46531.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__46532 = cljs.core.next.call(null,seq__46511_46525__$1);
var G__46533 = null;
var G__46534 = 0;
var G__46535 = 0;
seq__46511_46515 = G__46532;
chunk__46512_46516 = G__46533;
count__46513_46517 = G__46534;
i__46514_46518 = G__46535;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__46536){
var content = cljs.core.first(arglist__46536);
arglist__46536 = cljs.core.next(arglist__46536);
var name = cljs.core.first(arglist__46536);
var value = cljs.core.rest(arglist__46536);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__46541_46545 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46542_46546 = null;var count__46543_46547 = 0;var i__46544_46548 = 0;while(true){
if((i__46544_46548 < count__46543_46547))
{var n_46549 = cljs.core._nth.call(null,chunk__46542_46546,i__46544_46548);n_46549.removeAttribute(cljs.core.name.call(null,name));
{
var G__46550 = seq__46541_46545;
var G__46551 = chunk__46542_46546;
var G__46552 = count__46543_46547;
var G__46553 = (i__46544_46548 + 1);
seq__46541_46545 = G__46550;
chunk__46542_46546 = G__46551;
count__46543_46547 = G__46552;
i__46544_46548 = G__46553;
continue;
}
} else
{var temp__4092__auto___46554 = cljs.core.seq.call(null,seq__46541_46545);if(temp__4092__auto___46554)
{var seq__46541_46555__$1 = temp__4092__auto___46554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46541_46555__$1))
{var c__4015__auto___46556 = cljs.core.chunk_first.call(null,seq__46541_46555__$1);{
var G__46557 = cljs.core.chunk_rest.call(null,seq__46541_46555__$1);
var G__46558 = c__4015__auto___46556;
var G__46559 = cljs.core.count.call(null,c__4015__auto___46556);
var G__46560 = 0;
seq__46541_46545 = G__46557;
chunk__46542_46546 = G__46558;
count__46543_46547 = G__46559;
i__46544_46548 = G__46560;
continue;
}
} else
{var n_46561 = cljs.core.first.call(null,seq__46541_46555__$1);n_46561.removeAttribute(cljs.core.name.call(null,name));
{
var G__46562 = cljs.core.next.call(null,seq__46541_46555__$1);
var G__46563 = null;
var G__46564 = 0;
var G__46565 = 0;
seq__46541_46545 = G__46562;
chunk__46542_46546 = G__46563;
count__46543_46547 = G__46564;
i__46544_46548 = G__46565;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__46567 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__46567,0,null);var v = cljs.core.nth.call(null,vec__46567,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__46568_SHARP_){var attr = attrs__$1.item(p1__46568_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__46575_46581 = cljs.core.seq.call(null,styles);var chunk__46576_46582 = null;var count__46577_46583 = 0;var i__46578_46584 = 0;while(true){
if((i__46578_46584 < count__46577_46583))
{var vec__46579_46585 = cljs.core._nth.call(null,chunk__46576_46582,i__46578_46584);var name_46586 = cljs.core.nth.call(null,vec__46579_46585,0,null);var value_46587 = cljs.core.nth.call(null,vec__46579_46585,1,null);domina.set_style_BANG_.call(null,content,name_46586,value_46587);
{
var G__46588 = seq__46575_46581;
var G__46589 = chunk__46576_46582;
var G__46590 = count__46577_46583;
var G__46591 = (i__46578_46584 + 1);
seq__46575_46581 = G__46588;
chunk__46576_46582 = G__46589;
count__46577_46583 = G__46590;
i__46578_46584 = G__46591;
continue;
}
} else
{var temp__4092__auto___46592 = cljs.core.seq.call(null,seq__46575_46581);if(temp__4092__auto___46592)
{var seq__46575_46593__$1 = temp__4092__auto___46592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46575_46593__$1))
{var c__4015__auto___46594 = cljs.core.chunk_first.call(null,seq__46575_46593__$1);{
var G__46595 = cljs.core.chunk_rest.call(null,seq__46575_46593__$1);
var G__46596 = c__4015__auto___46594;
var G__46597 = cljs.core.count.call(null,c__4015__auto___46594);
var G__46598 = 0;
seq__46575_46581 = G__46595;
chunk__46576_46582 = G__46596;
count__46577_46583 = G__46597;
i__46578_46584 = G__46598;
continue;
}
} else
{var vec__46580_46599 = cljs.core.first.call(null,seq__46575_46593__$1);var name_46600 = cljs.core.nth.call(null,vec__46580_46599,0,null);var value_46601 = cljs.core.nth.call(null,vec__46580_46599,1,null);domina.set_style_BANG_.call(null,content,name_46600,value_46601);
{
var G__46602 = cljs.core.next.call(null,seq__46575_46593__$1);
var G__46603 = null;
var G__46604 = 0;
var G__46605 = 0;
seq__46575_46581 = G__46602;
chunk__46576_46582 = G__46603;
count__46577_46583 = G__46604;
i__46578_46584 = G__46605;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__46612_46618 = cljs.core.seq.call(null,attrs);var chunk__46613_46619 = null;var count__46614_46620 = 0;var i__46615_46621 = 0;while(true){
if((i__46615_46621 < count__46614_46620))
{var vec__46616_46622 = cljs.core._nth.call(null,chunk__46613_46619,i__46615_46621);var name_46623 = cljs.core.nth.call(null,vec__46616_46622,0,null);var value_46624 = cljs.core.nth.call(null,vec__46616_46622,1,null);domina.set_attr_BANG_.call(null,content,name_46623,value_46624);
{
var G__46625 = seq__46612_46618;
var G__46626 = chunk__46613_46619;
var G__46627 = count__46614_46620;
var G__46628 = (i__46615_46621 + 1);
seq__46612_46618 = G__46625;
chunk__46613_46619 = G__46626;
count__46614_46620 = G__46627;
i__46615_46621 = G__46628;
continue;
}
} else
{var temp__4092__auto___46629 = cljs.core.seq.call(null,seq__46612_46618);if(temp__4092__auto___46629)
{var seq__46612_46630__$1 = temp__4092__auto___46629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46612_46630__$1))
{var c__4015__auto___46631 = cljs.core.chunk_first.call(null,seq__46612_46630__$1);{
var G__46632 = cljs.core.chunk_rest.call(null,seq__46612_46630__$1);
var G__46633 = c__4015__auto___46631;
var G__46634 = cljs.core.count.call(null,c__4015__auto___46631);
var G__46635 = 0;
seq__46612_46618 = G__46632;
chunk__46613_46619 = G__46633;
count__46614_46620 = G__46634;
i__46615_46621 = G__46635;
continue;
}
} else
{var vec__46617_46636 = cljs.core.first.call(null,seq__46612_46630__$1);var name_46637 = cljs.core.nth.call(null,vec__46617_46636,0,null);var value_46638 = cljs.core.nth.call(null,vec__46617_46636,1,null);domina.set_attr_BANG_.call(null,content,name_46637,value_46638);
{
var G__46639 = cljs.core.next.call(null,seq__46612_46630__$1);
var G__46640 = null;
var G__46641 = 0;
var G__46642 = 0;
seq__46612_46618 = G__46639;
chunk__46613_46619 = G__46640;
count__46614_46620 = G__46641;
i__46615_46621 = G__46642;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__46647_46651 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46648_46652 = null;var count__46649_46653 = 0;var i__46650_46654 = 0;while(true){
if((i__46650_46654 < count__46649_46653))
{var node_46655 = cljs.core._nth.call(null,chunk__46648_46652,i__46650_46654);goog.dom.classes.add(node_46655,class$);
{
var G__46656 = seq__46647_46651;
var G__46657 = chunk__46648_46652;
var G__46658 = count__46649_46653;
var G__46659 = (i__46650_46654 + 1);
seq__46647_46651 = G__46656;
chunk__46648_46652 = G__46657;
count__46649_46653 = G__46658;
i__46650_46654 = G__46659;
continue;
}
} else
{var temp__4092__auto___46660 = cljs.core.seq.call(null,seq__46647_46651);if(temp__4092__auto___46660)
{var seq__46647_46661__$1 = temp__4092__auto___46660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46647_46661__$1))
{var c__4015__auto___46662 = cljs.core.chunk_first.call(null,seq__46647_46661__$1);{
var G__46663 = cljs.core.chunk_rest.call(null,seq__46647_46661__$1);
var G__46664 = c__4015__auto___46662;
var G__46665 = cljs.core.count.call(null,c__4015__auto___46662);
var G__46666 = 0;
seq__46647_46651 = G__46663;
chunk__46648_46652 = G__46664;
count__46649_46653 = G__46665;
i__46650_46654 = G__46666;
continue;
}
} else
{var node_46667 = cljs.core.first.call(null,seq__46647_46661__$1);goog.dom.classes.add(node_46667,class$);
{
var G__46668 = cljs.core.next.call(null,seq__46647_46661__$1);
var G__46669 = null;
var G__46670 = 0;
var G__46671 = 0;
seq__46647_46651 = G__46668;
chunk__46648_46652 = G__46669;
count__46649_46653 = G__46670;
i__46650_46654 = G__46671;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__46676_46680 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46677_46681 = null;var count__46678_46682 = 0;var i__46679_46683 = 0;while(true){
if((i__46679_46683 < count__46678_46682))
{var node_46684 = cljs.core._nth.call(null,chunk__46677_46681,i__46679_46683);goog.dom.classes.remove(node_46684,class$);
{
var G__46685 = seq__46676_46680;
var G__46686 = chunk__46677_46681;
var G__46687 = count__46678_46682;
var G__46688 = (i__46679_46683 + 1);
seq__46676_46680 = G__46685;
chunk__46677_46681 = G__46686;
count__46678_46682 = G__46687;
i__46679_46683 = G__46688;
continue;
}
} else
{var temp__4092__auto___46689 = cljs.core.seq.call(null,seq__46676_46680);if(temp__4092__auto___46689)
{var seq__46676_46690__$1 = temp__4092__auto___46689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46676_46690__$1))
{var c__4015__auto___46691 = cljs.core.chunk_first.call(null,seq__46676_46690__$1);{
var G__46692 = cljs.core.chunk_rest.call(null,seq__46676_46690__$1);
var G__46693 = c__4015__auto___46691;
var G__46694 = cljs.core.count.call(null,c__4015__auto___46691);
var G__46695 = 0;
seq__46676_46680 = G__46692;
chunk__46677_46681 = G__46693;
count__46678_46682 = G__46694;
i__46679_46683 = G__46695;
continue;
}
} else
{var node_46696 = cljs.core.first.call(null,seq__46676_46690__$1);goog.dom.classes.remove(node_46696,class$);
{
var G__46697 = cljs.core.next.call(null,seq__46676_46690__$1);
var G__46698 = null;
var G__46699 = 0;
var G__46700 = 0;
seq__46676_46680 = G__46697;
chunk__46677_46681 = G__46698;
count__46678_46682 = G__46699;
i__46679_46683 = G__46700;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__46705_46709 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46706_46710 = null;var count__46707_46711 = 0;var i__46708_46712 = 0;while(true){
if((i__46708_46712 < count__46707_46711))
{var node_46713 = cljs.core._nth.call(null,chunk__46706_46710,i__46708_46712);goog.dom.classes.toggle(node_46713,class$);
{
var G__46714 = seq__46705_46709;
var G__46715 = chunk__46706_46710;
var G__46716 = count__46707_46711;
var G__46717 = (i__46708_46712 + 1);
seq__46705_46709 = G__46714;
chunk__46706_46710 = G__46715;
count__46707_46711 = G__46716;
i__46708_46712 = G__46717;
continue;
}
} else
{var temp__4092__auto___46718 = cljs.core.seq.call(null,seq__46705_46709);if(temp__4092__auto___46718)
{var seq__46705_46719__$1 = temp__4092__auto___46718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46705_46719__$1))
{var c__4015__auto___46720 = cljs.core.chunk_first.call(null,seq__46705_46719__$1);{
var G__46721 = cljs.core.chunk_rest.call(null,seq__46705_46719__$1);
var G__46722 = c__4015__auto___46720;
var G__46723 = cljs.core.count.call(null,c__4015__auto___46720);
var G__46724 = 0;
seq__46705_46709 = G__46721;
chunk__46706_46710 = G__46722;
count__46707_46711 = G__46723;
i__46708_46712 = G__46724;
continue;
}
} else
{var node_46725 = cljs.core.first.call(null,seq__46705_46719__$1);goog.dom.classes.toggle(node_46725,class$);
{
var G__46726 = cljs.core.next.call(null,seq__46705_46719__$1);
var G__46727 = null;
var G__46728 = 0;
var G__46729 = 0;
seq__46705_46709 = G__46726;
chunk__46706_46710 = G__46727;
count__46707_46711 = G__46728;
i__46708_46712 = G__46729;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_46738__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__46734_46739 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46735_46740 = null;var count__46736_46741 = 0;var i__46737_46742 = 0;while(true){
if((i__46737_46742 < count__46736_46741))
{var node_46743 = cljs.core._nth.call(null,chunk__46735_46740,i__46737_46742);goog.dom.classes.set(node_46743,classes_46738__$1);
{
var G__46744 = seq__46734_46739;
var G__46745 = chunk__46735_46740;
var G__46746 = count__46736_46741;
var G__46747 = (i__46737_46742 + 1);
seq__46734_46739 = G__46744;
chunk__46735_46740 = G__46745;
count__46736_46741 = G__46746;
i__46737_46742 = G__46747;
continue;
}
} else
{var temp__4092__auto___46748 = cljs.core.seq.call(null,seq__46734_46739);if(temp__4092__auto___46748)
{var seq__46734_46749__$1 = temp__4092__auto___46748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46734_46749__$1))
{var c__4015__auto___46750 = cljs.core.chunk_first.call(null,seq__46734_46749__$1);{
var G__46751 = cljs.core.chunk_rest.call(null,seq__46734_46749__$1);
var G__46752 = c__4015__auto___46750;
var G__46753 = cljs.core.count.call(null,c__4015__auto___46750);
var G__46754 = 0;
seq__46734_46739 = G__46751;
chunk__46735_46740 = G__46752;
count__46736_46741 = G__46753;
i__46737_46742 = G__46754;
continue;
}
} else
{var node_46755 = cljs.core.first.call(null,seq__46734_46749__$1);goog.dom.classes.set(node_46755,classes_46738__$1);
{
var G__46756 = cljs.core.next.call(null,seq__46734_46749__$1);
var G__46757 = null;
var G__46758 = 0;
var G__46759 = 0;
seq__46734_46739 = G__46756;
chunk__46735_46740 = G__46757;
count__46736_46741 = G__46758;
i__46737_46742 = G__46759;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__46764_46768 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46765_46769 = null;var count__46766_46770 = 0;var i__46767_46771 = 0;while(true){
if((i__46767_46771 < count__46766_46770))
{var node_46772 = cljs.core._nth.call(null,chunk__46765_46769,i__46767_46771);goog.dom.setTextContent(node_46772,value);
{
var G__46773 = seq__46764_46768;
var G__46774 = chunk__46765_46769;
var G__46775 = count__46766_46770;
var G__46776 = (i__46767_46771 + 1);
seq__46764_46768 = G__46773;
chunk__46765_46769 = G__46774;
count__46766_46770 = G__46775;
i__46767_46771 = G__46776;
continue;
}
} else
{var temp__4092__auto___46777 = cljs.core.seq.call(null,seq__46764_46768);if(temp__4092__auto___46777)
{var seq__46764_46778__$1 = temp__4092__auto___46777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46764_46778__$1))
{var c__4015__auto___46779 = cljs.core.chunk_first.call(null,seq__46764_46778__$1);{
var G__46780 = cljs.core.chunk_rest.call(null,seq__46764_46778__$1);
var G__46781 = c__4015__auto___46779;
var G__46782 = cljs.core.count.call(null,c__4015__auto___46779);
var G__46783 = 0;
seq__46764_46768 = G__46780;
chunk__46765_46769 = G__46781;
count__46766_46770 = G__46782;
i__46767_46771 = G__46783;
continue;
}
} else
{var node_46784 = cljs.core.first.call(null,seq__46764_46778__$1);goog.dom.setTextContent(node_46784,value);
{
var G__46785 = cljs.core.next.call(null,seq__46764_46778__$1);
var G__46786 = null;
var G__46787 = 0;
var G__46788 = 0;
seq__46764_46768 = G__46785;
chunk__46765_46769 = G__46786;
count__46766_46770 = G__46787;
i__46767_46771 = G__46788;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__46793_46797 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46794_46798 = null;var count__46795_46799 = 0;var i__46796_46800 = 0;while(true){
if((i__46796_46800 < count__46795_46799))
{var node_46801 = cljs.core._nth.call(null,chunk__46794_46798,i__46796_46800);goog.dom.forms.setValue(node_46801,value);
{
var G__46802 = seq__46793_46797;
var G__46803 = chunk__46794_46798;
var G__46804 = count__46795_46799;
var G__46805 = (i__46796_46800 + 1);
seq__46793_46797 = G__46802;
chunk__46794_46798 = G__46803;
count__46795_46799 = G__46804;
i__46796_46800 = G__46805;
continue;
}
} else
{var temp__4092__auto___46806 = cljs.core.seq.call(null,seq__46793_46797);if(temp__4092__auto___46806)
{var seq__46793_46807__$1 = temp__4092__auto___46806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46793_46807__$1))
{var c__4015__auto___46808 = cljs.core.chunk_first.call(null,seq__46793_46807__$1);{
var G__46809 = cljs.core.chunk_rest.call(null,seq__46793_46807__$1);
var G__46810 = c__4015__auto___46808;
var G__46811 = cljs.core.count.call(null,c__4015__auto___46808);
var G__46812 = 0;
seq__46793_46797 = G__46809;
chunk__46794_46798 = G__46810;
count__46795_46799 = G__46811;
i__46796_46800 = G__46812;
continue;
}
} else
{var node_46813 = cljs.core.first.call(null,seq__46793_46807__$1);goog.dom.forms.setValue(node_46813,value);
{
var G__46814 = cljs.core.next.call(null,seq__46793_46807__$1);
var G__46815 = null;
var G__46816 = 0;
var G__46817 = 0;
seq__46793_46797 = G__46814;
chunk__46794_46798 = G__46815;
count__46795_46799 = G__46816;
i__46796_46800 = G__46817;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_46828 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__46824_46829 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46825_46830 = null;var count__46826_46831 = 0;var i__46827_46832 = 0;while(true){
if((i__46827_46832 < count__46826_46831))
{var node_46833 = cljs.core._nth.call(null,chunk__46825_46830,i__46827_46832);node_46833.innerHTML = value_46828;
{
var G__46834 = seq__46824_46829;
var G__46835 = chunk__46825_46830;
var G__46836 = count__46826_46831;
var G__46837 = (i__46827_46832 + 1);
seq__46824_46829 = G__46834;
chunk__46825_46830 = G__46835;
count__46826_46831 = G__46836;
i__46827_46832 = G__46837;
continue;
}
} else
{var temp__4092__auto___46838 = cljs.core.seq.call(null,seq__46824_46829);if(temp__4092__auto___46838)
{var seq__46824_46839__$1 = temp__4092__auto___46838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46824_46839__$1))
{var c__4015__auto___46840 = cljs.core.chunk_first.call(null,seq__46824_46839__$1);{
var G__46841 = cljs.core.chunk_rest.call(null,seq__46824_46839__$1);
var G__46842 = c__4015__auto___46840;
var G__46843 = cljs.core.count.call(null,c__4015__auto___46840);
var G__46844 = 0;
seq__46824_46829 = G__46841;
chunk__46825_46830 = G__46842;
count__46826_46831 = G__46843;
i__46827_46832 = G__46844;
continue;
}
} else
{var node_46845 = cljs.core.first.call(null,seq__46824_46839__$1);node_46845.innerHTML = value_46828;
{
var G__46846 = cljs.core.next.call(null,seq__46824_46839__$1);
var G__46847 = null;
var G__46848 = 0;
var G__46849 = 0;
seq__46824_46829 = G__46846;
chunk__46825_46830 = G__46847;
count__46826_46831 = G__46848;
i__46827_46832 = G__46849;
continue;
}
}
} else
{}
}
break;
}
}catch (e46823){if((e46823 instanceof Error))
{var e_46850 = e46823;domina.replace_children_BANG_.call(null,content,value_46828);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46823;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__46857_46861 = cljs.core.seq.call(null,children);var chunk__46858_46862 = null;var count__46859_46863 = 0;var i__46860_46864 = 0;while(true){
if((i__46860_46864 < count__46859_46863))
{var child_46865 = cljs.core._nth.call(null,chunk__46858_46862,i__46860_46864);frag.appendChild(child_46865);
{
var G__46866 = seq__46857_46861;
var G__46867 = chunk__46858_46862;
var G__46868 = count__46859_46863;
var G__46869 = (i__46860_46864 + 1);
seq__46857_46861 = G__46866;
chunk__46858_46862 = G__46867;
count__46859_46863 = G__46868;
i__46860_46864 = G__46869;
continue;
}
} else
{var temp__4092__auto___46870 = cljs.core.seq.call(null,seq__46857_46861);if(temp__4092__auto___46870)
{var seq__46857_46871__$1 = temp__4092__auto___46870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46857_46871__$1))
{var c__4015__auto___46872 = cljs.core.chunk_first.call(null,seq__46857_46871__$1);{
var G__46873 = cljs.core.chunk_rest.call(null,seq__46857_46871__$1);
var G__46874 = c__4015__auto___46872;
var G__46875 = cljs.core.count.call(null,c__4015__auto___46872);
var G__46876 = 0;
seq__46857_46861 = G__46873;
chunk__46858_46862 = G__46874;
count__46859_46863 = G__46875;
i__46860_46864 = G__46876;
continue;
}
} else
{var child_46877 = cljs.core.first.call(null,seq__46857_46871__$1);frag.appendChild(child_46877);
{
var G__46878 = cljs.core.next.call(null,seq__46857_46871__$1);
var G__46879 = null;
var G__46880 = 0;
var G__46881 = 0;
seq__46857_46861 = G__46878;
chunk__46858_46862 = G__46879;
count__46859_46863 = G__46880;
i__46860_46864 = G__46881;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__46851_SHARP_,p2__46852_SHARP_){return f.call(null,p1__46851_SHARP_,p2__46852_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__46883 = list_thing;if(G__46883)
{var bit__3917__auto__ = (G__46883.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__46883.cljs$core$ISeqable$))
{return true;
} else
{if((!G__46883.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__46883);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__46883);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__46884 = content;if(G__46884)
{var bit__3917__auto__ = (G__46884.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__46884.cljs$core$ISeqable$))
{return true;
} else
{if((!G__46884.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__46884);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__46884);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__46885 = content;if(G__46885)
{var bit__3917__auto__ = (G__46885.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__46885.cljs$core$ISeqable$))
{return true;
} else
{if((!G__46885.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__46885);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__46885);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
