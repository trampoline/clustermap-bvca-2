// Compiled by ClojureScript 0.0-2173
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
var opt_wrapper_50436 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_50437 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_50438 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_50437,table_section_wrapper_50437,opt_wrapper_50436,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_50438,table_section_wrapper_50437,cell_wrapper_50438,opt_wrapper_50436,table_section_wrapper_50437,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_50437]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__50443 = cljs.core.seq.call(null,tbody);var chunk__50444 = null;var count__50445 = 0;var i__50446 = 0;while(true){
if((i__50446 < count__50445))
{var child = cljs.core._nth.call(null,chunk__50444,i__50446);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50447 = seq__50443;
var G__50448 = chunk__50444;
var G__50449 = count__50445;
var G__50450 = (i__50446 + 1);
seq__50443 = G__50447;
chunk__50444 = G__50448;
count__50445 = G__50449;
i__50446 = G__50450;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50443);if(temp__4092__auto__)
{var seq__50443__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50443__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50443__$1);{
var G__50451 = cljs.core.chunk_rest.call(null,seq__50443__$1);
var G__50452 = c__4189__auto__;
var G__50453 = cljs.core.count.call(null,c__4189__auto__);
var G__50454 = 0;
seq__50443 = G__50451;
chunk__50444 = G__50452;
count__50445 = G__50453;
i__50446 = G__50454;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__50443__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50455 = cljs.core.next.call(null,seq__50443__$1);
var G__50456 = null;
var G__50457 = 0;
var G__50458 = 0;
seq__50443 = G__50455;
chunk__50444 = G__50456;
count__50445 = G__50457;
i__50446 = G__50458;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__50460 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__50460,0,null);var start_wrap = cljs.core.nth.call(null,vec__50460,1,null);var end_wrap = cljs.core.nth.call(null,vec__50460,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__50461 = wrapper.lastChild;
var G__50462 = (level - 1);
wrapper = G__50461;
level = G__50462;
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
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
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
domina.DomContent = (function (){var obj50464 = {};return obj50464;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__50465){
var mesg = cljs.core.seq(arglist__50465);
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
log.cljs$lang$applyTo = (function (arglist__50466){
var mesg = cljs.core.seq(arglist__50466);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__50467){
var contents = cljs.core.seq(arglist__50467);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__50468_SHARP_){return p1__50468_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__50469_SHARP_,p2__50470_SHARP_){return goog.dom.insertChildAt(p1__50469_SHARP_,p2__50470_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50472_SHARP_,p2__50471_SHARP_){return goog.dom.insertSiblingBefore(p2__50471_SHARP_,p1__50472_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50474_SHARP_,p2__50473_SHARP_){return goog.dom.insertSiblingAfter(p2__50473_SHARP_,p1__50474_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__50476_SHARP_,p2__50475_SHARP_){return goog.dom.replaceNode(p2__50475_SHARP_,p1__50476_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__50481_50485 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50482_50486 = null;var count__50483_50487 = 0;var i__50484_50488 = 0;while(true){
if((i__50484_50488 < count__50483_50487))
{var n_50489 = cljs.core._nth.call(null,chunk__50482_50486,i__50484_50488);goog.style.setStyle(n_50489,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50490 = seq__50481_50485;
var G__50491 = chunk__50482_50486;
var G__50492 = count__50483_50487;
var G__50493 = (i__50484_50488 + 1);
seq__50481_50485 = G__50490;
chunk__50482_50486 = G__50491;
count__50483_50487 = G__50492;
i__50484_50488 = G__50493;
continue;
}
} else
{var temp__4092__auto___50494 = cljs.core.seq.call(null,seq__50481_50485);if(temp__4092__auto___50494)
{var seq__50481_50495__$1 = temp__4092__auto___50494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50481_50495__$1))
{var c__4189__auto___50496 = cljs.core.chunk_first.call(null,seq__50481_50495__$1);{
var G__50497 = cljs.core.chunk_rest.call(null,seq__50481_50495__$1);
var G__50498 = c__4189__auto___50496;
var G__50499 = cljs.core.count.call(null,c__4189__auto___50496);
var G__50500 = 0;
seq__50481_50485 = G__50497;
chunk__50482_50486 = G__50498;
count__50483_50487 = G__50499;
i__50484_50488 = G__50500;
continue;
}
} else
{var n_50501 = cljs.core.first.call(null,seq__50481_50495__$1);goog.style.setStyle(n_50501,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50502 = cljs.core.next.call(null,seq__50481_50495__$1);
var G__50503 = null;
var G__50504 = 0;
var G__50505 = 0;
seq__50481_50485 = G__50502;
chunk__50482_50486 = G__50503;
count__50483_50487 = G__50504;
i__50484_50488 = G__50505;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__50506){
var content = cljs.core.first(arglist__50506);
arglist__50506 = cljs.core.next(arglist__50506);
var name = cljs.core.first(arglist__50506);
var value = cljs.core.rest(arglist__50506);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__50511_50515 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50512_50516 = null;var count__50513_50517 = 0;var i__50514_50518 = 0;while(true){
if((i__50514_50518 < count__50513_50517))
{var n_50519 = cljs.core._nth.call(null,chunk__50512_50516,i__50514_50518);n_50519.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50520 = seq__50511_50515;
var G__50521 = chunk__50512_50516;
var G__50522 = count__50513_50517;
var G__50523 = (i__50514_50518 + 1);
seq__50511_50515 = G__50520;
chunk__50512_50516 = G__50521;
count__50513_50517 = G__50522;
i__50514_50518 = G__50523;
continue;
}
} else
{var temp__4092__auto___50524 = cljs.core.seq.call(null,seq__50511_50515);if(temp__4092__auto___50524)
{var seq__50511_50525__$1 = temp__4092__auto___50524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50511_50525__$1))
{var c__4189__auto___50526 = cljs.core.chunk_first.call(null,seq__50511_50525__$1);{
var G__50527 = cljs.core.chunk_rest.call(null,seq__50511_50525__$1);
var G__50528 = c__4189__auto___50526;
var G__50529 = cljs.core.count.call(null,c__4189__auto___50526);
var G__50530 = 0;
seq__50511_50515 = G__50527;
chunk__50512_50516 = G__50528;
count__50513_50517 = G__50529;
i__50514_50518 = G__50530;
continue;
}
} else
{var n_50531 = cljs.core.first.call(null,seq__50511_50525__$1);n_50531.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50532 = cljs.core.next.call(null,seq__50511_50525__$1);
var G__50533 = null;
var G__50534 = 0;
var G__50535 = 0;
seq__50511_50515 = G__50532;
chunk__50512_50516 = G__50533;
count__50513_50517 = G__50534;
i__50514_50518 = G__50535;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__50536){
var content = cljs.core.first(arglist__50536);
arglist__50536 = cljs.core.next(arglist__50536);
var name = cljs.core.first(arglist__50536);
var value = cljs.core.rest(arglist__50536);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__50541_50545 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50542_50546 = null;var count__50543_50547 = 0;var i__50544_50548 = 0;while(true){
if((i__50544_50548 < count__50543_50547))
{var n_50549 = cljs.core._nth.call(null,chunk__50542_50546,i__50544_50548);n_50549.removeAttribute(cljs.core.name.call(null,name));
{
var G__50550 = seq__50541_50545;
var G__50551 = chunk__50542_50546;
var G__50552 = count__50543_50547;
var G__50553 = (i__50544_50548 + 1);
seq__50541_50545 = G__50550;
chunk__50542_50546 = G__50551;
count__50543_50547 = G__50552;
i__50544_50548 = G__50553;
continue;
}
} else
{var temp__4092__auto___50554 = cljs.core.seq.call(null,seq__50541_50545);if(temp__4092__auto___50554)
{var seq__50541_50555__$1 = temp__4092__auto___50554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50541_50555__$1))
{var c__4189__auto___50556 = cljs.core.chunk_first.call(null,seq__50541_50555__$1);{
var G__50557 = cljs.core.chunk_rest.call(null,seq__50541_50555__$1);
var G__50558 = c__4189__auto___50556;
var G__50559 = cljs.core.count.call(null,c__4189__auto___50556);
var G__50560 = 0;
seq__50541_50545 = G__50557;
chunk__50542_50546 = G__50558;
count__50543_50547 = G__50559;
i__50544_50548 = G__50560;
continue;
}
} else
{var n_50561 = cljs.core.first.call(null,seq__50541_50555__$1);n_50561.removeAttribute(cljs.core.name.call(null,name));
{
var G__50562 = cljs.core.next.call(null,seq__50541_50555__$1);
var G__50563 = null;
var G__50564 = 0;
var G__50565 = 0;
seq__50541_50545 = G__50562;
chunk__50542_50546 = G__50563;
count__50543_50547 = G__50564;
i__50544_50548 = G__50565;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__50567 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__50567,0,null);var v = cljs.core.nth.call(null,vec__50567,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__50568_SHARP_){var attr = attrs__$1.item(p1__50568_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__50575_50581 = cljs.core.seq.call(null,styles);var chunk__50576_50582 = null;var count__50577_50583 = 0;var i__50578_50584 = 0;while(true){
if((i__50578_50584 < count__50577_50583))
{var vec__50579_50585 = cljs.core._nth.call(null,chunk__50576_50582,i__50578_50584);var name_50586 = cljs.core.nth.call(null,vec__50579_50585,0,null);var value_50587 = cljs.core.nth.call(null,vec__50579_50585,1,null);domina.set_style_BANG_.call(null,content,name_50586,value_50587);
{
var G__50588 = seq__50575_50581;
var G__50589 = chunk__50576_50582;
var G__50590 = count__50577_50583;
var G__50591 = (i__50578_50584 + 1);
seq__50575_50581 = G__50588;
chunk__50576_50582 = G__50589;
count__50577_50583 = G__50590;
i__50578_50584 = G__50591;
continue;
}
} else
{var temp__4092__auto___50592 = cljs.core.seq.call(null,seq__50575_50581);if(temp__4092__auto___50592)
{var seq__50575_50593__$1 = temp__4092__auto___50592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50575_50593__$1))
{var c__4189__auto___50594 = cljs.core.chunk_first.call(null,seq__50575_50593__$1);{
var G__50595 = cljs.core.chunk_rest.call(null,seq__50575_50593__$1);
var G__50596 = c__4189__auto___50594;
var G__50597 = cljs.core.count.call(null,c__4189__auto___50594);
var G__50598 = 0;
seq__50575_50581 = G__50595;
chunk__50576_50582 = G__50596;
count__50577_50583 = G__50597;
i__50578_50584 = G__50598;
continue;
}
} else
{var vec__50580_50599 = cljs.core.first.call(null,seq__50575_50593__$1);var name_50600 = cljs.core.nth.call(null,vec__50580_50599,0,null);var value_50601 = cljs.core.nth.call(null,vec__50580_50599,1,null);domina.set_style_BANG_.call(null,content,name_50600,value_50601);
{
var G__50602 = cljs.core.next.call(null,seq__50575_50593__$1);
var G__50603 = null;
var G__50604 = 0;
var G__50605 = 0;
seq__50575_50581 = G__50602;
chunk__50576_50582 = G__50603;
count__50577_50583 = G__50604;
i__50578_50584 = G__50605;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__50612_50618 = cljs.core.seq.call(null,attrs);var chunk__50613_50619 = null;var count__50614_50620 = 0;var i__50615_50621 = 0;while(true){
if((i__50615_50621 < count__50614_50620))
{var vec__50616_50622 = cljs.core._nth.call(null,chunk__50613_50619,i__50615_50621);var name_50623 = cljs.core.nth.call(null,vec__50616_50622,0,null);var value_50624 = cljs.core.nth.call(null,vec__50616_50622,1,null);domina.set_attr_BANG_.call(null,content,name_50623,value_50624);
{
var G__50625 = seq__50612_50618;
var G__50626 = chunk__50613_50619;
var G__50627 = count__50614_50620;
var G__50628 = (i__50615_50621 + 1);
seq__50612_50618 = G__50625;
chunk__50613_50619 = G__50626;
count__50614_50620 = G__50627;
i__50615_50621 = G__50628;
continue;
}
} else
{var temp__4092__auto___50629 = cljs.core.seq.call(null,seq__50612_50618);if(temp__4092__auto___50629)
{var seq__50612_50630__$1 = temp__4092__auto___50629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50612_50630__$1))
{var c__4189__auto___50631 = cljs.core.chunk_first.call(null,seq__50612_50630__$1);{
var G__50632 = cljs.core.chunk_rest.call(null,seq__50612_50630__$1);
var G__50633 = c__4189__auto___50631;
var G__50634 = cljs.core.count.call(null,c__4189__auto___50631);
var G__50635 = 0;
seq__50612_50618 = G__50632;
chunk__50613_50619 = G__50633;
count__50614_50620 = G__50634;
i__50615_50621 = G__50635;
continue;
}
} else
{var vec__50617_50636 = cljs.core.first.call(null,seq__50612_50630__$1);var name_50637 = cljs.core.nth.call(null,vec__50617_50636,0,null);var value_50638 = cljs.core.nth.call(null,vec__50617_50636,1,null);domina.set_attr_BANG_.call(null,content,name_50637,value_50638);
{
var G__50639 = cljs.core.next.call(null,seq__50612_50630__$1);
var G__50640 = null;
var G__50641 = 0;
var G__50642 = 0;
seq__50612_50618 = G__50639;
chunk__50613_50619 = G__50640;
count__50614_50620 = G__50641;
i__50615_50621 = G__50642;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__50647_50651 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50648_50652 = null;var count__50649_50653 = 0;var i__50650_50654 = 0;while(true){
if((i__50650_50654 < count__50649_50653))
{var node_50655 = cljs.core._nth.call(null,chunk__50648_50652,i__50650_50654);goog.dom.classes.add(node_50655,class$);
{
var G__50656 = seq__50647_50651;
var G__50657 = chunk__50648_50652;
var G__50658 = count__50649_50653;
var G__50659 = (i__50650_50654 + 1);
seq__50647_50651 = G__50656;
chunk__50648_50652 = G__50657;
count__50649_50653 = G__50658;
i__50650_50654 = G__50659;
continue;
}
} else
{var temp__4092__auto___50660 = cljs.core.seq.call(null,seq__50647_50651);if(temp__4092__auto___50660)
{var seq__50647_50661__$1 = temp__4092__auto___50660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50647_50661__$1))
{var c__4189__auto___50662 = cljs.core.chunk_first.call(null,seq__50647_50661__$1);{
var G__50663 = cljs.core.chunk_rest.call(null,seq__50647_50661__$1);
var G__50664 = c__4189__auto___50662;
var G__50665 = cljs.core.count.call(null,c__4189__auto___50662);
var G__50666 = 0;
seq__50647_50651 = G__50663;
chunk__50648_50652 = G__50664;
count__50649_50653 = G__50665;
i__50650_50654 = G__50666;
continue;
}
} else
{var node_50667 = cljs.core.first.call(null,seq__50647_50661__$1);goog.dom.classes.add(node_50667,class$);
{
var G__50668 = cljs.core.next.call(null,seq__50647_50661__$1);
var G__50669 = null;
var G__50670 = 0;
var G__50671 = 0;
seq__50647_50651 = G__50668;
chunk__50648_50652 = G__50669;
count__50649_50653 = G__50670;
i__50650_50654 = G__50671;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__50676_50680 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50677_50681 = null;var count__50678_50682 = 0;var i__50679_50683 = 0;while(true){
if((i__50679_50683 < count__50678_50682))
{var node_50684 = cljs.core._nth.call(null,chunk__50677_50681,i__50679_50683);goog.dom.classes.remove(node_50684,class$);
{
var G__50685 = seq__50676_50680;
var G__50686 = chunk__50677_50681;
var G__50687 = count__50678_50682;
var G__50688 = (i__50679_50683 + 1);
seq__50676_50680 = G__50685;
chunk__50677_50681 = G__50686;
count__50678_50682 = G__50687;
i__50679_50683 = G__50688;
continue;
}
} else
{var temp__4092__auto___50689 = cljs.core.seq.call(null,seq__50676_50680);if(temp__4092__auto___50689)
{var seq__50676_50690__$1 = temp__4092__auto___50689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50676_50690__$1))
{var c__4189__auto___50691 = cljs.core.chunk_first.call(null,seq__50676_50690__$1);{
var G__50692 = cljs.core.chunk_rest.call(null,seq__50676_50690__$1);
var G__50693 = c__4189__auto___50691;
var G__50694 = cljs.core.count.call(null,c__4189__auto___50691);
var G__50695 = 0;
seq__50676_50680 = G__50692;
chunk__50677_50681 = G__50693;
count__50678_50682 = G__50694;
i__50679_50683 = G__50695;
continue;
}
} else
{var node_50696 = cljs.core.first.call(null,seq__50676_50690__$1);goog.dom.classes.remove(node_50696,class$);
{
var G__50697 = cljs.core.next.call(null,seq__50676_50690__$1);
var G__50698 = null;
var G__50699 = 0;
var G__50700 = 0;
seq__50676_50680 = G__50697;
chunk__50677_50681 = G__50698;
count__50678_50682 = G__50699;
i__50679_50683 = G__50700;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__50705_50709 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50706_50710 = null;var count__50707_50711 = 0;var i__50708_50712 = 0;while(true){
if((i__50708_50712 < count__50707_50711))
{var node_50713 = cljs.core._nth.call(null,chunk__50706_50710,i__50708_50712);goog.dom.classes.toggle(node_50713,class$);
{
var G__50714 = seq__50705_50709;
var G__50715 = chunk__50706_50710;
var G__50716 = count__50707_50711;
var G__50717 = (i__50708_50712 + 1);
seq__50705_50709 = G__50714;
chunk__50706_50710 = G__50715;
count__50707_50711 = G__50716;
i__50708_50712 = G__50717;
continue;
}
} else
{var temp__4092__auto___50718 = cljs.core.seq.call(null,seq__50705_50709);if(temp__4092__auto___50718)
{var seq__50705_50719__$1 = temp__4092__auto___50718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50705_50719__$1))
{var c__4189__auto___50720 = cljs.core.chunk_first.call(null,seq__50705_50719__$1);{
var G__50721 = cljs.core.chunk_rest.call(null,seq__50705_50719__$1);
var G__50722 = c__4189__auto___50720;
var G__50723 = cljs.core.count.call(null,c__4189__auto___50720);
var G__50724 = 0;
seq__50705_50709 = G__50721;
chunk__50706_50710 = G__50722;
count__50707_50711 = G__50723;
i__50708_50712 = G__50724;
continue;
}
} else
{var node_50725 = cljs.core.first.call(null,seq__50705_50719__$1);goog.dom.classes.toggle(node_50725,class$);
{
var G__50726 = cljs.core.next.call(null,seq__50705_50719__$1);
var G__50727 = null;
var G__50728 = 0;
var G__50729 = 0;
seq__50705_50709 = G__50726;
chunk__50706_50710 = G__50727;
count__50707_50711 = G__50728;
i__50708_50712 = G__50729;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_50738__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__50734_50739 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50735_50740 = null;var count__50736_50741 = 0;var i__50737_50742 = 0;while(true){
if((i__50737_50742 < count__50736_50741))
{var node_50743 = cljs.core._nth.call(null,chunk__50735_50740,i__50737_50742);goog.dom.classes.set(node_50743,classes_50738__$1);
{
var G__50744 = seq__50734_50739;
var G__50745 = chunk__50735_50740;
var G__50746 = count__50736_50741;
var G__50747 = (i__50737_50742 + 1);
seq__50734_50739 = G__50744;
chunk__50735_50740 = G__50745;
count__50736_50741 = G__50746;
i__50737_50742 = G__50747;
continue;
}
} else
{var temp__4092__auto___50748 = cljs.core.seq.call(null,seq__50734_50739);if(temp__4092__auto___50748)
{var seq__50734_50749__$1 = temp__4092__auto___50748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50734_50749__$1))
{var c__4189__auto___50750 = cljs.core.chunk_first.call(null,seq__50734_50749__$1);{
var G__50751 = cljs.core.chunk_rest.call(null,seq__50734_50749__$1);
var G__50752 = c__4189__auto___50750;
var G__50753 = cljs.core.count.call(null,c__4189__auto___50750);
var G__50754 = 0;
seq__50734_50739 = G__50751;
chunk__50735_50740 = G__50752;
count__50736_50741 = G__50753;
i__50737_50742 = G__50754;
continue;
}
} else
{var node_50755 = cljs.core.first.call(null,seq__50734_50749__$1);goog.dom.classes.set(node_50755,classes_50738__$1);
{
var G__50756 = cljs.core.next.call(null,seq__50734_50749__$1);
var G__50757 = null;
var G__50758 = 0;
var G__50759 = 0;
seq__50734_50739 = G__50756;
chunk__50735_50740 = G__50757;
count__50736_50741 = G__50758;
i__50737_50742 = G__50759;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__50764_50768 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50765_50769 = null;var count__50766_50770 = 0;var i__50767_50771 = 0;while(true){
if((i__50767_50771 < count__50766_50770))
{var node_50772 = cljs.core._nth.call(null,chunk__50765_50769,i__50767_50771);goog.dom.setTextContent(node_50772,value);
{
var G__50773 = seq__50764_50768;
var G__50774 = chunk__50765_50769;
var G__50775 = count__50766_50770;
var G__50776 = (i__50767_50771 + 1);
seq__50764_50768 = G__50773;
chunk__50765_50769 = G__50774;
count__50766_50770 = G__50775;
i__50767_50771 = G__50776;
continue;
}
} else
{var temp__4092__auto___50777 = cljs.core.seq.call(null,seq__50764_50768);if(temp__4092__auto___50777)
{var seq__50764_50778__$1 = temp__4092__auto___50777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50764_50778__$1))
{var c__4189__auto___50779 = cljs.core.chunk_first.call(null,seq__50764_50778__$1);{
var G__50780 = cljs.core.chunk_rest.call(null,seq__50764_50778__$1);
var G__50781 = c__4189__auto___50779;
var G__50782 = cljs.core.count.call(null,c__4189__auto___50779);
var G__50783 = 0;
seq__50764_50768 = G__50780;
chunk__50765_50769 = G__50781;
count__50766_50770 = G__50782;
i__50767_50771 = G__50783;
continue;
}
} else
{var node_50784 = cljs.core.first.call(null,seq__50764_50778__$1);goog.dom.setTextContent(node_50784,value);
{
var G__50785 = cljs.core.next.call(null,seq__50764_50778__$1);
var G__50786 = null;
var G__50787 = 0;
var G__50788 = 0;
seq__50764_50768 = G__50785;
chunk__50765_50769 = G__50786;
count__50766_50770 = G__50787;
i__50767_50771 = G__50788;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__50793_50797 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50794_50798 = null;var count__50795_50799 = 0;var i__50796_50800 = 0;while(true){
if((i__50796_50800 < count__50795_50799))
{var node_50801 = cljs.core._nth.call(null,chunk__50794_50798,i__50796_50800);goog.dom.forms.setValue(node_50801,value);
{
var G__50802 = seq__50793_50797;
var G__50803 = chunk__50794_50798;
var G__50804 = count__50795_50799;
var G__50805 = (i__50796_50800 + 1);
seq__50793_50797 = G__50802;
chunk__50794_50798 = G__50803;
count__50795_50799 = G__50804;
i__50796_50800 = G__50805;
continue;
}
} else
{var temp__4092__auto___50806 = cljs.core.seq.call(null,seq__50793_50797);if(temp__4092__auto___50806)
{var seq__50793_50807__$1 = temp__4092__auto___50806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50793_50807__$1))
{var c__4189__auto___50808 = cljs.core.chunk_first.call(null,seq__50793_50807__$1);{
var G__50809 = cljs.core.chunk_rest.call(null,seq__50793_50807__$1);
var G__50810 = c__4189__auto___50808;
var G__50811 = cljs.core.count.call(null,c__4189__auto___50808);
var G__50812 = 0;
seq__50793_50797 = G__50809;
chunk__50794_50798 = G__50810;
count__50795_50799 = G__50811;
i__50796_50800 = G__50812;
continue;
}
} else
{var node_50813 = cljs.core.first.call(null,seq__50793_50807__$1);goog.dom.forms.setValue(node_50813,value);
{
var G__50814 = cljs.core.next.call(null,seq__50793_50807__$1);
var G__50815 = null;
var G__50816 = 0;
var G__50817 = 0;
seq__50793_50797 = G__50814;
chunk__50794_50798 = G__50815;
count__50795_50799 = G__50816;
i__50796_50800 = G__50817;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_50828 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__50824_50829 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50825_50830 = null;var count__50826_50831 = 0;var i__50827_50832 = 0;while(true){
if((i__50827_50832 < count__50826_50831))
{var node_50833 = cljs.core._nth.call(null,chunk__50825_50830,i__50827_50832);node_50833.innerHTML = value_50828;
{
var G__50834 = seq__50824_50829;
var G__50835 = chunk__50825_50830;
var G__50836 = count__50826_50831;
var G__50837 = (i__50827_50832 + 1);
seq__50824_50829 = G__50834;
chunk__50825_50830 = G__50835;
count__50826_50831 = G__50836;
i__50827_50832 = G__50837;
continue;
}
} else
{var temp__4092__auto___50838 = cljs.core.seq.call(null,seq__50824_50829);if(temp__4092__auto___50838)
{var seq__50824_50839__$1 = temp__4092__auto___50838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50824_50839__$1))
{var c__4189__auto___50840 = cljs.core.chunk_first.call(null,seq__50824_50839__$1);{
var G__50841 = cljs.core.chunk_rest.call(null,seq__50824_50839__$1);
var G__50842 = c__4189__auto___50840;
var G__50843 = cljs.core.count.call(null,c__4189__auto___50840);
var G__50844 = 0;
seq__50824_50829 = G__50841;
chunk__50825_50830 = G__50842;
count__50826_50831 = G__50843;
i__50827_50832 = G__50844;
continue;
}
} else
{var node_50845 = cljs.core.first.call(null,seq__50824_50839__$1);node_50845.innerHTML = value_50828;
{
var G__50846 = cljs.core.next.call(null,seq__50824_50839__$1);
var G__50847 = null;
var G__50848 = 0;
var G__50849 = 0;
seq__50824_50829 = G__50846;
chunk__50825_50830 = G__50847;
count__50826_50831 = G__50848;
i__50827_50832 = G__50849;
continue;
}
}
} else
{}
}
break;
}
}catch (e50823){if((e50823 instanceof Error))
{var e_50850 = e50823;domina.replace_children_BANG_.call(null,content,value_50828);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50823;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__50857_50861 = cljs.core.seq.call(null,children);var chunk__50858_50862 = null;var count__50859_50863 = 0;var i__50860_50864 = 0;while(true){
if((i__50860_50864 < count__50859_50863))
{var child_50865 = cljs.core._nth.call(null,chunk__50858_50862,i__50860_50864);frag.appendChild(child_50865);
{
var G__50866 = seq__50857_50861;
var G__50867 = chunk__50858_50862;
var G__50868 = count__50859_50863;
var G__50869 = (i__50860_50864 + 1);
seq__50857_50861 = G__50866;
chunk__50858_50862 = G__50867;
count__50859_50863 = G__50868;
i__50860_50864 = G__50869;
continue;
}
} else
{var temp__4092__auto___50870 = cljs.core.seq.call(null,seq__50857_50861);if(temp__4092__auto___50870)
{var seq__50857_50871__$1 = temp__4092__auto___50870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50857_50871__$1))
{var c__4189__auto___50872 = cljs.core.chunk_first.call(null,seq__50857_50871__$1);{
var G__50873 = cljs.core.chunk_rest.call(null,seq__50857_50871__$1);
var G__50874 = c__4189__auto___50872;
var G__50875 = cljs.core.count.call(null,c__4189__auto___50872);
var G__50876 = 0;
seq__50857_50861 = G__50873;
chunk__50858_50862 = G__50874;
count__50859_50863 = G__50875;
i__50860_50864 = G__50876;
continue;
}
} else
{var child_50877 = cljs.core.first.call(null,seq__50857_50871__$1);frag.appendChild(child_50877);
{
var G__50878 = cljs.core.next.call(null,seq__50857_50871__$1);
var G__50879 = null;
var G__50880 = 0;
var G__50881 = 0;
seq__50857_50861 = G__50878;
chunk__50858_50862 = G__50879;
count__50859_50863 = G__50880;
i__50860_50864 = G__50881;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__50851_SHARP_,p2__50852_SHARP_){return f.call(null,p1__50851_SHARP_,p2__50852_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
{if((function (){var G__50883 = list_thing;if(G__50883)
{var bit__4091__auto__ = (G__50883.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50883.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50883.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50883);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50883);
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
{if((function (){var G__50884 = content;if(G__50884)
{var bit__4091__auto__ = (G__50884.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50884.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50884.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50884);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50884);
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
{if((function (){var G__50885 = content;if(G__50885)
{var bit__4091__auto__ = (G__50885.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50885.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50885.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50885);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50885);
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
