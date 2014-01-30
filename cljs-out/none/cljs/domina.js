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
var opt_wrapper_16522 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16523 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16524 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16523,table_section_wrapper_16523,opt_wrapper_16522,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16524,table_section_wrapper_16523,cell_wrapper_16524,opt_wrapper_16522,table_section_wrapper_16523,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16523]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16529 = cljs.core.seq.call(null,tbody);var chunk__16530 = null;var count__16531 = 0;var i__16532 = 0;while(true){
if((i__16532 < count__16531))
{var child = cljs.core._nth.call(null,chunk__16530,i__16532);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16533 = seq__16529;
var G__16534 = chunk__16530;
var G__16535 = count__16531;
var G__16536 = (i__16532 + 1);
seq__16529 = G__16533;
chunk__16530 = G__16534;
count__16531 = G__16535;
i__16532 = G__16536;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16529);if(temp__4092__auto__)
{var seq__16529__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16529__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16529__$1);{
var G__16537 = cljs.core.chunk_rest.call(null,seq__16529__$1);
var G__16538 = c__4148__auto__;
var G__16539 = cljs.core.count.call(null,c__4148__auto__);
var G__16540 = 0;
seq__16529 = G__16537;
chunk__16530 = G__16538;
count__16531 = G__16539;
i__16532 = G__16540;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16529__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16541 = cljs.core.next.call(null,seq__16529__$1);
var G__16542 = null;
var G__16543 = 0;
var G__16544 = 0;
seq__16529 = G__16541;
chunk__16530 = G__16542;
count__16531 = G__16543;
i__16532 = G__16544;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16546 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16546,0,null);var start_wrap = cljs.core.nth.call(null,vec__16546,1,null);var end_wrap = cljs.core.nth.call(null,vec__16546,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16547 = wrapper.lastChild;
var G__16548 = (level - 1);
wrapper = G__16547;
level = G__16548;
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
domina.DomContent = (function (){var obj16550 = {};return obj16550;
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
log_debug.cljs$lang$applyTo = (function (arglist__16551){
var mesg = cljs.core.seq(arglist__16551);
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
log.cljs$lang$applyTo = (function (arglist__16552){
var mesg = cljs.core.seq(arglist__16552);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16553){
var contents = cljs.core.seq(arglist__16553);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16554_SHARP_){return p1__16554_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16555_SHARP_,p2__16556_SHARP_){return goog.dom.insertChildAt(p1__16555_SHARP_,p2__16556_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16558_SHARP_,p2__16557_SHARP_){return goog.dom.insertSiblingBefore(p2__16557_SHARP_,p1__16558_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16560_SHARP_,p2__16559_SHARP_){return goog.dom.insertSiblingAfter(p2__16559_SHARP_,p1__16560_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16562_SHARP_,p2__16561_SHARP_){return goog.dom.replaceNode(p2__16561_SHARP_,p1__16562_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16567_16571 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16568_16572 = null;var count__16569_16573 = 0;var i__16570_16574 = 0;while(true){
if((i__16570_16574 < count__16569_16573))
{var n_16575 = cljs.core._nth.call(null,chunk__16568_16572,i__16570_16574);goog.style.setStyle(n_16575,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16576 = seq__16567_16571;
var G__16577 = chunk__16568_16572;
var G__16578 = count__16569_16573;
var G__16579 = (i__16570_16574 + 1);
seq__16567_16571 = G__16576;
chunk__16568_16572 = G__16577;
count__16569_16573 = G__16578;
i__16570_16574 = G__16579;
continue;
}
} else
{var temp__4092__auto___16580 = cljs.core.seq.call(null,seq__16567_16571);if(temp__4092__auto___16580)
{var seq__16567_16581__$1 = temp__4092__auto___16580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16567_16581__$1))
{var c__4148__auto___16582 = cljs.core.chunk_first.call(null,seq__16567_16581__$1);{
var G__16583 = cljs.core.chunk_rest.call(null,seq__16567_16581__$1);
var G__16584 = c__4148__auto___16582;
var G__16585 = cljs.core.count.call(null,c__4148__auto___16582);
var G__16586 = 0;
seq__16567_16571 = G__16583;
chunk__16568_16572 = G__16584;
count__16569_16573 = G__16585;
i__16570_16574 = G__16586;
continue;
}
} else
{var n_16587 = cljs.core.first.call(null,seq__16567_16581__$1);goog.style.setStyle(n_16587,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16588 = cljs.core.next.call(null,seq__16567_16581__$1);
var G__16589 = null;
var G__16590 = 0;
var G__16591 = 0;
seq__16567_16571 = G__16588;
chunk__16568_16572 = G__16589;
count__16569_16573 = G__16590;
i__16570_16574 = G__16591;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16592){
var content = cljs.core.first(arglist__16592);
arglist__16592 = cljs.core.next(arglist__16592);
var name = cljs.core.first(arglist__16592);
var value = cljs.core.rest(arglist__16592);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16597_16601 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16598_16602 = null;var count__16599_16603 = 0;var i__16600_16604 = 0;while(true){
if((i__16600_16604 < count__16599_16603))
{var n_16605 = cljs.core._nth.call(null,chunk__16598_16602,i__16600_16604);n_16605.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16606 = seq__16597_16601;
var G__16607 = chunk__16598_16602;
var G__16608 = count__16599_16603;
var G__16609 = (i__16600_16604 + 1);
seq__16597_16601 = G__16606;
chunk__16598_16602 = G__16607;
count__16599_16603 = G__16608;
i__16600_16604 = G__16609;
continue;
}
} else
{var temp__4092__auto___16610 = cljs.core.seq.call(null,seq__16597_16601);if(temp__4092__auto___16610)
{var seq__16597_16611__$1 = temp__4092__auto___16610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16597_16611__$1))
{var c__4148__auto___16612 = cljs.core.chunk_first.call(null,seq__16597_16611__$1);{
var G__16613 = cljs.core.chunk_rest.call(null,seq__16597_16611__$1);
var G__16614 = c__4148__auto___16612;
var G__16615 = cljs.core.count.call(null,c__4148__auto___16612);
var G__16616 = 0;
seq__16597_16601 = G__16613;
chunk__16598_16602 = G__16614;
count__16599_16603 = G__16615;
i__16600_16604 = G__16616;
continue;
}
} else
{var n_16617 = cljs.core.first.call(null,seq__16597_16611__$1);n_16617.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16618 = cljs.core.next.call(null,seq__16597_16611__$1);
var G__16619 = null;
var G__16620 = 0;
var G__16621 = 0;
seq__16597_16601 = G__16618;
chunk__16598_16602 = G__16619;
count__16599_16603 = G__16620;
i__16600_16604 = G__16621;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16622){
var content = cljs.core.first(arglist__16622);
arglist__16622 = cljs.core.next(arglist__16622);
var name = cljs.core.first(arglist__16622);
var value = cljs.core.rest(arglist__16622);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16627_16631 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16628_16632 = null;var count__16629_16633 = 0;var i__16630_16634 = 0;while(true){
if((i__16630_16634 < count__16629_16633))
{var n_16635 = cljs.core._nth.call(null,chunk__16628_16632,i__16630_16634);n_16635.removeAttribute(cljs.core.name.call(null,name));
{
var G__16636 = seq__16627_16631;
var G__16637 = chunk__16628_16632;
var G__16638 = count__16629_16633;
var G__16639 = (i__16630_16634 + 1);
seq__16627_16631 = G__16636;
chunk__16628_16632 = G__16637;
count__16629_16633 = G__16638;
i__16630_16634 = G__16639;
continue;
}
} else
{var temp__4092__auto___16640 = cljs.core.seq.call(null,seq__16627_16631);if(temp__4092__auto___16640)
{var seq__16627_16641__$1 = temp__4092__auto___16640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16627_16641__$1))
{var c__4148__auto___16642 = cljs.core.chunk_first.call(null,seq__16627_16641__$1);{
var G__16643 = cljs.core.chunk_rest.call(null,seq__16627_16641__$1);
var G__16644 = c__4148__auto___16642;
var G__16645 = cljs.core.count.call(null,c__4148__auto___16642);
var G__16646 = 0;
seq__16627_16631 = G__16643;
chunk__16628_16632 = G__16644;
count__16629_16633 = G__16645;
i__16630_16634 = G__16646;
continue;
}
} else
{var n_16647 = cljs.core.first.call(null,seq__16627_16641__$1);n_16647.removeAttribute(cljs.core.name.call(null,name));
{
var G__16648 = cljs.core.next.call(null,seq__16627_16641__$1);
var G__16649 = null;
var G__16650 = 0;
var G__16651 = 0;
seq__16627_16631 = G__16648;
chunk__16628_16632 = G__16649;
count__16629_16633 = G__16650;
i__16630_16634 = G__16651;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16653 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16653,0,null);var v = cljs.core.nth.call(null,vec__16653,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16654_SHARP_){var attr = attrs__$1.item(p1__16654_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16661_16667 = cljs.core.seq.call(null,styles);var chunk__16662_16668 = null;var count__16663_16669 = 0;var i__16664_16670 = 0;while(true){
if((i__16664_16670 < count__16663_16669))
{var vec__16665_16671 = cljs.core._nth.call(null,chunk__16662_16668,i__16664_16670);var name_16672 = cljs.core.nth.call(null,vec__16665_16671,0,null);var value_16673 = cljs.core.nth.call(null,vec__16665_16671,1,null);domina.set_style_BANG_.call(null,content,name_16672,value_16673);
{
var G__16674 = seq__16661_16667;
var G__16675 = chunk__16662_16668;
var G__16676 = count__16663_16669;
var G__16677 = (i__16664_16670 + 1);
seq__16661_16667 = G__16674;
chunk__16662_16668 = G__16675;
count__16663_16669 = G__16676;
i__16664_16670 = G__16677;
continue;
}
} else
{var temp__4092__auto___16678 = cljs.core.seq.call(null,seq__16661_16667);if(temp__4092__auto___16678)
{var seq__16661_16679__$1 = temp__4092__auto___16678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16661_16679__$1))
{var c__4148__auto___16680 = cljs.core.chunk_first.call(null,seq__16661_16679__$1);{
var G__16681 = cljs.core.chunk_rest.call(null,seq__16661_16679__$1);
var G__16682 = c__4148__auto___16680;
var G__16683 = cljs.core.count.call(null,c__4148__auto___16680);
var G__16684 = 0;
seq__16661_16667 = G__16681;
chunk__16662_16668 = G__16682;
count__16663_16669 = G__16683;
i__16664_16670 = G__16684;
continue;
}
} else
{var vec__16666_16685 = cljs.core.first.call(null,seq__16661_16679__$1);var name_16686 = cljs.core.nth.call(null,vec__16666_16685,0,null);var value_16687 = cljs.core.nth.call(null,vec__16666_16685,1,null);domina.set_style_BANG_.call(null,content,name_16686,value_16687);
{
var G__16688 = cljs.core.next.call(null,seq__16661_16679__$1);
var G__16689 = null;
var G__16690 = 0;
var G__16691 = 0;
seq__16661_16667 = G__16688;
chunk__16662_16668 = G__16689;
count__16663_16669 = G__16690;
i__16664_16670 = G__16691;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16698_16704 = cljs.core.seq.call(null,attrs);var chunk__16699_16705 = null;var count__16700_16706 = 0;var i__16701_16707 = 0;while(true){
if((i__16701_16707 < count__16700_16706))
{var vec__16702_16708 = cljs.core._nth.call(null,chunk__16699_16705,i__16701_16707);var name_16709 = cljs.core.nth.call(null,vec__16702_16708,0,null);var value_16710 = cljs.core.nth.call(null,vec__16702_16708,1,null);domina.set_attr_BANG_.call(null,content,name_16709,value_16710);
{
var G__16711 = seq__16698_16704;
var G__16712 = chunk__16699_16705;
var G__16713 = count__16700_16706;
var G__16714 = (i__16701_16707 + 1);
seq__16698_16704 = G__16711;
chunk__16699_16705 = G__16712;
count__16700_16706 = G__16713;
i__16701_16707 = G__16714;
continue;
}
} else
{var temp__4092__auto___16715 = cljs.core.seq.call(null,seq__16698_16704);if(temp__4092__auto___16715)
{var seq__16698_16716__$1 = temp__4092__auto___16715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16698_16716__$1))
{var c__4148__auto___16717 = cljs.core.chunk_first.call(null,seq__16698_16716__$1);{
var G__16718 = cljs.core.chunk_rest.call(null,seq__16698_16716__$1);
var G__16719 = c__4148__auto___16717;
var G__16720 = cljs.core.count.call(null,c__4148__auto___16717);
var G__16721 = 0;
seq__16698_16704 = G__16718;
chunk__16699_16705 = G__16719;
count__16700_16706 = G__16720;
i__16701_16707 = G__16721;
continue;
}
} else
{var vec__16703_16722 = cljs.core.first.call(null,seq__16698_16716__$1);var name_16723 = cljs.core.nth.call(null,vec__16703_16722,0,null);var value_16724 = cljs.core.nth.call(null,vec__16703_16722,1,null);domina.set_attr_BANG_.call(null,content,name_16723,value_16724);
{
var G__16725 = cljs.core.next.call(null,seq__16698_16716__$1);
var G__16726 = null;
var G__16727 = 0;
var G__16728 = 0;
seq__16698_16704 = G__16725;
chunk__16699_16705 = G__16726;
count__16700_16706 = G__16727;
i__16701_16707 = G__16728;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16733_16737 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16734_16738 = null;var count__16735_16739 = 0;var i__16736_16740 = 0;while(true){
if((i__16736_16740 < count__16735_16739))
{var node_16741 = cljs.core._nth.call(null,chunk__16734_16738,i__16736_16740);goog.dom.classes.add(node_16741,class$);
{
var G__16742 = seq__16733_16737;
var G__16743 = chunk__16734_16738;
var G__16744 = count__16735_16739;
var G__16745 = (i__16736_16740 + 1);
seq__16733_16737 = G__16742;
chunk__16734_16738 = G__16743;
count__16735_16739 = G__16744;
i__16736_16740 = G__16745;
continue;
}
} else
{var temp__4092__auto___16746 = cljs.core.seq.call(null,seq__16733_16737);if(temp__4092__auto___16746)
{var seq__16733_16747__$1 = temp__4092__auto___16746;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16733_16747__$1))
{var c__4148__auto___16748 = cljs.core.chunk_first.call(null,seq__16733_16747__$1);{
var G__16749 = cljs.core.chunk_rest.call(null,seq__16733_16747__$1);
var G__16750 = c__4148__auto___16748;
var G__16751 = cljs.core.count.call(null,c__4148__auto___16748);
var G__16752 = 0;
seq__16733_16737 = G__16749;
chunk__16734_16738 = G__16750;
count__16735_16739 = G__16751;
i__16736_16740 = G__16752;
continue;
}
} else
{var node_16753 = cljs.core.first.call(null,seq__16733_16747__$1);goog.dom.classes.add(node_16753,class$);
{
var G__16754 = cljs.core.next.call(null,seq__16733_16747__$1);
var G__16755 = null;
var G__16756 = 0;
var G__16757 = 0;
seq__16733_16737 = G__16754;
chunk__16734_16738 = G__16755;
count__16735_16739 = G__16756;
i__16736_16740 = G__16757;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16762_16766 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16763_16767 = null;var count__16764_16768 = 0;var i__16765_16769 = 0;while(true){
if((i__16765_16769 < count__16764_16768))
{var node_16770 = cljs.core._nth.call(null,chunk__16763_16767,i__16765_16769);goog.dom.classes.remove(node_16770,class$);
{
var G__16771 = seq__16762_16766;
var G__16772 = chunk__16763_16767;
var G__16773 = count__16764_16768;
var G__16774 = (i__16765_16769 + 1);
seq__16762_16766 = G__16771;
chunk__16763_16767 = G__16772;
count__16764_16768 = G__16773;
i__16765_16769 = G__16774;
continue;
}
} else
{var temp__4092__auto___16775 = cljs.core.seq.call(null,seq__16762_16766);if(temp__4092__auto___16775)
{var seq__16762_16776__$1 = temp__4092__auto___16775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16762_16776__$1))
{var c__4148__auto___16777 = cljs.core.chunk_first.call(null,seq__16762_16776__$1);{
var G__16778 = cljs.core.chunk_rest.call(null,seq__16762_16776__$1);
var G__16779 = c__4148__auto___16777;
var G__16780 = cljs.core.count.call(null,c__4148__auto___16777);
var G__16781 = 0;
seq__16762_16766 = G__16778;
chunk__16763_16767 = G__16779;
count__16764_16768 = G__16780;
i__16765_16769 = G__16781;
continue;
}
} else
{var node_16782 = cljs.core.first.call(null,seq__16762_16776__$1);goog.dom.classes.remove(node_16782,class$);
{
var G__16783 = cljs.core.next.call(null,seq__16762_16776__$1);
var G__16784 = null;
var G__16785 = 0;
var G__16786 = 0;
seq__16762_16766 = G__16783;
chunk__16763_16767 = G__16784;
count__16764_16768 = G__16785;
i__16765_16769 = G__16786;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16791_16795 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16792_16796 = null;var count__16793_16797 = 0;var i__16794_16798 = 0;while(true){
if((i__16794_16798 < count__16793_16797))
{var node_16799 = cljs.core._nth.call(null,chunk__16792_16796,i__16794_16798);goog.dom.classes.toggle(node_16799,class$);
{
var G__16800 = seq__16791_16795;
var G__16801 = chunk__16792_16796;
var G__16802 = count__16793_16797;
var G__16803 = (i__16794_16798 + 1);
seq__16791_16795 = G__16800;
chunk__16792_16796 = G__16801;
count__16793_16797 = G__16802;
i__16794_16798 = G__16803;
continue;
}
} else
{var temp__4092__auto___16804 = cljs.core.seq.call(null,seq__16791_16795);if(temp__4092__auto___16804)
{var seq__16791_16805__$1 = temp__4092__auto___16804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16791_16805__$1))
{var c__4148__auto___16806 = cljs.core.chunk_first.call(null,seq__16791_16805__$1);{
var G__16807 = cljs.core.chunk_rest.call(null,seq__16791_16805__$1);
var G__16808 = c__4148__auto___16806;
var G__16809 = cljs.core.count.call(null,c__4148__auto___16806);
var G__16810 = 0;
seq__16791_16795 = G__16807;
chunk__16792_16796 = G__16808;
count__16793_16797 = G__16809;
i__16794_16798 = G__16810;
continue;
}
} else
{var node_16811 = cljs.core.first.call(null,seq__16791_16805__$1);goog.dom.classes.toggle(node_16811,class$);
{
var G__16812 = cljs.core.next.call(null,seq__16791_16805__$1);
var G__16813 = null;
var G__16814 = 0;
var G__16815 = 0;
seq__16791_16795 = G__16812;
chunk__16792_16796 = G__16813;
count__16793_16797 = G__16814;
i__16794_16798 = G__16815;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16824__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16820_16825 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16821_16826 = null;var count__16822_16827 = 0;var i__16823_16828 = 0;while(true){
if((i__16823_16828 < count__16822_16827))
{var node_16829 = cljs.core._nth.call(null,chunk__16821_16826,i__16823_16828);goog.dom.classes.set(node_16829,classes_16824__$1);
{
var G__16830 = seq__16820_16825;
var G__16831 = chunk__16821_16826;
var G__16832 = count__16822_16827;
var G__16833 = (i__16823_16828 + 1);
seq__16820_16825 = G__16830;
chunk__16821_16826 = G__16831;
count__16822_16827 = G__16832;
i__16823_16828 = G__16833;
continue;
}
} else
{var temp__4092__auto___16834 = cljs.core.seq.call(null,seq__16820_16825);if(temp__4092__auto___16834)
{var seq__16820_16835__$1 = temp__4092__auto___16834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16820_16835__$1))
{var c__4148__auto___16836 = cljs.core.chunk_first.call(null,seq__16820_16835__$1);{
var G__16837 = cljs.core.chunk_rest.call(null,seq__16820_16835__$1);
var G__16838 = c__4148__auto___16836;
var G__16839 = cljs.core.count.call(null,c__4148__auto___16836);
var G__16840 = 0;
seq__16820_16825 = G__16837;
chunk__16821_16826 = G__16838;
count__16822_16827 = G__16839;
i__16823_16828 = G__16840;
continue;
}
} else
{var node_16841 = cljs.core.first.call(null,seq__16820_16835__$1);goog.dom.classes.set(node_16841,classes_16824__$1);
{
var G__16842 = cljs.core.next.call(null,seq__16820_16835__$1);
var G__16843 = null;
var G__16844 = 0;
var G__16845 = 0;
seq__16820_16825 = G__16842;
chunk__16821_16826 = G__16843;
count__16822_16827 = G__16844;
i__16823_16828 = G__16845;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16850_16854 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16851_16855 = null;var count__16852_16856 = 0;var i__16853_16857 = 0;while(true){
if((i__16853_16857 < count__16852_16856))
{var node_16858 = cljs.core._nth.call(null,chunk__16851_16855,i__16853_16857);goog.dom.setTextContent(node_16858,value);
{
var G__16859 = seq__16850_16854;
var G__16860 = chunk__16851_16855;
var G__16861 = count__16852_16856;
var G__16862 = (i__16853_16857 + 1);
seq__16850_16854 = G__16859;
chunk__16851_16855 = G__16860;
count__16852_16856 = G__16861;
i__16853_16857 = G__16862;
continue;
}
} else
{var temp__4092__auto___16863 = cljs.core.seq.call(null,seq__16850_16854);if(temp__4092__auto___16863)
{var seq__16850_16864__$1 = temp__4092__auto___16863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16850_16864__$1))
{var c__4148__auto___16865 = cljs.core.chunk_first.call(null,seq__16850_16864__$1);{
var G__16866 = cljs.core.chunk_rest.call(null,seq__16850_16864__$1);
var G__16867 = c__4148__auto___16865;
var G__16868 = cljs.core.count.call(null,c__4148__auto___16865);
var G__16869 = 0;
seq__16850_16854 = G__16866;
chunk__16851_16855 = G__16867;
count__16852_16856 = G__16868;
i__16853_16857 = G__16869;
continue;
}
} else
{var node_16870 = cljs.core.first.call(null,seq__16850_16864__$1);goog.dom.setTextContent(node_16870,value);
{
var G__16871 = cljs.core.next.call(null,seq__16850_16864__$1);
var G__16872 = null;
var G__16873 = 0;
var G__16874 = 0;
seq__16850_16854 = G__16871;
chunk__16851_16855 = G__16872;
count__16852_16856 = G__16873;
i__16853_16857 = G__16874;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16879_16883 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16880_16884 = null;var count__16881_16885 = 0;var i__16882_16886 = 0;while(true){
if((i__16882_16886 < count__16881_16885))
{var node_16887 = cljs.core._nth.call(null,chunk__16880_16884,i__16882_16886);goog.dom.forms.setValue(node_16887,value);
{
var G__16888 = seq__16879_16883;
var G__16889 = chunk__16880_16884;
var G__16890 = count__16881_16885;
var G__16891 = (i__16882_16886 + 1);
seq__16879_16883 = G__16888;
chunk__16880_16884 = G__16889;
count__16881_16885 = G__16890;
i__16882_16886 = G__16891;
continue;
}
} else
{var temp__4092__auto___16892 = cljs.core.seq.call(null,seq__16879_16883);if(temp__4092__auto___16892)
{var seq__16879_16893__$1 = temp__4092__auto___16892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16879_16893__$1))
{var c__4148__auto___16894 = cljs.core.chunk_first.call(null,seq__16879_16893__$1);{
var G__16895 = cljs.core.chunk_rest.call(null,seq__16879_16893__$1);
var G__16896 = c__4148__auto___16894;
var G__16897 = cljs.core.count.call(null,c__4148__auto___16894);
var G__16898 = 0;
seq__16879_16883 = G__16895;
chunk__16880_16884 = G__16896;
count__16881_16885 = G__16897;
i__16882_16886 = G__16898;
continue;
}
} else
{var node_16899 = cljs.core.first.call(null,seq__16879_16893__$1);goog.dom.forms.setValue(node_16899,value);
{
var G__16900 = cljs.core.next.call(null,seq__16879_16893__$1);
var G__16901 = null;
var G__16902 = 0;
var G__16903 = 0;
seq__16879_16883 = G__16900;
chunk__16880_16884 = G__16901;
count__16881_16885 = G__16902;
i__16882_16886 = G__16903;
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
{var value_16914 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16910_16915 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16911_16916 = null;var count__16912_16917 = 0;var i__16913_16918 = 0;while(true){
if((i__16913_16918 < count__16912_16917))
{var node_16919 = cljs.core._nth.call(null,chunk__16911_16916,i__16913_16918);node_16919.innerHTML = value_16914;
{
var G__16920 = seq__16910_16915;
var G__16921 = chunk__16911_16916;
var G__16922 = count__16912_16917;
var G__16923 = (i__16913_16918 + 1);
seq__16910_16915 = G__16920;
chunk__16911_16916 = G__16921;
count__16912_16917 = G__16922;
i__16913_16918 = G__16923;
continue;
}
} else
{var temp__4092__auto___16924 = cljs.core.seq.call(null,seq__16910_16915);if(temp__4092__auto___16924)
{var seq__16910_16925__$1 = temp__4092__auto___16924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16910_16925__$1))
{var c__4148__auto___16926 = cljs.core.chunk_first.call(null,seq__16910_16925__$1);{
var G__16927 = cljs.core.chunk_rest.call(null,seq__16910_16925__$1);
var G__16928 = c__4148__auto___16926;
var G__16929 = cljs.core.count.call(null,c__4148__auto___16926);
var G__16930 = 0;
seq__16910_16915 = G__16927;
chunk__16911_16916 = G__16928;
count__16912_16917 = G__16929;
i__16913_16918 = G__16930;
continue;
}
} else
{var node_16931 = cljs.core.first.call(null,seq__16910_16925__$1);node_16931.innerHTML = value_16914;
{
var G__16932 = cljs.core.next.call(null,seq__16910_16925__$1);
var G__16933 = null;
var G__16934 = 0;
var G__16935 = 0;
seq__16910_16915 = G__16932;
chunk__16911_16916 = G__16933;
count__16912_16917 = G__16934;
i__16913_16918 = G__16935;
continue;
}
}
} else
{}
}
break;
}
}catch (e16909){if((e16909 instanceof Error))
{var e_16936 = e16909;domina.replace_children_BANG_.call(null,content,value_16914);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16909;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16943_16947 = cljs.core.seq.call(null,children);var chunk__16944_16948 = null;var count__16945_16949 = 0;var i__16946_16950 = 0;while(true){
if((i__16946_16950 < count__16945_16949))
{var child_16951 = cljs.core._nth.call(null,chunk__16944_16948,i__16946_16950);frag.appendChild(child_16951);
{
var G__16952 = seq__16943_16947;
var G__16953 = chunk__16944_16948;
var G__16954 = count__16945_16949;
var G__16955 = (i__16946_16950 + 1);
seq__16943_16947 = G__16952;
chunk__16944_16948 = G__16953;
count__16945_16949 = G__16954;
i__16946_16950 = G__16955;
continue;
}
} else
{var temp__4092__auto___16956 = cljs.core.seq.call(null,seq__16943_16947);if(temp__4092__auto___16956)
{var seq__16943_16957__$1 = temp__4092__auto___16956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16943_16957__$1))
{var c__4148__auto___16958 = cljs.core.chunk_first.call(null,seq__16943_16957__$1);{
var G__16959 = cljs.core.chunk_rest.call(null,seq__16943_16957__$1);
var G__16960 = c__4148__auto___16958;
var G__16961 = cljs.core.count.call(null,c__4148__auto___16958);
var G__16962 = 0;
seq__16943_16947 = G__16959;
chunk__16944_16948 = G__16960;
count__16945_16949 = G__16961;
i__16946_16950 = G__16962;
continue;
}
} else
{var child_16963 = cljs.core.first.call(null,seq__16943_16957__$1);frag.appendChild(child_16963);
{
var G__16964 = cljs.core.next.call(null,seq__16943_16957__$1);
var G__16965 = null;
var G__16966 = 0;
var G__16967 = 0;
seq__16943_16947 = G__16964;
chunk__16944_16948 = G__16965;
count__16945_16949 = G__16966;
i__16946_16950 = G__16967;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16937_SHARP_,p2__16938_SHARP_){return f.call(null,p1__16937_SHARP_,p2__16938_SHARP_);
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
{if((function (){var G__16969 = list_thing;if(G__16969)
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
{if((function (){var G__16970 = content;if(G__16970)
{var bit__4050__auto__ = (G__16970.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16970.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16970.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16970);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16970);
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
{if((function (){var G__16971 = content;if(G__16971)
{var bit__4050__auto__ = (G__16971.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16971.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16971.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16971);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16971);
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