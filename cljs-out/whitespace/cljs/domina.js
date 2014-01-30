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
var opt_wrapper_36504 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36505 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36506 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36505,table_section_wrapper_36505,opt_wrapper_36504,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36506,table_section_wrapper_36505,cell_wrapper_36506,opt_wrapper_36504,table_section_wrapper_36505,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36505]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36511 = cljs.core.seq.call(null,tbody);var chunk__36512 = null;var count__36513 = 0;var i__36514 = 0;while(true){
if((i__36514 < count__36513))
{var child = cljs.core._nth.call(null,chunk__36512,i__36514);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36515 = seq__36511;
var G__36516 = chunk__36512;
var G__36517 = count__36513;
var G__36518 = (i__36514 + 1);
seq__36511 = G__36515;
chunk__36512 = G__36516;
count__36513 = G__36517;
i__36514 = G__36518;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36511);if(temp__4092__auto__)
{var seq__36511__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36511__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36511__$1);{
var G__36519 = cljs.core.chunk_rest.call(null,seq__36511__$1);
var G__36520 = c__4148__auto__;
var G__36521 = cljs.core.count.call(null,c__4148__auto__);
var G__36522 = 0;
seq__36511 = G__36519;
chunk__36512 = G__36520;
count__36513 = G__36521;
i__36514 = G__36522;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36511__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36523 = cljs.core.next.call(null,seq__36511__$1);
var G__36524 = null;
var G__36525 = 0;
var G__36526 = 0;
seq__36511 = G__36523;
chunk__36512 = G__36524;
count__36513 = G__36525;
i__36514 = G__36526;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36528 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36528,0,null);var start_wrap = cljs.core.nth.call(null,vec__36528,1,null);var end_wrap = cljs.core.nth.call(null,vec__36528,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36529 = wrapper.lastChild;
var G__36530 = (level - 1);
wrapper = G__36529;
level = G__36530;
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
domina.DomContent = (function (){var obj36532 = {};return obj36532;
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
log_debug.cljs$lang$applyTo = (function (arglist__36533){
var mesg = cljs.core.seq(arglist__36533);
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
log.cljs$lang$applyTo = (function (arglist__36534){
var mesg = cljs.core.seq(arglist__36534);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36535){
var contents = cljs.core.seq(arglist__36535);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36536_SHARP_){return p1__36536_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36537_SHARP_,p2__36538_SHARP_){return goog.dom.insertChildAt(p1__36537_SHARP_,p2__36538_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36540_SHARP_,p2__36539_SHARP_){return goog.dom.insertSiblingBefore(p2__36539_SHARP_,p1__36540_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36542_SHARP_,p2__36541_SHARP_){return goog.dom.insertSiblingAfter(p2__36541_SHARP_,p1__36542_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36544_SHARP_,p2__36543_SHARP_){return goog.dom.replaceNode(p2__36543_SHARP_,p1__36544_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36549_36553 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36550_36554 = null;var count__36551_36555 = 0;var i__36552_36556 = 0;while(true){
if((i__36552_36556 < count__36551_36555))
{var n_36557 = cljs.core._nth.call(null,chunk__36550_36554,i__36552_36556);goog.style.setStyle(n_36557,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36558 = seq__36549_36553;
var G__36559 = chunk__36550_36554;
var G__36560 = count__36551_36555;
var G__36561 = (i__36552_36556 + 1);
seq__36549_36553 = G__36558;
chunk__36550_36554 = G__36559;
count__36551_36555 = G__36560;
i__36552_36556 = G__36561;
continue;
}
} else
{var temp__4092__auto___36562 = cljs.core.seq.call(null,seq__36549_36553);if(temp__4092__auto___36562)
{var seq__36549_36563__$1 = temp__4092__auto___36562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36549_36563__$1))
{var c__4148__auto___36564 = cljs.core.chunk_first.call(null,seq__36549_36563__$1);{
var G__36565 = cljs.core.chunk_rest.call(null,seq__36549_36563__$1);
var G__36566 = c__4148__auto___36564;
var G__36567 = cljs.core.count.call(null,c__4148__auto___36564);
var G__36568 = 0;
seq__36549_36553 = G__36565;
chunk__36550_36554 = G__36566;
count__36551_36555 = G__36567;
i__36552_36556 = G__36568;
continue;
}
} else
{var n_36569 = cljs.core.first.call(null,seq__36549_36563__$1);goog.style.setStyle(n_36569,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36570 = cljs.core.next.call(null,seq__36549_36563__$1);
var G__36571 = null;
var G__36572 = 0;
var G__36573 = 0;
seq__36549_36553 = G__36570;
chunk__36550_36554 = G__36571;
count__36551_36555 = G__36572;
i__36552_36556 = G__36573;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36574){
var content = cljs.core.first(arglist__36574);
arglist__36574 = cljs.core.next(arglist__36574);
var name = cljs.core.first(arglist__36574);
var value = cljs.core.rest(arglist__36574);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36579_36583 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36580_36584 = null;var count__36581_36585 = 0;var i__36582_36586 = 0;while(true){
if((i__36582_36586 < count__36581_36585))
{var n_36587 = cljs.core._nth.call(null,chunk__36580_36584,i__36582_36586);n_36587.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36588 = seq__36579_36583;
var G__36589 = chunk__36580_36584;
var G__36590 = count__36581_36585;
var G__36591 = (i__36582_36586 + 1);
seq__36579_36583 = G__36588;
chunk__36580_36584 = G__36589;
count__36581_36585 = G__36590;
i__36582_36586 = G__36591;
continue;
}
} else
{var temp__4092__auto___36592 = cljs.core.seq.call(null,seq__36579_36583);if(temp__4092__auto___36592)
{var seq__36579_36593__$1 = temp__4092__auto___36592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36579_36593__$1))
{var c__4148__auto___36594 = cljs.core.chunk_first.call(null,seq__36579_36593__$1);{
var G__36595 = cljs.core.chunk_rest.call(null,seq__36579_36593__$1);
var G__36596 = c__4148__auto___36594;
var G__36597 = cljs.core.count.call(null,c__4148__auto___36594);
var G__36598 = 0;
seq__36579_36583 = G__36595;
chunk__36580_36584 = G__36596;
count__36581_36585 = G__36597;
i__36582_36586 = G__36598;
continue;
}
} else
{var n_36599 = cljs.core.first.call(null,seq__36579_36593__$1);n_36599.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36600 = cljs.core.next.call(null,seq__36579_36593__$1);
var G__36601 = null;
var G__36602 = 0;
var G__36603 = 0;
seq__36579_36583 = G__36600;
chunk__36580_36584 = G__36601;
count__36581_36585 = G__36602;
i__36582_36586 = G__36603;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36604){
var content = cljs.core.first(arglist__36604);
arglist__36604 = cljs.core.next(arglist__36604);
var name = cljs.core.first(arglist__36604);
var value = cljs.core.rest(arglist__36604);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36609_36613 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36610_36614 = null;var count__36611_36615 = 0;var i__36612_36616 = 0;while(true){
if((i__36612_36616 < count__36611_36615))
{var n_36617 = cljs.core._nth.call(null,chunk__36610_36614,i__36612_36616);n_36617.removeAttribute(cljs.core.name.call(null,name));
{
var G__36618 = seq__36609_36613;
var G__36619 = chunk__36610_36614;
var G__36620 = count__36611_36615;
var G__36621 = (i__36612_36616 + 1);
seq__36609_36613 = G__36618;
chunk__36610_36614 = G__36619;
count__36611_36615 = G__36620;
i__36612_36616 = G__36621;
continue;
}
} else
{var temp__4092__auto___36622 = cljs.core.seq.call(null,seq__36609_36613);if(temp__4092__auto___36622)
{var seq__36609_36623__$1 = temp__4092__auto___36622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36609_36623__$1))
{var c__4148__auto___36624 = cljs.core.chunk_first.call(null,seq__36609_36623__$1);{
var G__36625 = cljs.core.chunk_rest.call(null,seq__36609_36623__$1);
var G__36626 = c__4148__auto___36624;
var G__36627 = cljs.core.count.call(null,c__4148__auto___36624);
var G__36628 = 0;
seq__36609_36613 = G__36625;
chunk__36610_36614 = G__36626;
count__36611_36615 = G__36627;
i__36612_36616 = G__36628;
continue;
}
} else
{var n_36629 = cljs.core.first.call(null,seq__36609_36623__$1);n_36629.removeAttribute(cljs.core.name.call(null,name));
{
var G__36630 = cljs.core.next.call(null,seq__36609_36623__$1);
var G__36631 = null;
var G__36632 = 0;
var G__36633 = 0;
seq__36609_36613 = G__36630;
chunk__36610_36614 = G__36631;
count__36611_36615 = G__36632;
i__36612_36616 = G__36633;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36635 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36635,0,null);var v = cljs.core.nth.call(null,vec__36635,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36636_SHARP_){var attr = attrs__$1.item(p1__36636_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36643_36649 = cljs.core.seq.call(null,styles);var chunk__36644_36650 = null;var count__36645_36651 = 0;var i__36646_36652 = 0;while(true){
if((i__36646_36652 < count__36645_36651))
{var vec__36647_36653 = cljs.core._nth.call(null,chunk__36644_36650,i__36646_36652);var name_36654 = cljs.core.nth.call(null,vec__36647_36653,0,null);var value_36655 = cljs.core.nth.call(null,vec__36647_36653,1,null);domina.set_style_BANG_.call(null,content,name_36654,value_36655);
{
var G__36656 = seq__36643_36649;
var G__36657 = chunk__36644_36650;
var G__36658 = count__36645_36651;
var G__36659 = (i__36646_36652 + 1);
seq__36643_36649 = G__36656;
chunk__36644_36650 = G__36657;
count__36645_36651 = G__36658;
i__36646_36652 = G__36659;
continue;
}
} else
{var temp__4092__auto___36660 = cljs.core.seq.call(null,seq__36643_36649);if(temp__4092__auto___36660)
{var seq__36643_36661__$1 = temp__4092__auto___36660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36643_36661__$1))
{var c__4148__auto___36662 = cljs.core.chunk_first.call(null,seq__36643_36661__$1);{
var G__36663 = cljs.core.chunk_rest.call(null,seq__36643_36661__$1);
var G__36664 = c__4148__auto___36662;
var G__36665 = cljs.core.count.call(null,c__4148__auto___36662);
var G__36666 = 0;
seq__36643_36649 = G__36663;
chunk__36644_36650 = G__36664;
count__36645_36651 = G__36665;
i__36646_36652 = G__36666;
continue;
}
} else
{var vec__36648_36667 = cljs.core.first.call(null,seq__36643_36661__$1);var name_36668 = cljs.core.nth.call(null,vec__36648_36667,0,null);var value_36669 = cljs.core.nth.call(null,vec__36648_36667,1,null);domina.set_style_BANG_.call(null,content,name_36668,value_36669);
{
var G__36670 = cljs.core.next.call(null,seq__36643_36661__$1);
var G__36671 = null;
var G__36672 = 0;
var G__36673 = 0;
seq__36643_36649 = G__36670;
chunk__36644_36650 = G__36671;
count__36645_36651 = G__36672;
i__36646_36652 = G__36673;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36680_36686 = cljs.core.seq.call(null,attrs);var chunk__36681_36687 = null;var count__36682_36688 = 0;var i__36683_36689 = 0;while(true){
if((i__36683_36689 < count__36682_36688))
{var vec__36684_36690 = cljs.core._nth.call(null,chunk__36681_36687,i__36683_36689);var name_36691 = cljs.core.nth.call(null,vec__36684_36690,0,null);var value_36692 = cljs.core.nth.call(null,vec__36684_36690,1,null);domina.set_attr_BANG_.call(null,content,name_36691,value_36692);
{
var G__36693 = seq__36680_36686;
var G__36694 = chunk__36681_36687;
var G__36695 = count__36682_36688;
var G__36696 = (i__36683_36689 + 1);
seq__36680_36686 = G__36693;
chunk__36681_36687 = G__36694;
count__36682_36688 = G__36695;
i__36683_36689 = G__36696;
continue;
}
} else
{var temp__4092__auto___36697 = cljs.core.seq.call(null,seq__36680_36686);if(temp__4092__auto___36697)
{var seq__36680_36698__$1 = temp__4092__auto___36697;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36680_36698__$1))
{var c__4148__auto___36699 = cljs.core.chunk_first.call(null,seq__36680_36698__$1);{
var G__36700 = cljs.core.chunk_rest.call(null,seq__36680_36698__$1);
var G__36701 = c__4148__auto___36699;
var G__36702 = cljs.core.count.call(null,c__4148__auto___36699);
var G__36703 = 0;
seq__36680_36686 = G__36700;
chunk__36681_36687 = G__36701;
count__36682_36688 = G__36702;
i__36683_36689 = G__36703;
continue;
}
} else
{var vec__36685_36704 = cljs.core.first.call(null,seq__36680_36698__$1);var name_36705 = cljs.core.nth.call(null,vec__36685_36704,0,null);var value_36706 = cljs.core.nth.call(null,vec__36685_36704,1,null);domina.set_attr_BANG_.call(null,content,name_36705,value_36706);
{
var G__36707 = cljs.core.next.call(null,seq__36680_36698__$1);
var G__36708 = null;
var G__36709 = 0;
var G__36710 = 0;
seq__36680_36686 = G__36707;
chunk__36681_36687 = G__36708;
count__36682_36688 = G__36709;
i__36683_36689 = G__36710;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36715_36719 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36716_36720 = null;var count__36717_36721 = 0;var i__36718_36722 = 0;while(true){
if((i__36718_36722 < count__36717_36721))
{var node_36723 = cljs.core._nth.call(null,chunk__36716_36720,i__36718_36722);goog.dom.classes.add(node_36723,class$);
{
var G__36724 = seq__36715_36719;
var G__36725 = chunk__36716_36720;
var G__36726 = count__36717_36721;
var G__36727 = (i__36718_36722 + 1);
seq__36715_36719 = G__36724;
chunk__36716_36720 = G__36725;
count__36717_36721 = G__36726;
i__36718_36722 = G__36727;
continue;
}
} else
{var temp__4092__auto___36728 = cljs.core.seq.call(null,seq__36715_36719);if(temp__4092__auto___36728)
{var seq__36715_36729__$1 = temp__4092__auto___36728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36715_36729__$1))
{var c__4148__auto___36730 = cljs.core.chunk_first.call(null,seq__36715_36729__$1);{
var G__36731 = cljs.core.chunk_rest.call(null,seq__36715_36729__$1);
var G__36732 = c__4148__auto___36730;
var G__36733 = cljs.core.count.call(null,c__4148__auto___36730);
var G__36734 = 0;
seq__36715_36719 = G__36731;
chunk__36716_36720 = G__36732;
count__36717_36721 = G__36733;
i__36718_36722 = G__36734;
continue;
}
} else
{var node_36735 = cljs.core.first.call(null,seq__36715_36729__$1);goog.dom.classes.add(node_36735,class$);
{
var G__36736 = cljs.core.next.call(null,seq__36715_36729__$1);
var G__36737 = null;
var G__36738 = 0;
var G__36739 = 0;
seq__36715_36719 = G__36736;
chunk__36716_36720 = G__36737;
count__36717_36721 = G__36738;
i__36718_36722 = G__36739;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36744_36748 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36745_36749 = null;var count__36746_36750 = 0;var i__36747_36751 = 0;while(true){
if((i__36747_36751 < count__36746_36750))
{var node_36752 = cljs.core._nth.call(null,chunk__36745_36749,i__36747_36751);goog.dom.classes.remove(node_36752,class$);
{
var G__36753 = seq__36744_36748;
var G__36754 = chunk__36745_36749;
var G__36755 = count__36746_36750;
var G__36756 = (i__36747_36751 + 1);
seq__36744_36748 = G__36753;
chunk__36745_36749 = G__36754;
count__36746_36750 = G__36755;
i__36747_36751 = G__36756;
continue;
}
} else
{var temp__4092__auto___36757 = cljs.core.seq.call(null,seq__36744_36748);if(temp__4092__auto___36757)
{var seq__36744_36758__$1 = temp__4092__auto___36757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36744_36758__$1))
{var c__4148__auto___36759 = cljs.core.chunk_first.call(null,seq__36744_36758__$1);{
var G__36760 = cljs.core.chunk_rest.call(null,seq__36744_36758__$1);
var G__36761 = c__4148__auto___36759;
var G__36762 = cljs.core.count.call(null,c__4148__auto___36759);
var G__36763 = 0;
seq__36744_36748 = G__36760;
chunk__36745_36749 = G__36761;
count__36746_36750 = G__36762;
i__36747_36751 = G__36763;
continue;
}
} else
{var node_36764 = cljs.core.first.call(null,seq__36744_36758__$1);goog.dom.classes.remove(node_36764,class$);
{
var G__36765 = cljs.core.next.call(null,seq__36744_36758__$1);
var G__36766 = null;
var G__36767 = 0;
var G__36768 = 0;
seq__36744_36748 = G__36765;
chunk__36745_36749 = G__36766;
count__36746_36750 = G__36767;
i__36747_36751 = G__36768;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36773_36777 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36774_36778 = null;var count__36775_36779 = 0;var i__36776_36780 = 0;while(true){
if((i__36776_36780 < count__36775_36779))
{var node_36781 = cljs.core._nth.call(null,chunk__36774_36778,i__36776_36780);goog.dom.classes.toggle(node_36781,class$);
{
var G__36782 = seq__36773_36777;
var G__36783 = chunk__36774_36778;
var G__36784 = count__36775_36779;
var G__36785 = (i__36776_36780 + 1);
seq__36773_36777 = G__36782;
chunk__36774_36778 = G__36783;
count__36775_36779 = G__36784;
i__36776_36780 = G__36785;
continue;
}
} else
{var temp__4092__auto___36786 = cljs.core.seq.call(null,seq__36773_36777);if(temp__4092__auto___36786)
{var seq__36773_36787__$1 = temp__4092__auto___36786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36773_36787__$1))
{var c__4148__auto___36788 = cljs.core.chunk_first.call(null,seq__36773_36787__$1);{
var G__36789 = cljs.core.chunk_rest.call(null,seq__36773_36787__$1);
var G__36790 = c__4148__auto___36788;
var G__36791 = cljs.core.count.call(null,c__4148__auto___36788);
var G__36792 = 0;
seq__36773_36777 = G__36789;
chunk__36774_36778 = G__36790;
count__36775_36779 = G__36791;
i__36776_36780 = G__36792;
continue;
}
} else
{var node_36793 = cljs.core.first.call(null,seq__36773_36787__$1);goog.dom.classes.toggle(node_36793,class$);
{
var G__36794 = cljs.core.next.call(null,seq__36773_36787__$1);
var G__36795 = null;
var G__36796 = 0;
var G__36797 = 0;
seq__36773_36777 = G__36794;
chunk__36774_36778 = G__36795;
count__36775_36779 = G__36796;
i__36776_36780 = G__36797;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36806__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36802_36807 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36803_36808 = null;var count__36804_36809 = 0;var i__36805_36810 = 0;while(true){
if((i__36805_36810 < count__36804_36809))
{var node_36811 = cljs.core._nth.call(null,chunk__36803_36808,i__36805_36810);goog.dom.classes.set(node_36811,classes_36806__$1);
{
var G__36812 = seq__36802_36807;
var G__36813 = chunk__36803_36808;
var G__36814 = count__36804_36809;
var G__36815 = (i__36805_36810 + 1);
seq__36802_36807 = G__36812;
chunk__36803_36808 = G__36813;
count__36804_36809 = G__36814;
i__36805_36810 = G__36815;
continue;
}
} else
{var temp__4092__auto___36816 = cljs.core.seq.call(null,seq__36802_36807);if(temp__4092__auto___36816)
{var seq__36802_36817__$1 = temp__4092__auto___36816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36802_36817__$1))
{var c__4148__auto___36818 = cljs.core.chunk_first.call(null,seq__36802_36817__$1);{
var G__36819 = cljs.core.chunk_rest.call(null,seq__36802_36817__$1);
var G__36820 = c__4148__auto___36818;
var G__36821 = cljs.core.count.call(null,c__4148__auto___36818);
var G__36822 = 0;
seq__36802_36807 = G__36819;
chunk__36803_36808 = G__36820;
count__36804_36809 = G__36821;
i__36805_36810 = G__36822;
continue;
}
} else
{var node_36823 = cljs.core.first.call(null,seq__36802_36817__$1);goog.dom.classes.set(node_36823,classes_36806__$1);
{
var G__36824 = cljs.core.next.call(null,seq__36802_36817__$1);
var G__36825 = null;
var G__36826 = 0;
var G__36827 = 0;
seq__36802_36807 = G__36824;
chunk__36803_36808 = G__36825;
count__36804_36809 = G__36826;
i__36805_36810 = G__36827;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36832_36836 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36833_36837 = null;var count__36834_36838 = 0;var i__36835_36839 = 0;while(true){
if((i__36835_36839 < count__36834_36838))
{var node_36840 = cljs.core._nth.call(null,chunk__36833_36837,i__36835_36839);goog.dom.setTextContent(node_36840,value);
{
var G__36841 = seq__36832_36836;
var G__36842 = chunk__36833_36837;
var G__36843 = count__36834_36838;
var G__36844 = (i__36835_36839 + 1);
seq__36832_36836 = G__36841;
chunk__36833_36837 = G__36842;
count__36834_36838 = G__36843;
i__36835_36839 = G__36844;
continue;
}
} else
{var temp__4092__auto___36845 = cljs.core.seq.call(null,seq__36832_36836);if(temp__4092__auto___36845)
{var seq__36832_36846__$1 = temp__4092__auto___36845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36832_36846__$1))
{var c__4148__auto___36847 = cljs.core.chunk_first.call(null,seq__36832_36846__$1);{
var G__36848 = cljs.core.chunk_rest.call(null,seq__36832_36846__$1);
var G__36849 = c__4148__auto___36847;
var G__36850 = cljs.core.count.call(null,c__4148__auto___36847);
var G__36851 = 0;
seq__36832_36836 = G__36848;
chunk__36833_36837 = G__36849;
count__36834_36838 = G__36850;
i__36835_36839 = G__36851;
continue;
}
} else
{var node_36852 = cljs.core.first.call(null,seq__36832_36846__$1);goog.dom.setTextContent(node_36852,value);
{
var G__36853 = cljs.core.next.call(null,seq__36832_36846__$1);
var G__36854 = null;
var G__36855 = 0;
var G__36856 = 0;
seq__36832_36836 = G__36853;
chunk__36833_36837 = G__36854;
count__36834_36838 = G__36855;
i__36835_36839 = G__36856;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36861_36865 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36862_36866 = null;var count__36863_36867 = 0;var i__36864_36868 = 0;while(true){
if((i__36864_36868 < count__36863_36867))
{var node_36869 = cljs.core._nth.call(null,chunk__36862_36866,i__36864_36868);goog.dom.forms.setValue(node_36869,value);
{
var G__36870 = seq__36861_36865;
var G__36871 = chunk__36862_36866;
var G__36872 = count__36863_36867;
var G__36873 = (i__36864_36868 + 1);
seq__36861_36865 = G__36870;
chunk__36862_36866 = G__36871;
count__36863_36867 = G__36872;
i__36864_36868 = G__36873;
continue;
}
} else
{var temp__4092__auto___36874 = cljs.core.seq.call(null,seq__36861_36865);if(temp__4092__auto___36874)
{var seq__36861_36875__$1 = temp__4092__auto___36874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36861_36875__$1))
{var c__4148__auto___36876 = cljs.core.chunk_first.call(null,seq__36861_36875__$1);{
var G__36877 = cljs.core.chunk_rest.call(null,seq__36861_36875__$1);
var G__36878 = c__4148__auto___36876;
var G__36879 = cljs.core.count.call(null,c__4148__auto___36876);
var G__36880 = 0;
seq__36861_36865 = G__36877;
chunk__36862_36866 = G__36878;
count__36863_36867 = G__36879;
i__36864_36868 = G__36880;
continue;
}
} else
{var node_36881 = cljs.core.first.call(null,seq__36861_36875__$1);goog.dom.forms.setValue(node_36881,value);
{
var G__36882 = cljs.core.next.call(null,seq__36861_36875__$1);
var G__36883 = null;
var G__36884 = 0;
var G__36885 = 0;
seq__36861_36865 = G__36882;
chunk__36862_36866 = G__36883;
count__36863_36867 = G__36884;
i__36864_36868 = G__36885;
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
{var value_36896 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36892_36897 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36893_36898 = null;var count__36894_36899 = 0;var i__36895_36900 = 0;while(true){
if((i__36895_36900 < count__36894_36899))
{var node_36901 = cljs.core._nth.call(null,chunk__36893_36898,i__36895_36900);node_36901.innerHTML = value_36896;
{
var G__36902 = seq__36892_36897;
var G__36903 = chunk__36893_36898;
var G__36904 = count__36894_36899;
var G__36905 = (i__36895_36900 + 1);
seq__36892_36897 = G__36902;
chunk__36893_36898 = G__36903;
count__36894_36899 = G__36904;
i__36895_36900 = G__36905;
continue;
}
} else
{var temp__4092__auto___36906 = cljs.core.seq.call(null,seq__36892_36897);if(temp__4092__auto___36906)
{var seq__36892_36907__$1 = temp__4092__auto___36906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36892_36907__$1))
{var c__4148__auto___36908 = cljs.core.chunk_first.call(null,seq__36892_36907__$1);{
var G__36909 = cljs.core.chunk_rest.call(null,seq__36892_36907__$1);
var G__36910 = c__4148__auto___36908;
var G__36911 = cljs.core.count.call(null,c__4148__auto___36908);
var G__36912 = 0;
seq__36892_36897 = G__36909;
chunk__36893_36898 = G__36910;
count__36894_36899 = G__36911;
i__36895_36900 = G__36912;
continue;
}
} else
{var node_36913 = cljs.core.first.call(null,seq__36892_36907__$1);node_36913.innerHTML = value_36896;
{
var G__36914 = cljs.core.next.call(null,seq__36892_36907__$1);
var G__36915 = null;
var G__36916 = 0;
var G__36917 = 0;
seq__36892_36897 = G__36914;
chunk__36893_36898 = G__36915;
count__36894_36899 = G__36916;
i__36895_36900 = G__36917;
continue;
}
}
} else
{}
}
break;
}
}catch (e36891){if((e36891 instanceof Error))
{var e_36918 = e36891;domina.replace_children_BANG_.call(null,content,value_36896);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36891;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36925_36929 = cljs.core.seq.call(null,children);var chunk__36926_36930 = null;var count__36927_36931 = 0;var i__36928_36932 = 0;while(true){
if((i__36928_36932 < count__36927_36931))
{var child_36933 = cljs.core._nth.call(null,chunk__36926_36930,i__36928_36932);frag.appendChild(child_36933);
{
var G__36934 = seq__36925_36929;
var G__36935 = chunk__36926_36930;
var G__36936 = count__36927_36931;
var G__36937 = (i__36928_36932 + 1);
seq__36925_36929 = G__36934;
chunk__36926_36930 = G__36935;
count__36927_36931 = G__36936;
i__36928_36932 = G__36937;
continue;
}
} else
{var temp__4092__auto___36938 = cljs.core.seq.call(null,seq__36925_36929);if(temp__4092__auto___36938)
{var seq__36925_36939__$1 = temp__4092__auto___36938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36925_36939__$1))
{var c__4148__auto___36940 = cljs.core.chunk_first.call(null,seq__36925_36939__$1);{
var G__36941 = cljs.core.chunk_rest.call(null,seq__36925_36939__$1);
var G__36942 = c__4148__auto___36940;
var G__36943 = cljs.core.count.call(null,c__4148__auto___36940);
var G__36944 = 0;
seq__36925_36929 = G__36941;
chunk__36926_36930 = G__36942;
count__36927_36931 = G__36943;
i__36928_36932 = G__36944;
continue;
}
} else
{var child_36945 = cljs.core.first.call(null,seq__36925_36939__$1);frag.appendChild(child_36945);
{
var G__36946 = cljs.core.next.call(null,seq__36925_36939__$1);
var G__36947 = null;
var G__36948 = 0;
var G__36949 = 0;
seq__36925_36929 = G__36946;
chunk__36926_36930 = G__36947;
count__36927_36931 = G__36948;
i__36928_36932 = G__36949;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36919_SHARP_,p2__36920_SHARP_){return f.call(null,p1__36919_SHARP_,p2__36920_SHARP_);
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
{if((function (){var G__36951 = list_thing;if(G__36951)
{var bit__4050__auto__ = (G__36951.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36951.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36951.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36951);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36951);
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
{if((function (){var G__36952 = content;if(G__36952)
{var bit__4050__auto__ = (G__36952.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36952.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36952.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36952);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36952);
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
{if((function (){var G__36953 = content;if(G__36953)
{var bit__4050__auto__ = (G__36953.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36953.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36953.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36953);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36953);
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
