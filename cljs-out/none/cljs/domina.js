// Compiled by ClojureScript 0.0-2138
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
var opt_wrapper_16509 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16510 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16511 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16510,table_section_wrapper_16510,opt_wrapper_16509,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16511,table_section_wrapper_16510,cell_wrapper_16511,opt_wrapper_16509,table_section_wrapper_16510,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16510]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16516 = cljs.core.seq.call(null,tbody);var chunk__16517 = null;var count__16518 = 0;var i__16519 = 0;while(true){
if((i__16519 < count__16518))
{var child = cljs.core._nth.call(null,chunk__16517,i__16519);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16520 = seq__16516;
var G__16521 = chunk__16517;
var G__16522 = count__16518;
var G__16523 = (i__16519 + 1);
seq__16516 = G__16520;
chunk__16517 = G__16521;
count__16518 = G__16522;
i__16519 = G__16523;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16516);if(temp__4092__auto__)
{var seq__16516__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16516__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16516__$1);{
var G__16524 = cljs.core.chunk_rest.call(null,seq__16516__$1);
var G__16525 = c__4148__auto__;
var G__16526 = cljs.core.count.call(null,c__4148__auto__);
var G__16527 = 0;
seq__16516 = G__16524;
chunk__16517 = G__16525;
count__16518 = G__16526;
i__16519 = G__16527;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16516__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16528 = cljs.core.next.call(null,seq__16516__$1);
var G__16529 = null;
var G__16530 = 0;
var G__16531 = 0;
seq__16516 = G__16528;
chunk__16517 = G__16529;
count__16518 = G__16530;
i__16519 = G__16531;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16533 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16533,0,null);var start_wrap = cljs.core.nth.call(null,vec__16533,1,null);var end_wrap = cljs.core.nth.call(null,vec__16533,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16534 = wrapper.lastChild;
var G__16535 = (level - 1);
wrapper = G__16534;
level = G__16535;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj16537 = {};return obj16537;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__16538){
var mesg = cljs.core.seq(arglist__16538);
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
log.cljs$lang$applyTo = (function (arglist__16539){
var mesg = cljs.core.seq(arglist__16539);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16540){
var contents = cljs.core.seq(arglist__16540);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16541_SHARP_){return p1__16541_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16542_SHARP_,p2__16543_SHARP_){return goog.dom.insertChildAt(p1__16542_SHARP_,p2__16543_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16545_SHARP_,p2__16544_SHARP_){return goog.dom.insertSiblingBefore(p2__16544_SHARP_,p1__16545_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16547_SHARP_,p2__16546_SHARP_){return goog.dom.insertSiblingAfter(p2__16546_SHARP_,p1__16547_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16549_SHARP_,p2__16548_SHARP_){return goog.dom.replaceNode(p2__16548_SHARP_,p1__16549_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16554_16558 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16555_16559 = null;var count__16556_16560 = 0;var i__16557_16561 = 0;while(true){
if((i__16557_16561 < count__16556_16560))
{var n_16562 = cljs.core._nth.call(null,chunk__16555_16559,i__16557_16561);goog.style.setStyle(n_16562,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16563 = seq__16554_16558;
var G__16564 = chunk__16555_16559;
var G__16565 = count__16556_16560;
var G__16566 = (i__16557_16561 + 1);
seq__16554_16558 = G__16563;
chunk__16555_16559 = G__16564;
count__16556_16560 = G__16565;
i__16557_16561 = G__16566;
continue;
}
} else
{var temp__4092__auto___16567 = cljs.core.seq.call(null,seq__16554_16558);if(temp__4092__auto___16567)
{var seq__16554_16568__$1 = temp__4092__auto___16567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16554_16568__$1))
{var c__4148__auto___16569 = cljs.core.chunk_first.call(null,seq__16554_16568__$1);{
var G__16570 = cljs.core.chunk_rest.call(null,seq__16554_16568__$1);
var G__16571 = c__4148__auto___16569;
var G__16572 = cljs.core.count.call(null,c__4148__auto___16569);
var G__16573 = 0;
seq__16554_16558 = G__16570;
chunk__16555_16559 = G__16571;
count__16556_16560 = G__16572;
i__16557_16561 = G__16573;
continue;
}
} else
{var n_16574 = cljs.core.first.call(null,seq__16554_16568__$1);goog.style.setStyle(n_16574,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16575 = cljs.core.next.call(null,seq__16554_16568__$1);
var G__16576 = null;
var G__16577 = 0;
var G__16578 = 0;
seq__16554_16558 = G__16575;
chunk__16555_16559 = G__16576;
count__16556_16560 = G__16577;
i__16557_16561 = G__16578;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16579){
var content = cljs.core.first(arglist__16579);
arglist__16579 = cljs.core.next(arglist__16579);
var name = cljs.core.first(arglist__16579);
var value = cljs.core.rest(arglist__16579);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16584_16588 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16585_16589 = null;var count__16586_16590 = 0;var i__16587_16591 = 0;while(true){
if((i__16587_16591 < count__16586_16590))
{var n_16592 = cljs.core._nth.call(null,chunk__16585_16589,i__16587_16591);n_16592.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16593 = seq__16584_16588;
var G__16594 = chunk__16585_16589;
var G__16595 = count__16586_16590;
var G__16596 = (i__16587_16591 + 1);
seq__16584_16588 = G__16593;
chunk__16585_16589 = G__16594;
count__16586_16590 = G__16595;
i__16587_16591 = G__16596;
continue;
}
} else
{var temp__4092__auto___16597 = cljs.core.seq.call(null,seq__16584_16588);if(temp__4092__auto___16597)
{var seq__16584_16598__$1 = temp__4092__auto___16597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16584_16598__$1))
{var c__4148__auto___16599 = cljs.core.chunk_first.call(null,seq__16584_16598__$1);{
var G__16600 = cljs.core.chunk_rest.call(null,seq__16584_16598__$1);
var G__16601 = c__4148__auto___16599;
var G__16602 = cljs.core.count.call(null,c__4148__auto___16599);
var G__16603 = 0;
seq__16584_16588 = G__16600;
chunk__16585_16589 = G__16601;
count__16586_16590 = G__16602;
i__16587_16591 = G__16603;
continue;
}
} else
{var n_16604 = cljs.core.first.call(null,seq__16584_16598__$1);n_16604.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16605 = cljs.core.next.call(null,seq__16584_16598__$1);
var G__16606 = null;
var G__16607 = 0;
var G__16608 = 0;
seq__16584_16588 = G__16605;
chunk__16585_16589 = G__16606;
count__16586_16590 = G__16607;
i__16587_16591 = G__16608;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16609){
var content = cljs.core.first(arglist__16609);
arglist__16609 = cljs.core.next(arglist__16609);
var name = cljs.core.first(arglist__16609);
var value = cljs.core.rest(arglist__16609);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16614_16618 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16615_16619 = null;var count__16616_16620 = 0;var i__16617_16621 = 0;while(true){
if((i__16617_16621 < count__16616_16620))
{var n_16622 = cljs.core._nth.call(null,chunk__16615_16619,i__16617_16621);n_16622.removeAttribute(cljs.core.name.call(null,name));
{
var G__16623 = seq__16614_16618;
var G__16624 = chunk__16615_16619;
var G__16625 = count__16616_16620;
var G__16626 = (i__16617_16621 + 1);
seq__16614_16618 = G__16623;
chunk__16615_16619 = G__16624;
count__16616_16620 = G__16625;
i__16617_16621 = G__16626;
continue;
}
} else
{var temp__4092__auto___16627 = cljs.core.seq.call(null,seq__16614_16618);if(temp__4092__auto___16627)
{var seq__16614_16628__$1 = temp__4092__auto___16627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16614_16628__$1))
{var c__4148__auto___16629 = cljs.core.chunk_first.call(null,seq__16614_16628__$1);{
var G__16630 = cljs.core.chunk_rest.call(null,seq__16614_16628__$1);
var G__16631 = c__4148__auto___16629;
var G__16632 = cljs.core.count.call(null,c__4148__auto___16629);
var G__16633 = 0;
seq__16614_16618 = G__16630;
chunk__16615_16619 = G__16631;
count__16616_16620 = G__16632;
i__16617_16621 = G__16633;
continue;
}
} else
{var n_16634 = cljs.core.first.call(null,seq__16614_16628__$1);n_16634.removeAttribute(cljs.core.name.call(null,name));
{
var G__16635 = cljs.core.next.call(null,seq__16614_16628__$1);
var G__16636 = null;
var G__16637 = 0;
var G__16638 = 0;
seq__16614_16618 = G__16635;
chunk__16615_16619 = G__16636;
count__16616_16620 = G__16637;
i__16617_16621 = G__16638;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16640 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16640,0,null);var v = cljs.core.nth.call(null,vec__16640,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16641_SHARP_){var attr = attrs__$1.item(p1__16641_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16648_16654 = cljs.core.seq.call(null,styles);var chunk__16649_16655 = null;var count__16650_16656 = 0;var i__16651_16657 = 0;while(true){
if((i__16651_16657 < count__16650_16656))
{var vec__16652_16658 = cljs.core._nth.call(null,chunk__16649_16655,i__16651_16657);var name_16659 = cljs.core.nth.call(null,vec__16652_16658,0,null);var value_16660 = cljs.core.nth.call(null,vec__16652_16658,1,null);domina.set_style_BANG_.call(null,content,name_16659,value_16660);
{
var G__16661 = seq__16648_16654;
var G__16662 = chunk__16649_16655;
var G__16663 = count__16650_16656;
var G__16664 = (i__16651_16657 + 1);
seq__16648_16654 = G__16661;
chunk__16649_16655 = G__16662;
count__16650_16656 = G__16663;
i__16651_16657 = G__16664;
continue;
}
} else
{var temp__4092__auto___16665 = cljs.core.seq.call(null,seq__16648_16654);if(temp__4092__auto___16665)
{var seq__16648_16666__$1 = temp__4092__auto___16665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16648_16666__$1))
{var c__4148__auto___16667 = cljs.core.chunk_first.call(null,seq__16648_16666__$1);{
var G__16668 = cljs.core.chunk_rest.call(null,seq__16648_16666__$1);
var G__16669 = c__4148__auto___16667;
var G__16670 = cljs.core.count.call(null,c__4148__auto___16667);
var G__16671 = 0;
seq__16648_16654 = G__16668;
chunk__16649_16655 = G__16669;
count__16650_16656 = G__16670;
i__16651_16657 = G__16671;
continue;
}
} else
{var vec__16653_16672 = cljs.core.first.call(null,seq__16648_16666__$1);var name_16673 = cljs.core.nth.call(null,vec__16653_16672,0,null);var value_16674 = cljs.core.nth.call(null,vec__16653_16672,1,null);domina.set_style_BANG_.call(null,content,name_16673,value_16674);
{
var G__16675 = cljs.core.next.call(null,seq__16648_16666__$1);
var G__16676 = null;
var G__16677 = 0;
var G__16678 = 0;
seq__16648_16654 = G__16675;
chunk__16649_16655 = G__16676;
count__16650_16656 = G__16677;
i__16651_16657 = G__16678;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16685_16691 = cljs.core.seq.call(null,attrs);var chunk__16686_16692 = null;var count__16687_16693 = 0;var i__16688_16694 = 0;while(true){
if((i__16688_16694 < count__16687_16693))
{var vec__16689_16695 = cljs.core._nth.call(null,chunk__16686_16692,i__16688_16694);var name_16696 = cljs.core.nth.call(null,vec__16689_16695,0,null);var value_16697 = cljs.core.nth.call(null,vec__16689_16695,1,null);domina.set_attr_BANG_.call(null,content,name_16696,value_16697);
{
var G__16698 = seq__16685_16691;
var G__16699 = chunk__16686_16692;
var G__16700 = count__16687_16693;
var G__16701 = (i__16688_16694 + 1);
seq__16685_16691 = G__16698;
chunk__16686_16692 = G__16699;
count__16687_16693 = G__16700;
i__16688_16694 = G__16701;
continue;
}
} else
{var temp__4092__auto___16702 = cljs.core.seq.call(null,seq__16685_16691);if(temp__4092__auto___16702)
{var seq__16685_16703__$1 = temp__4092__auto___16702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16685_16703__$1))
{var c__4148__auto___16704 = cljs.core.chunk_first.call(null,seq__16685_16703__$1);{
var G__16705 = cljs.core.chunk_rest.call(null,seq__16685_16703__$1);
var G__16706 = c__4148__auto___16704;
var G__16707 = cljs.core.count.call(null,c__4148__auto___16704);
var G__16708 = 0;
seq__16685_16691 = G__16705;
chunk__16686_16692 = G__16706;
count__16687_16693 = G__16707;
i__16688_16694 = G__16708;
continue;
}
} else
{var vec__16690_16709 = cljs.core.first.call(null,seq__16685_16703__$1);var name_16710 = cljs.core.nth.call(null,vec__16690_16709,0,null);var value_16711 = cljs.core.nth.call(null,vec__16690_16709,1,null);domina.set_attr_BANG_.call(null,content,name_16710,value_16711);
{
var G__16712 = cljs.core.next.call(null,seq__16685_16703__$1);
var G__16713 = null;
var G__16714 = 0;
var G__16715 = 0;
seq__16685_16691 = G__16712;
chunk__16686_16692 = G__16713;
count__16687_16693 = G__16714;
i__16688_16694 = G__16715;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16720_16724 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16721_16725 = null;var count__16722_16726 = 0;var i__16723_16727 = 0;while(true){
if((i__16723_16727 < count__16722_16726))
{var node_16728 = cljs.core._nth.call(null,chunk__16721_16725,i__16723_16727);goog.dom.classes.add(node_16728,class$);
{
var G__16729 = seq__16720_16724;
var G__16730 = chunk__16721_16725;
var G__16731 = count__16722_16726;
var G__16732 = (i__16723_16727 + 1);
seq__16720_16724 = G__16729;
chunk__16721_16725 = G__16730;
count__16722_16726 = G__16731;
i__16723_16727 = G__16732;
continue;
}
} else
{var temp__4092__auto___16733 = cljs.core.seq.call(null,seq__16720_16724);if(temp__4092__auto___16733)
{var seq__16720_16734__$1 = temp__4092__auto___16733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16720_16734__$1))
{var c__4148__auto___16735 = cljs.core.chunk_first.call(null,seq__16720_16734__$1);{
var G__16736 = cljs.core.chunk_rest.call(null,seq__16720_16734__$1);
var G__16737 = c__4148__auto___16735;
var G__16738 = cljs.core.count.call(null,c__4148__auto___16735);
var G__16739 = 0;
seq__16720_16724 = G__16736;
chunk__16721_16725 = G__16737;
count__16722_16726 = G__16738;
i__16723_16727 = G__16739;
continue;
}
} else
{var node_16740 = cljs.core.first.call(null,seq__16720_16734__$1);goog.dom.classes.add(node_16740,class$);
{
var G__16741 = cljs.core.next.call(null,seq__16720_16734__$1);
var G__16742 = null;
var G__16743 = 0;
var G__16744 = 0;
seq__16720_16724 = G__16741;
chunk__16721_16725 = G__16742;
count__16722_16726 = G__16743;
i__16723_16727 = G__16744;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16749_16753 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16750_16754 = null;var count__16751_16755 = 0;var i__16752_16756 = 0;while(true){
if((i__16752_16756 < count__16751_16755))
{var node_16757 = cljs.core._nth.call(null,chunk__16750_16754,i__16752_16756);goog.dom.classes.remove(node_16757,class$);
{
var G__16758 = seq__16749_16753;
var G__16759 = chunk__16750_16754;
var G__16760 = count__16751_16755;
var G__16761 = (i__16752_16756 + 1);
seq__16749_16753 = G__16758;
chunk__16750_16754 = G__16759;
count__16751_16755 = G__16760;
i__16752_16756 = G__16761;
continue;
}
} else
{var temp__4092__auto___16762 = cljs.core.seq.call(null,seq__16749_16753);if(temp__4092__auto___16762)
{var seq__16749_16763__$1 = temp__4092__auto___16762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16749_16763__$1))
{var c__4148__auto___16764 = cljs.core.chunk_first.call(null,seq__16749_16763__$1);{
var G__16765 = cljs.core.chunk_rest.call(null,seq__16749_16763__$1);
var G__16766 = c__4148__auto___16764;
var G__16767 = cljs.core.count.call(null,c__4148__auto___16764);
var G__16768 = 0;
seq__16749_16753 = G__16765;
chunk__16750_16754 = G__16766;
count__16751_16755 = G__16767;
i__16752_16756 = G__16768;
continue;
}
} else
{var node_16769 = cljs.core.first.call(null,seq__16749_16763__$1);goog.dom.classes.remove(node_16769,class$);
{
var G__16770 = cljs.core.next.call(null,seq__16749_16763__$1);
var G__16771 = null;
var G__16772 = 0;
var G__16773 = 0;
seq__16749_16753 = G__16770;
chunk__16750_16754 = G__16771;
count__16751_16755 = G__16772;
i__16752_16756 = G__16773;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16778_16782 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16779_16783 = null;var count__16780_16784 = 0;var i__16781_16785 = 0;while(true){
if((i__16781_16785 < count__16780_16784))
{var node_16786 = cljs.core._nth.call(null,chunk__16779_16783,i__16781_16785);goog.dom.classes.toggle(node_16786,class$);
{
var G__16787 = seq__16778_16782;
var G__16788 = chunk__16779_16783;
var G__16789 = count__16780_16784;
var G__16790 = (i__16781_16785 + 1);
seq__16778_16782 = G__16787;
chunk__16779_16783 = G__16788;
count__16780_16784 = G__16789;
i__16781_16785 = G__16790;
continue;
}
} else
{var temp__4092__auto___16791 = cljs.core.seq.call(null,seq__16778_16782);if(temp__4092__auto___16791)
{var seq__16778_16792__$1 = temp__4092__auto___16791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16778_16792__$1))
{var c__4148__auto___16793 = cljs.core.chunk_first.call(null,seq__16778_16792__$1);{
var G__16794 = cljs.core.chunk_rest.call(null,seq__16778_16792__$1);
var G__16795 = c__4148__auto___16793;
var G__16796 = cljs.core.count.call(null,c__4148__auto___16793);
var G__16797 = 0;
seq__16778_16782 = G__16794;
chunk__16779_16783 = G__16795;
count__16780_16784 = G__16796;
i__16781_16785 = G__16797;
continue;
}
} else
{var node_16798 = cljs.core.first.call(null,seq__16778_16792__$1);goog.dom.classes.toggle(node_16798,class$);
{
var G__16799 = cljs.core.next.call(null,seq__16778_16792__$1);
var G__16800 = null;
var G__16801 = 0;
var G__16802 = 0;
seq__16778_16782 = G__16799;
chunk__16779_16783 = G__16800;
count__16780_16784 = G__16801;
i__16781_16785 = G__16802;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16811__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16807_16812 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16808_16813 = null;var count__16809_16814 = 0;var i__16810_16815 = 0;while(true){
if((i__16810_16815 < count__16809_16814))
{var node_16816 = cljs.core._nth.call(null,chunk__16808_16813,i__16810_16815);goog.dom.classes.set(node_16816,classes_16811__$1);
{
var G__16817 = seq__16807_16812;
var G__16818 = chunk__16808_16813;
var G__16819 = count__16809_16814;
var G__16820 = (i__16810_16815 + 1);
seq__16807_16812 = G__16817;
chunk__16808_16813 = G__16818;
count__16809_16814 = G__16819;
i__16810_16815 = G__16820;
continue;
}
} else
{var temp__4092__auto___16821 = cljs.core.seq.call(null,seq__16807_16812);if(temp__4092__auto___16821)
{var seq__16807_16822__$1 = temp__4092__auto___16821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16807_16822__$1))
{var c__4148__auto___16823 = cljs.core.chunk_first.call(null,seq__16807_16822__$1);{
var G__16824 = cljs.core.chunk_rest.call(null,seq__16807_16822__$1);
var G__16825 = c__4148__auto___16823;
var G__16826 = cljs.core.count.call(null,c__4148__auto___16823);
var G__16827 = 0;
seq__16807_16812 = G__16824;
chunk__16808_16813 = G__16825;
count__16809_16814 = G__16826;
i__16810_16815 = G__16827;
continue;
}
} else
{var node_16828 = cljs.core.first.call(null,seq__16807_16822__$1);goog.dom.classes.set(node_16828,classes_16811__$1);
{
var G__16829 = cljs.core.next.call(null,seq__16807_16822__$1);
var G__16830 = null;
var G__16831 = 0;
var G__16832 = 0;
seq__16807_16812 = G__16829;
chunk__16808_16813 = G__16830;
count__16809_16814 = G__16831;
i__16810_16815 = G__16832;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16837_16841 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16838_16842 = null;var count__16839_16843 = 0;var i__16840_16844 = 0;while(true){
if((i__16840_16844 < count__16839_16843))
{var node_16845 = cljs.core._nth.call(null,chunk__16838_16842,i__16840_16844);goog.dom.setTextContent(node_16845,value);
{
var G__16846 = seq__16837_16841;
var G__16847 = chunk__16838_16842;
var G__16848 = count__16839_16843;
var G__16849 = (i__16840_16844 + 1);
seq__16837_16841 = G__16846;
chunk__16838_16842 = G__16847;
count__16839_16843 = G__16848;
i__16840_16844 = G__16849;
continue;
}
} else
{var temp__4092__auto___16850 = cljs.core.seq.call(null,seq__16837_16841);if(temp__4092__auto___16850)
{var seq__16837_16851__$1 = temp__4092__auto___16850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16837_16851__$1))
{var c__4148__auto___16852 = cljs.core.chunk_first.call(null,seq__16837_16851__$1);{
var G__16853 = cljs.core.chunk_rest.call(null,seq__16837_16851__$1);
var G__16854 = c__4148__auto___16852;
var G__16855 = cljs.core.count.call(null,c__4148__auto___16852);
var G__16856 = 0;
seq__16837_16841 = G__16853;
chunk__16838_16842 = G__16854;
count__16839_16843 = G__16855;
i__16840_16844 = G__16856;
continue;
}
} else
{var node_16857 = cljs.core.first.call(null,seq__16837_16851__$1);goog.dom.setTextContent(node_16857,value);
{
var G__16858 = cljs.core.next.call(null,seq__16837_16851__$1);
var G__16859 = null;
var G__16860 = 0;
var G__16861 = 0;
seq__16837_16841 = G__16858;
chunk__16838_16842 = G__16859;
count__16839_16843 = G__16860;
i__16840_16844 = G__16861;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16866_16870 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16867_16871 = null;var count__16868_16872 = 0;var i__16869_16873 = 0;while(true){
if((i__16869_16873 < count__16868_16872))
{var node_16874 = cljs.core._nth.call(null,chunk__16867_16871,i__16869_16873);goog.dom.forms.setValue(node_16874,value);
{
var G__16875 = seq__16866_16870;
var G__16876 = chunk__16867_16871;
var G__16877 = count__16868_16872;
var G__16878 = (i__16869_16873 + 1);
seq__16866_16870 = G__16875;
chunk__16867_16871 = G__16876;
count__16868_16872 = G__16877;
i__16869_16873 = G__16878;
continue;
}
} else
{var temp__4092__auto___16879 = cljs.core.seq.call(null,seq__16866_16870);if(temp__4092__auto___16879)
{var seq__16866_16880__$1 = temp__4092__auto___16879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16866_16880__$1))
{var c__4148__auto___16881 = cljs.core.chunk_first.call(null,seq__16866_16880__$1);{
var G__16882 = cljs.core.chunk_rest.call(null,seq__16866_16880__$1);
var G__16883 = c__4148__auto___16881;
var G__16884 = cljs.core.count.call(null,c__4148__auto___16881);
var G__16885 = 0;
seq__16866_16870 = G__16882;
chunk__16867_16871 = G__16883;
count__16868_16872 = G__16884;
i__16869_16873 = G__16885;
continue;
}
} else
{var node_16886 = cljs.core.first.call(null,seq__16866_16880__$1);goog.dom.forms.setValue(node_16886,value);
{
var G__16887 = cljs.core.next.call(null,seq__16866_16880__$1);
var G__16888 = null;
var G__16889 = 0;
var G__16890 = 0;
seq__16866_16870 = G__16887;
chunk__16867_16871 = G__16888;
count__16868_16872 = G__16889;
i__16869_16873 = G__16890;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_16901 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16897_16902 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16898_16903 = null;var count__16899_16904 = 0;var i__16900_16905 = 0;while(true){
if((i__16900_16905 < count__16899_16904))
{var node_16906 = cljs.core._nth.call(null,chunk__16898_16903,i__16900_16905);node_16906.innerHTML = value_16901;
{
var G__16907 = seq__16897_16902;
var G__16908 = chunk__16898_16903;
var G__16909 = count__16899_16904;
var G__16910 = (i__16900_16905 + 1);
seq__16897_16902 = G__16907;
chunk__16898_16903 = G__16908;
count__16899_16904 = G__16909;
i__16900_16905 = G__16910;
continue;
}
} else
{var temp__4092__auto___16911 = cljs.core.seq.call(null,seq__16897_16902);if(temp__4092__auto___16911)
{var seq__16897_16912__$1 = temp__4092__auto___16911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16897_16912__$1))
{var c__4148__auto___16913 = cljs.core.chunk_first.call(null,seq__16897_16912__$1);{
var G__16914 = cljs.core.chunk_rest.call(null,seq__16897_16912__$1);
var G__16915 = c__4148__auto___16913;
var G__16916 = cljs.core.count.call(null,c__4148__auto___16913);
var G__16917 = 0;
seq__16897_16902 = G__16914;
chunk__16898_16903 = G__16915;
count__16899_16904 = G__16916;
i__16900_16905 = G__16917;
continue;
}
} else
{var node_16918 = cljs.core.first.call(null,seq__16897_16912__$1);node_16918.innerHTML = value_16901;
{
var G__16919 = cljs.core.next.call(null,seq__16897_16912__$1);
var G__16920 = null;
var G__16921 = 0;
var G__16922 = 0;
seq__16897_16902 = G__16919;
chunk__16898_16903 = G__16920;
count__16899_16904 = G__16921;
i__16900_16905 = G__16922;
continue;
}
}
} else
{}
}
break;
}
}catch (e16896){if((e16896 instanceof Error))
{var e_16923 = e16896;domina.replace_children_BANG_.call(null,content,value_16901);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16896;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16930_16934 = cljs.core.seq.call(null,children);var chunk__16931_16935 = null;var count__16932_16936 = 0;var i__16933_16937 = 0;while(true){
if((i__16933_16937 < count__16932_16936))
{var child_16938 = cljs.core._nth.call(null,chunk__16931_16935,i__16933_16937);frag.appendChild(child_16938);
{
var G__16939 = seq__16930_16934;
var G__16940 = chunk__16931_16935;
var G__16941 = count__16932_16936;
var G__16942 = (i__16933_16937 + 1);
seq__16930_16934 = G__16939;
chunk__16931_16935 = G__16940;
count__16932_16936 = G__16941;
i__16933_16937 = G__16942;
continue;
}
} else
{var temp__4092__auto___16943 = cljs.core.seq.call(null,seq__16930_16934);if(temp__4092__auto___16943)
{var seq__16930_16944__$1 = temp__4092__auto___16943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16930_16944__$1))
{var c__4148__auto___16945 = cljs.core.chunk_first.call(null,seq__16930_16944__$1);{
var G__16946 = cljs.core.chunk_rest.call(null,seq__16930_16944__$1);
var G__16947 = c__4148__auto___16945;
var G__16948 = cljs.core.count.call(null,c__4148__auto___16945);
var G__16949 = 0;
seq__16930_16934 = G__16946;
chunk__16931_16935 = G__16947;
count__16932_16936 = G__16948;
i__16933_16937 = G__16949;
continue;
}
} else
{var child_16950 = cljs.core.first.call(null,seq__16930_16944__$1);frag.appendChild(child_16950);
{
var G__16951 = cljs.core.next.call(null,seq__16930_16944__$1);
var G__16952 = null;
var G__16953 = 0;
var G__16954 = 0;
seq__16930_16934 = G__16951;
chunk__16931_16935 = G__16952;
count__16932_16936 = G__16953;
i__16933_16937 = G__16954;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16924_SHARP_,p2__16925_SHARP_){return f.call(null,p1__16924_SHARP_,p2__16925_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__16956 = list_thing;if(G__16956)
{var bit__4050__auto__ = (G__16956.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16956.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16956.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16956);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16956);
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
{if((function (){var G__16957 = content;if(G__16957)
{var bit__4050__auto__ = (G__16957.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16957.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16957.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16957);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16957);
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
{if((function (){var G__16958 = content;if(G__16958)
{var bit__4050__auto__ = (G__16958.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16958.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16958.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16958);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16958);
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

//# sourceMappingURL=domina.js.map