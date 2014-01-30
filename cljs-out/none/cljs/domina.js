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
var opt_wrapper_16520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16521 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16522 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16521,table_section_wrapper_16521,opt_wrapper_16520,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16522,table_section_wrapper_16521,cell_wrapper_16522,opt_wrapper_16520,table_section_wrapper_16521,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16521]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16527 = cljs.core.seq.call(null,tbody);var chunk__16528 = null;var count__16529 = 0;var i__16530 = 0;while(true){
if((i__16530 < count__16529))
{var child = cljs.core._nth.call(null,chunk__16528,i__16530);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16531 = seq__16527;
var G__16532 = chunk__16528;
var G__16533 = count__16529;
var G__16534 = (i__16530 + 1);
seq__16527 = G__16531;
chunk__16528 = G__16532;
count__16529 = G__16533;
i__16530 = G__16534;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16527);if(temp__4092__auto__)
{var seq__16527__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16527__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16527__$1);{
var G__16535 = cljs.core.chunk_rest.call(null,seq__16527__$1);
var G__16536 = c__4148__auto__;
var G__16537 = cljs.core.count.call(null,c__4148__auto__);
var G__16538 = 0;
seq__16527 = G__16535;
chunk__16528 = G__16536;
count__16529 = G__16537;
i__16530 = G__16538;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16527__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16539 = cljs.core.next.call(null,seq__16527__$1);
var G__16540 = null;
var G__16541 = 0;
var G__16542 = 0;
seq__16527 = G__16539;
chunk__16528 = G__16540;
count__16529 = G__16541;
i__16530 = G__16542;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16544 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16544,0,null);var start_wrap = cljs.core.nth.call(null,vec__16544,1,null);var end_wrap = cljs.core.nth.call(null,vec__16544,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16545 = wrapper.lastChild;
var G__16546 = (level - 1);
wrapper = G__16545;
level = G__16546;
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
domina.DomContent = (function (){var obj16548 = {};return obj16548;
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
log_debug.cljs$lang$applyTo = (function (arglist__16549){
var mesg = cljs.core.seq(arglist__16549);
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
log.cljs$lang$applyTo = (function (arglist__16550){
var mesg = cljs.core.seq(arglist__16550);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16551){
var contents = cljs.core.seq(arglist__16551);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16552_SHARP_){return p1__16552_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16553_SHARP_,p2__16554_SHARP_){return goog.dom.insertChildAt(p1__16553_SHARP_,p2__16554_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16556_SHARP_,p2__16555_SHARP_){return goog.dom.insertSiblingBefore(p2__16555_SHARP_,p1__16556_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16558_SHARP_,p2__16557_SHARP_){return goog.dom.insertSiblingAfter(p2__16557_SHARP_,p1__16558_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16560_SHARP_,p2__16559_SHARP_){return goog.dom.replaceNode(p2__16559_SHARP_,p1__16560_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16565_16569 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16566_16570 = null;var count__16567_16571 = 0;var i__16568_16572 = 0;while(true){
if((i__16568_16572 < count__16567_16571))
{var n_16573 = cljs.core._nth.call(null,chunk__16566_16570,i__16568_16572);goog.style.setStyle(n_16573,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16574 = seq__16565_16569;
var G__16575 = chunk__16566_16570;
var G__16576 = count__16567_16571;
var G__16577 = (i__16568_16572 + 1);
seq__16565_16569 = G__16574;
chunk__16566_16570 = G__16575;
count__16567_16571 = G__16576;
i__16568_16572 = G__16577;
continue;
}
} else
{var temp__4092__auto___16578 = cljs.core.seq.call(null,seq__16565_16569);if(temp__4092__auto___16578)
{var seq__16565_16579__$1 = temp__4092__auto___16578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16565_16579__$1))
{var c__4148__auto___16580 = cljs.core.chunk_first.call(null,seq__16565_16579__$1);{
var G__16581 = cljs.core.chunk_rest.call(null,seq__16565_16579__$1);
var G__16582 = c__4148__auto___16580;
var G__16583 = cljs.core.count.call(null,c__4148__auto___16580);
var G__16584 = 0;
seq__16565_16569 = G__16581;
chunk__16566_16570 = G__16582;
count__16567_16571 = G__16583;
i__16568_16572 = G__16584;
continue;
}
} else
{var n_16585 = cljs.core.first.call(null,seq__16565_16579__$1);goog.style.setStyle(n_16585,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16586 = cljs.core.next.call(null,seq__16565_16579__$1);
var G__16587 = null;
var G__16588 = 0;
var G__16589 = 0;
seq__16565_16569 = G__16586;
chunk__16566_16570 = G__16587;
count__16567_16571 = G__16588;
i__16568_16572 = G__16589;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16590){
var content = cljs.core.first(arglist__16590);
arglist__16590 = cljs.core.next(arglist__16590);
var name = cljs.core.first(arglist__16590);
var value = cljs.core.rest(arglist__16590);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16595_16599 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16596_16600 = null;var count__16597_16601 = 0;var i__16598_16602 = 0;while(true){
if((i__16598_16602 < count__16597_16601))
{var n_16603 = cljs.core._nth.call(null,chunk__16596_16600,i__16598_16602);n_16603.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16604 = seq__16595_16599;
var G__16605 = chunk__16596_16600;
var G__16606 = count__16597_16601;
var G__16607 = (i__16598_16602 + 1);
seq__16595_16599 = G__16604;
chunk__16596_16600 = G__16605;
count__16597_16601 = G__16606;
i__16598_16602 = G__16607;
continue;
}
} else
{var temp__4092__auto___16608 = cljs.core.seq.call(null,seq__16595_16599);if(temp__4092__auto___16608)
{var seq__16595_16609__$1 = temp__4092__auto___16608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16595_16609__$1))
{var c__4148__auto___16610 = cljs.core.chunk_first.call(null,seq__16595_16609__$1);{
var G__16611 = cljs.core.chunk_rest.call(null,seq__16595_16609__$1);
var G__16612 = c__4148__auto___16610;
var G__16613 = cljs.core.count.call(null,c__4148__auto___16610);
var G__16614 = 0;
seq__16595_16599 = G__16611;
chunk__16596_16600 = G__16612;
count__16597_16601 = G__16613;
i__16598_16602 = G__16614;
continue;
}
} else
{var n_16615 = cljs.core.first.call(null,seq__16595_16609__$1);n_16615.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16616 = cljs.core.next.call(null,seq__16595_16609__$1);
var G__16617 = null;
var G__16618 = 0;
var G__16619 = 0;
seq__16595_16599 = G__16616;
chunk__16596_16600 = G__16617;
count__16597_16601 = G__16618;
i__16598_16602 = G__16619;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16620){
var content = cljs.core.first(arglist__16620);
arglist__16620 = cljs.core.next(arglist__16620);
var name = cljs.core.first(arglist__16620);
var value = cljs.core.rest(arglist__16620);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16625_16629 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16626_16630 = null;var count__16627_16631 = 0;var i__16628_16632 = 0;while(true){
if((i__16628_16632 < count__16627_16631))
{var n_16633 = cljs.core._nth.call(null,chunk__16626_16630,i__16628_16632);n_16633.removeAttribute(cljs.core.name.call(null,name));
{
var G__16634 = seq__16625_16629;
var G__16635 = chunk__16626_16630;
var G__16636 = count__16627_16631;
var G__16637 = (i__16628_16632 + 1);
seq__16625_16629 = G__16634;
chunk__16626_16630 = G__16635;
count__16627_16631 = G__16636;
i__16628_16632 = G__16637;
continue;
}
} else
{var temp__4092__auto___16638 = cljs.core.seq.call(null,seq__16625_16629);if(temp__4092__auto___16638)
{var seq__16625_16639__$1 = temp__4092__auto___16638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16625_16639__$1))
{var c__4148__auto___16640 = cljs.core.chunk_first.call(null,seq__16625_16639__$1);{
var G__16641 = cljs.core.chunk_rest.call(null,seq__16625_16639__$1);
var G__16642 = c__4148__auto___16640;
var G__16643 = cljs.core.count.call(null,c__4148__auto___16640);
var G__16644 = 0;
seq__16625_16629 = G__16641;
chunk__16626_16630 = G__16642;
count__16627_16631 = G__16643;
i__16628_16632 = G__16644;
continue;
}
} else
{var n_16645 = cljs.core.first.call(null,seq__16625_16639__$1);n_16645.removeAttribute(cljs.core.name.call(null,name));
{
var G__16646 = cljs.core.next.call(null,seq__16625_16639__$1);
var G__16647 = null;
var G__16648 = 0;
var G__16649 = 0;
seq__16625_16629 = G__16646;
chunk__16626_16630 = G__16647;
count__16627_16631 = G__16648;
i__16628_16632 = G__16649;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16651 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16651,0,null);var v = cljs.core.nth.call(null,vec__16651,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16652_SHARP_){var attr = attrs__$1.item(p1__16652_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16659_16665 = cljs.core.seq.call(null,styles);var chunk__16660_16666 = null;var count__16661_16667 = 0;var i__16662_16668 = 0;while(true){
if((i__16662_16668 < count__16661_16667))
{var vec__16663_16669 = cljs.core._nth.call(null,chunk__16660_16666,i__16662_16668);var name_16670 = cljs.core.nth.call(null,vec__16663_16669,0,null);var value_16671 = cljs.core.nth.call(null,vec__16663_16669,1,null);domina.set_style_BANG_.call(null,content,name_16670,value_16671);
{
var G__16672 = seq__16659_16665;
var G__16673 = chunk__16660_16666;
var G__16674 = count__16661_16667;
var G__16675 = (i__16662_16668 + 1);
seq__16659_16665 = G__16672;
chunk__16660_16666 = G__16673;
count__16661_16667 = G__16674;
i__16662_16668 = G__16675;
continue;
}
} else
{var temp__4092__auto___16676 = cljs.core.seq.call(null,seq__16659_16665);if(temp__4092__auto___16676)
{var seq__16659_16677__$1 = temp__4092__auto___16676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16659_16677__$1))
{var c__4148__auto___16678 = cljs.core.chunk_first.call(null,seq__16659_16677__$1);{
var G__16679 = cljs.core.chunk_rest.call(null,seq__16659_16677__$1);
var G__16680 = c__4148__auto___16678;
var G__16681 = cljs.core.count.call(null,c__4148__auto___16678);
var G__16682 = 0;
seq__16659_16665 = G__16679;
chunk__16660_16666 = G__16680;
count__16661_16667 = G__16681;
i__16662_16668 = G__16682;
continue;
}
} else
{var vec__16664_16683 = cljs.core.first.call(null,seq__16659_16677__$1);var name_16684 = cljs.core.nth.call(null,vec__16664_16683,0,null);var value_16685 = cljs.core.nth.call(null,vec__16664_16683,1,null);domina.set_style_BANG_.call(null,content,name_16684,value_16685);
{
var G__16686 = cljs.core.next.call(null,seq__16659_16677__$1);
var G__16687 = null;
var G__16688 = 0;
var G__16689 = 0;
seq__16659_16665 = G__16686;
chunk__16660_16666 = G__16687;
count__16661_16667 = G__16688;
i__16662_16668 = G__16689;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16696_16702 = cljs.core.seq.call(null,attrs);var chunk__16697_16703 = null;var count__16698_16704 = 0;var i__16699_16705 = 0;while(true){
if((i__16699_16705 < count__16698_16704))
{var vec__16700_16706 = cljs.core._nth.call(null,chunk__16697_16703,i__16699_16705);var name_16707 = cljs.core.nth.call(null,vec__16700_16706,0,null);var value_16708 = cljs.core.nth.call(null,vec__16700_16706,1,null);domina.set_attr_BANG_.call(null,content,name_16707,value_16708);
{
var G__16709 = seq__16696_16702;
var G__16710 = chunk__16697_16703;
var G__16711 = count__16698_16704;
var G__16712 = (i__16699_16705 + 1);
seq__16696_16702 = G__16709;
chunk__16697_16703 = G__16710;
count__16698_16704 = G__16711;
i__16699_16705 = G__16712;
continue;
}
} else
{var temp__4092__auto___16713 = cljs.core.seq.call(null,seq__16696_16702);if(temp__4092__auto___16713)
{var seq__16696_16714__$1 = temp__4092__auto___16713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16696_16714__$1))
{var c__4148__auto___16715 = cljs.core.chunk_first.call(null,seq__16696_16714__$1);{
var G__16716 = cljs.core.chunk_rest.call(null,seq__16696_16714__$1);
var G__16717 = c__4148__auto___16715;
var G__16718 = cljs.core.count.call(null,c__4148__auto___16715);
var G__16719 = 0;
seq__16696_16702 = G__16716;
chunk__16697_16703 = G__16717;
count__16698_16704 = G__16718;
i__16699_16705 = G__16719;
continue;
}
} else
{var vec__16701_16720 = cljs.core.first.call(null,seq__16696_16714__$1);var name_16721 = cljs.core.nth.call(null,vec__16701_16720,0,null);var value_16722 = cljs.core.nth.call(null,vec__16701_16720,1,null);domina.set_attr_BANG_.call(null,content,name_16721,value_16722);
{
var G__16723 = cljs.core.next.call(null,seq__16696_16714__$1);
var G__16724 = null;
var G__16725 = 0;
var G__16726 = 0;
seq__16696_16702 = G__16723;
chunk__16697_16703 = G__16724;
count__16698_16704 = G__16725;
i__16699_16705 = G__16726;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16731_16735 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16732_16736 = null;var count__16733_16737 = 0;var i__16734_16738 = 0;while(true){
if((i__16734_16738 < count__16733_16737))
{var node_16739 = cljs.core._nth.call(null,chunk__16732_16736,i__16734_16738);goog.dom.classes.add(node_16739,class$);
{
var G__16740 = seq__16731_16735;
var G__16741 = chunk__16732_16736;
var G__16742 = count__16733_16737;
var G__16743 = (i__16734_16738 + 1);
seq__16731_16735 = G__16740;
chunk__16732_16736 = G__16741;
count__16733_16737 = G__16742;
i__16734_16738 = G__16743;
continue;
}
} else
{var temp__4092__auto___16744 = cljs.core.seq.call(null,seq__16731_16735);if(temp__4092__auto___16744)
{var seq__16731_16745__$1 = temp__4092__auto___16744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16731_16745__$1))
{var c__4148__auto___16746 = cljs.core.chunk_first.call(null,seq__16731_16745__$1);{
var G__16747 = cljs.core.chunk_rest.call(null,seq__16731_16745__$1);
var G__16748 = c__4148__auto___16746;
var G__16749 = cljs.core.count.call(null,c__4148__auto___16746);
var G__16750 = 0;
seq__16731_16735 = G__16747;
chunk__16732_16736 = G__16748;
count__16733_16737 = G__16749;
i__16734_16738 = G__16750;
continue;
}
} else
{var node_16751 = cljs.core.first.call(null,seq__16731_16745__$1);goog.dom.classes.add(node_16751,class$);
{
var G__16752 = cljs.core.next.call(null,seq__16731_16745__$1);
var G__16753 = null;
var G__16754 = 0;
var G__16755 = 0;
seq__16731_16735 = G__16752;
chunk__16732_16736 = G__16753;
count__16733_16737 = G__16754;
i__16734_16738 = G__16755;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16760_16764 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16761_16765 = null;var count__16762_16766 = 0;var i__16763_16767 = 0;while(true){
if((i__16763_16767 < count__16762_16766))
{var node_16768 = cljs.core._nth.call(null,chunk__16761_16765,i__16763_16767);goog.dom.classes.remove(node_16768,class$);
{
var G__16769 = seq__16760_16764;
var G__16770 = chunk__16761_16765;
var G__16771 = count__16762_16766;
var G__16772 = (i__16763_16767 + 1);
seq__16760_16764 = G__16769;
chunk__16761_16765 = G__16770;
count__16762_16766 = G__16771;
i__16763_16767 = G__16772;
continue;
}
} else
{var temp__4092__auto___16773 = cljs.core.seq.call(null,seq__16760_16764);if(temp__4092__auto___16773)
{var seq__16760_16774__$1 = temp__4092__auto___16773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16760_16774__$1))
{var c__4148__auto___16775 = cljs.core.chunk_first.call(null,seq__16760_16774__$1);{
var G__16776 = cljs.core.chunk_rest.call(null,seq__16760_16774__$1);
var G__16777 = c__4148__auto___16775;
var G__16778 = cljs.core.count.call(null,c__4148__auto___16775);
var G__16779 = 0;
seq__16760_16764 = G__16776;
chunk__16761_16765 = G__16777;
count__16762_16766 = G__16778;
i__16763_16767 = G__16779;
continue;
}
} else
{var node_16780 = cljs.core.first.call(null,seq__16760_16774__$1);goog.dom.classes.remove(node_16780,class$);
{
var G__16781 = cljs.core.next.call(null,seq__16760_16774__$1);
var G__16782 = null;
var G__16783 = 0;
var G__16784 = 0;
seq__16760_16764 = G__16781;
chunk__16761_16765 = G__16782;
count__16762_16766 = G__16783;
i__16763_16767 = G__16784;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16789_16793 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16790_16794 = null;var count__16791_16795 = 0;var i__16792_16796 = 0;while(true){
if((i__16792_16796 < count__16791_16795))
{var node_16797 = cljs.core._nth.call(null,chunk__16790_16794,i__16792_16796);goog.dom.classes.toggle(node_16797,class$);
{
var G__16798 = seq__16789_16793;
var G__16799 = chunk__16790_16794;
var G__16800 = count__16791_16795;
var G__16801 = (i__16792_16796 + 1);
seq__16789_16793 = G__16798;
chunk__16790_16794 = G__16799;
count__16791_16795 = G__16800;
i__16792_16796 = G__16801;
continue;
}
} else
{var temp__4092__auto___16802 = cljs.core.seq.call(null,seq__16789_16793);if(temp__4092__auto___16802)
{var seq__16789_16803__$1 = temp__4092__auto___16802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16789_16803__$1))
{var c__4148__auto___16804 = cljs.core.chunk_first.call(null,seq__16789_16803__$1);{
var G__16805 = cljs.core.chunk_rest.call(null,seq__16789_16803__$1);
var G__16806 = c__4148__auto___16804;
var G__16807 = cljs.core.count.call(null,c__4148__auto___16804);
var G__16808 = 0;
seq__16789_16793 = G__16805;
chunk__16790_16794 = G__16806;
count__16791_16795 = G__16807;
i__16792_16796 = G__16808;
continue;
}
} else
{var node_16809 = cljs.core.first.call(null,seq__16789_16803__$1);goog.dom.classes.toggle(node_16809,class$);
{
var G__16810 = cljs.core.next.call(null,seq__16789_16803__$1);
var G__16811 = null;
var G__16812 = 0;
var G__16813 = 0;
seq__16789_16793 = G__16810;
chunk__16790_16794 = G__16811;
count__16791_16795 = G__16812;
i__16792_16796 = G__16813;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16822__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16818_16823 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16819_16824 = null;var count__16820_16825 = 0;var i__16821_16826 = 0;while(true){
if((i__16821_16826 < count__16820_16825))
{var node_16827 = cljs.core._nth.call(null,chunk__16819_16824,i__16821_16826);goog.dom.classes.set(node_16827,classes_16822__$1);
{
var G__16828 = seq__16818_16823;
var G__16829 = chunk__16819_16824;
var G__16830 = count__16820_16825;
var G__16831 = (i__16821_16826 + 1);
seq__16818_16823 = G__16828;
chunk__16819_16824 = G__16829;
count__16820_16825 = G__16830;
i__16821_16826 = G__16831;
continue;
}
} else
{var temp__4092__auto___16832 = cljs.core.seq.call(null,seq__16818_16823);if(temp__4092__auto___16832)
{var seq__16818_16833__$1 = temp__4092__auto___16832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16818_16833__$1))
{var c__4148__auto___16834 = cljs.core.chunk_first.call(null,seq__16818_16833__$1);{
var G__16835 = cljs.core.chunk_rest.call(null,seq__16818_16833__$1);
var G__16836 = c__4148__auto___16834;
var G__16837 = cljs.core.count.call(null,c__4148__auto___16834);
var G__16838 = 0;
seq__16818_16823 = G__16835;
chunk__16819_16824 = G__16836;
count__16820_16825 = G__16837;
i__16821_16826 = G__16838;
continue;
}
} else
{var node_16839 = cljs.core.first.call(null,seq__16818_16833__$1);goog.dom.classes.set(node_16839,classes_16822__$1);
{
var G__16840 = cljs.core.next.call(null,seq__16818_16833__$1);
var G__16841 = null;
var G__16842 = 0;
var G__16843 = 0;
seq__16818_16823 = G__16840;
chunk__16819_16824 = G__16841;
count__16820_16825 = G__16842;
i__16821_16826 = G__16843;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16848_16852 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16849_16853 = null;var count__16850_16854 = 0;var i__16851_16855 = 0;while(true){
if((i__16851_16855 < count__16850_16854))
{var node_16856 = cljs.core._nth.call(null,chunk__16849_16853,i__16851_16855);goog.dom.setTextContent(node_16856,value);
{
var G__16857 = seq__16848_16852;
var G__16858 = chunk__16849_16853;
var G__16859 = count__16850_16854;
var G__16860 = (i__16851_16855 + 1);
seq__16848_16852 = G__16857;
chunk__16849_16853 = G__16858;
count__16850_16854 = G__16859;
i__16851_16855 = G__16860;
continue;
}
} else
{var temp__4092__auto___16861 = cljs.core.seq.call(null,seq__16848_16852);if(temp__4092__auto___16861)
{var seq__16848_16862__$1 = temp__4092__auto___16861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16848_16862__$1))
{var c__4148__auto___16863 = cljs.core.chunk_first.call(null,seq__16848_16862__$1);{
var G__16864 = cljs.core.chunk_rest.call(null,seq__16848_16862__$1);
var G__16865 = c__4148__auto___16863;
var G__16866 = cljs.core.count.call(null,c__4148__auto___16863);
var G__16867 = 0;
seq__16848_16852 = G__16864;
chunk__16849_16853 = G__16865;
count__16850_16854 = G__16866;
i__16851_16855 = G__16867;
continue;
}
} else
{var node_16868 = cljs.core.first.call(null,seq__16848_16862__$1);goog.dom.setTextContent(node_16868,value);
{
var G__16869 = cljs.core.next.call(null,seq__16848_16862__$1);
var G__16870 = null;
var G__16871 = 0;
var G__16872 = 0;
seq__16848_16852 = G__16869;
chunk__16849_16853 = G__16870;
count__16850_16854 = G__16871;
i__16851_16855 = G__16872;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16877_16881 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16878_16882 = null;var count__16879_16883 = 0;var i__16880_16884 = 0;while(true){
if((i__16880_16884 < count__16879_16883))
{var node_16885 = cljs.core._nth.call(null,chunk__16878_16882,i__16880_16884);goog.dom.forms.setValue(node_16885,value);
{
var G__16886 = seq__16877_16881;
var G__16887 = chunk__16878_16882;
var G__16888 = count__16879_16883;
var G__16889 = (i__16880_16884 + 1);
seq__16877_16881 = G__16886;
chunk__16878_16882 = G__16887;
count__16879_16883 = G__16888;
i__16880_16884 = G__16889;
continue;
}
} else
{var temp__4092__auto___16890 = cljs.core.seq.call(null,seq__16877_16881);if(temp__4092__auto___16890)
{var seq__16877_16891__$1 = temp__4092__auto___16890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16877_16891__$1))
{var c__4148__auto___16892 = cljs.core.chunk_first.call(null,seq__16877_16891__$1);{
var G__16893 = cljs.core.chunk_rest.call(null,seq__16877_16891__$1);
var G__16894 = c__4148__auto___16892;
var G__16895 = cljs.core.count.call(null,c__4148__auto___16892);
var G__16896 = 0;
seq__16877_16881 = G__16893;
chunk__16878_16882 = G__16894;
count__16879_16883 = G__16895;
i__16880_16884 = G__16896;
continue;
}
} else
{var node_16897 = cljs.core.first.call(null,seq__16877_16891__$1);goog.dom.forms.setValue(node_16897,value);
{
var G__16898 = cljs.core.next.call(null,seq__16877_16891__$1);
var G__16899 = null;
var G__16900 = 0;
var G__16901 = 0;
seq__16877_16881 = G__16898;
chunk__16878_16882 = G__16899;
count__16879_16883 = G__16900;
i__16880_16884 = G__16901;
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
{var value_16912 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16908_16913 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16909_16914 = null;var count__16910_16915 = 0;var i__16911_16916 = 0;while(true){
if((i__16911_16916 < count__16910_16915))
{var node_16917 = cljs.core._nth.call(null,chunk__16909_16914,i__16911_16916);node_16917.innerHTML = value_16912;
{
var G__16918 = seq__16908_16913;
var G__16919 = chunk__16909_16914;
var G__16920 = count__16910_16915;
var G__16921 = (i__16911_16916 + 1);
seq__16908_16913 = G__16918;
chunk__16909_16914 = G__16919;
count__16910_16915 = G__16920;
i__16911_16916 = G__16921;
continue;
}
} else
{var temp__4092__auto___16922 = cljs.core.seq.call(null,seq__16908_16913);if(temp__4092__auto___16922)
{var seq__16908_16923__$1 = temp__4092__auto___16922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16908_16923__$1))
{var c__4148__auto___16924 = cljs.core.chunk_first.call(null,seq__16908_16923__$1);{
var G__16925 = cljs.core.chunk_rest.call(null,seq__16908_16923__$1);
var G__16926 = c__4148__auto___16924;
var G__16927 = cljs.core.count.call(null,c__4148__auto___16924);
var G__16928 = 0;
seq__16908_16913 = G__16925;
chunk__16909_16914 = G__16926;
count__16910_16915 = G__16927;
i__16911_16916 = G__16928;
continue;
}
} else
{var node_16929 = cljs.core.first.call(null,seq__16908_16923__$1);node_16929.innerHTML = value_16912;
{
var G__16930 = cljs.core.next.call(null,seq__16908_16923__$1);
var G__16931 = null;
var G__16932 = 0;
var G__16933 = 0;
seq__16908_16913 = G__16930;
chunk__16909_16914 = G__16931;
count__16910_16915 = G__16932;
i__16911_16916 = G__16933;
continue;
}
}
} else
{}
}
break;
}
}catch (e16907){if((e16907 instanceof Error))
{var e_16934 = e16907;domina.replace_children_BANG_.call(null,content,value_16912);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16907;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16941_16945 = cljs.core.seq.call(null,children);var chunk__16942_16946 = null;var count__16943_16947 = 0;var i__16944_16948 = 0;while(true){
if((i__16944_16948 < count__16943_16947))
{var child_16949 = cljs.core._nth.call(null,chunk__16942_16946,i__16944_16948);frag.appendChild(child_16949);
{
var G__16950 = seq__16941_16945;
var G__16951 = chunk__16942_16946;
var G__16952 = count__16943_16947;
var G__16953 = (i__16944_16948 + 1);
seq__16941_16945 = G__16950;
chunk__16942_16946 = G__16951;
count__16943_16947 = G__16952;
i__16944_16948 = G__16953;
continue;
}
} else
{var temp__4092__auto___16954 = cljs.core.seq.call(null,seq__16941_16945);if(temp__4092__auto___16954)
{var seq__16941_16955__$1 = temp__4092__auto___16954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16941_16955__$1))
{var c__4148__auto___16956 = cljs.core.chunk_first.call(null,seq__16941_16955__$1);{
var G__16957 = cljs.core.chunk_rest.call(null,seq__16941_16955__$1);
var G__16958 = c__4148__auto___16956;
var G__16959 = cljs.core.count.call(null,c__4148__auto___16956);
var G__16960 = 0;
seq__16941_16945 = G__16957;
chunk__16942_16946 = G__16958;
count__16943_16947 = G__16959;
i__16944_16948 = G__16960;
continue;
}
} else
{var child_16961 = cljs.core.first.call(null,seq__16941_16955__$1);frag.appendChild(child_16961);
{
var G__16962 = cljs.core.next.call(null,seq__16941_16955__$1);
var G__16963 = null;
var G__16964 = 0;
var G__16965 = 0;
seq__16941_16945 = G__16962;
chunk__16942_16946 = G__16963;
count__16943_16947 = G__16964;
i__16944_16948 = G__16965;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16935_SHARP_,p2__16936_SHARP_){return f.call(null,p1__16935_SHARP_,p2__16936_SHARP_);
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
{if((function (){var G__16967 = list_thing;if(G__16967)
{var bit__4050__auto__ = (G__16967.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16967.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16967.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16967);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16967);
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
{if((function (){var G__16968 = content;if(G__16968)
{var bit__4050__auto__ = (G__16968.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16968.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16968.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16968);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16968);
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
{if((function (){var G__16969 = content;if(G__16969)
{var bit__4050__auto__ = (G__16969.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16969.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16969.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16969);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16969);
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