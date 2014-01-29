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
var opt_wrapper_16496 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16497 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16498 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16497,table_section_wrapper_16497,opt_wrapper_16496,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16498,table_section_wrapper_16497,cell_wrapper_16498,opt_wrapper_16496,table_section_wrapper_16497,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16497]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16503 = cljs.core.seq.call(null,tbody);var chunk__16504 = null;var count__16505 = 0;var i__16506 = 0;while(true){
if((i__16506 < count__16505))
{var child = cljs.core._nth.call(null,chunk__16504,i__16506);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16507 = seq__16503;
var G__16508 = chunk__16504;
var G__16509 = count__16505;
var G__16510 = (i__16506 + 1);
seq__16503 = G__16507;
chunk__16504 = G__16508;
count__16505 = G__16509;
i__16506 = G__16510;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16503);if(temp__4092__auto__)
{var seq__16503__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16503__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16503__$1);{
var G__16511 = cljs.core.chunk_rest.call(null,seq__16503__$1);
var G__16512 = c__4148__auto__;
var G__16513 = cljs.core.count.call(null,c__4148__auto__);
var G__16514 = 0;
seq__16503 = G__16511;
chunk__16504 = G__16512;
count__16505 = G__16513;
i__16506 = G__16514;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16503__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16515 = cljs.core.next.call(null,seq__16503__$1);
var G__16516 = null;
var G__16517 = 0;
var G__16518 = 0;
seq__16503 = G__16515;
chunk__16504 = G__16516;
count__16505 = G__16517;
i__16506 = G__16518;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16520 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16520,0,null);var start_wrap = cljs.core.nth.call(null,vec__16520,1,null);var end_wrap = cljs.core.nth.call(null,vec__16520,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16521 = wrapper.lastChild;
var G__16522 = (level - 1);
wrapper = G__16521;
level = G__16522;
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
domina.DomContent = (function (){var obj16524 = {};return obj16524;
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
log_debug.cljs$lang$applyTo = (function (arglist__16525){
var mesg = cljs.core.seq(arglist__16525);
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
log.cljs$lang$applyTo = (function (arglist__16526){
var mesg = cljs.core.seq(arglist__16526);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16527){
var contents = cljs.core.seq(arglist__16527);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16528_SHARP_){return p1__16528_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16529_SHARP_,p2__16530_SHARP_){return goog.dom.insertChildAt(p1__16529_SHARP_,p2__16530_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16532_SHARP_,p2__16531_SHARP_){return goog.dom.insertSiblingBefore(p2__16531_SHARP_,p1__16532_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16534_SHARP_,p2__16533_SHARP_){return goog.dom.insertSiblingAfter(p2__16533_SHARP_,p1__16534_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16536_SHARP_,p2__16535_SHARP_){return goog.dom.replaceNode(p2__16535_SHARP_,p1__16536_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16541_16545 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16542_16546 = null;var count__16543_16547 = 0;var i__16544_16548 = 0;while(true){
if((i__16544_16548 < count__16543_16547))
{var n_16549 = cljs.core._nth.call(null,chunk__16542_16546,i__16544_16548);goog.style.setStyle(n_16549,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16550 = seq__16541_16545;
var G__16551 = chunk__16542_16546;
var G__16552 = count__16543_16547;
var G__16553 = (i__16544_16548 + 1);
seq__16541_16545 = G__16550;
chunk__16542_16546 = G__16551;
count__16543_16547 = G__16552;
i__16544_16548 = G__16553;
continue;
}
} else
{var temp__4092__auto___16554 = cljs.core.seq.call(null,seq__16541_16545);if(temp__4092__auto___16554)
{var seq__16541_16555__$1 = temp__4092__auto___16554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16541_16555__$1))
{var c__4148__auto___16556 = cljs.core.chunk_first.call(null,seq__16541_16555__$1);{
var G__16557 = cljs.core.chunk_rest.call(null,seq__16541_16555__$1);
var G__16558 = c__4148__auto___16556;
var G__16559 = cljs.core.count.call(null,c__4148__auto___16556);
var G__16560 = 0;
seq__16541_16545 = G__16557;
chunk__16542_16546 = G__16558;
count__16543_16547 = G__16559;
i__16544_16548 = G__16560;
continue;
}
} else
{var n_16561 = cljs.core.first.call(null,seq__16541_16555__$1);goog.style.setStyle(n_16561,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16562 = cljs.core.next.call(null,seq__16541_16555__$1);
var G__16563 = null;
var G__16564 = 0;
var G__16565 = 0;
seq__16541_16545 = G__16562;
chunk__16542_16546 = G__16563;
count__16543_16547 = G__16564;
i__16544_16548 = G__16565;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16566){
var content = cljs.core.first(arglist__16566);
arglist__16566 = cljs.core.next(arglist__16566);
var name = cljs.core.first(arglist__16566);
var value = cljs.core.rest(arglist__16566);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16571_16575 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16572_16576 = null;var count__16573_16577 = 0;var i__16574_16578 = 0;while(true){
if((i__16574_16578 < count__16573_16577))
{var n_16579 = cljs.core._nth.call(null,chunk__16572_16576,i__16574_16578);n_16579.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16580 = seq__16571_16575;
var G__16581 = chunk__16572_16576;
var G__16582 = count__16573_16577;
var G__16583 = (i__16574_16578 + 1);
seq__16571_16575 = G__16580;
chunk__16572_16576 = G__16581;
count__16573_16577 = G__16582;
i__16574_16578 = G__16583;
continue;
}
} else
{var temp__4092__auto___16584 = cljs.core.seq.call(null,seq__16571_16575);if(temp__4092__auto___16584)
{var seq__16571_16585__$1 = temp__4092__auto___16584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16571_16585__$1))
{var c__4148__auto___16586 = cljs.core.chunk_first.call(null,seq__16571_16585__$1);{
var G__16587 = cljs.core.chunk_rest.call(null,seq__16571_16585__$1);
var G__16588 = c__4148__auto___16586;
var G__16589 = cljs.core.count.call(null,c__4148__auto___16586);
var G__16590 = 0;
seq__16571_16575 = G__16587;
chunk__16572_16576 = G__16588;
count__16573_16577 = G__16589;
i__16574_16578 = G__16590;
continue;
}
} else
{var n_16591 = cljs.core.first.call(null,seq__16571_16585__$1);n_16591.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16592 = cljs.core.next.call(null,seq__16571_16585__$1);
var G__16593 = null;
var G__16594 = 0;
var G__16595 = 0;
seq__16571_16575 = G__16592;
chunk__16572_16576 = G__16593;
count__16573_16577 = G__16594;
i__16574_16578 = G__16595;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16596){
var content = cljs.core.first(arglist__16596);
arglist__16596 = cljs.core.next(arglist__16596);
var name = cljs.core.first(arglist__16596);
var value = cljs.core.rest(arglist__16596);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16601_16605 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16602_16606 = null;var count__16603_16607 = 0;var i__16604_16608 = 0;while(true){
if((i__16604_16608 < count__16603_16607))
{var n_16609 = cljs.core._nth.call(null,chunk__16602_16606,i__16604_16608);n_16609.removeAttribute(cljs.core.name.call(null,name));
{
var G__16610 = seq__16601_16605;
var G__16611 = chunk__16602_16606;
var G__16612 = count__16603_16607;
var G__16613 = (i__16604_16608 + 1);
seq__16601_16605 = G__16610;
chunk__16602_16606 = G__16611;
count__16603_16607 = G__16612;
i__16604_16608 = G__16613;
continue;
}
} else
{var temp__4092__auto___16614 = cljs.core.seq.call(null,seq__16601_16605);if(temp__4092__auto___16614)
{var seq__16601_16615__$1 = temp__4092__auto___16614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16601_16615__$1))
{var c__4148__auto___16616 = cljs.core.chunk_first.call(null,seq__16601_16615__$1);{
var G__16617 = cljs.core.chunk_rest.call(null,seq__16601_16615__$1);
var G__16618 = c__4148__auto___16616;
var G__16619 = cljs.core.count.call(null,c__4148__auto___16616);
var G__16620 = 0;
seq__16601_16605 = G__16617;
chunk__16602_16606 = G__16618;
count__16603_16607 = G__16619;
i__16604_16608 = G__16620;
continue;
}
} else
{var n_16621 = cljs.core.first.call(null,seq__16601_16615__$1);n_16621.removeAttribute(cljs.core.name.call(null,name));
{
var G__16622 = cljs.core.next.call(null,seq__16601_16615__$1);
var G__16623 = null;
var G__16624 = 0;
var G__16625 = 0;
seq__16601_16605 = G__16622;
chunk__16602_16606 = G__16623;
count__16603_16607 = G__16624;
i__16604_16608 = G__16625;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16627 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16627,0,null);var v = cljs.core.nth.call(null,vec__16627,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16628_SHARP_){var attr = attrs__$1.item(p1__16628_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16635_16641 = cljs.core.seq.call(null,styles);var chunk__16636_16642 = null;var count__16637_16643 = 0;var i__16638_16644 = 0;while(true){
if((i__16638_16644 < count__16637_16643))
{var vec__16639_16645 = cljs.core._nth.call(null,chunk__16636_16642,i__16638_16644);var name_16646 = cljs.core.nth.call(null,vec__16639_16645,0,null);var value_16647 = cljs.core.nth.call(null,vec__16639_16645,1,null);domina.set_style_BANG_.call(null,content,name_16646,value_16647);
{
var G__16648 = seq__16635_16641;
var G__16649 = chunk__16636_16642;
var G__16650 = count__16637_16643;
var G__16651 = (i__16638_16644 + 1);
seq__16635_16641 = G__16648;
chunk__16636_16642 = G__16649;
count__16637_16643 = G__16650;
i__16638_16644 = G__16651;
continue;
}
} else
{var temp__4092__auto___16652 = cljs.core.seq.call(null,seq__16635_16641);if(temp__4092__auto___16652)
{var seq__16635_16653__$1 = temp__4092__auto___16652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16635_16653__$1))
{var c__4148__auto___16654 = cljs.core.chunk_first.call(null,seq__16635_16653__$1);{
var G__16655 = cljs.core.chunk_rest.call(null,seq__16635_16653__$1);
var G__16656 = c__4148__auto___16654;
var G__16657 = cljs.core.count.call(null,c__4148__auto___16654);
var G__16658 = 0;
seq__16635_16641 = G__16655;
chunk__16636_16642 = G__16656;
count__16637_16643 = G__16657;
i__16638_16644 = G__16658;
continue;
}
} else
{var vec__16640_16659 = cljs.core.first.call(null,seq__16635_16653__$1);var name_16660 = cljs.core.nth.call(null,vec__16640_16659,0,null);var value_16661 = cljs.core.nth.call(null,vec__16640_16659,1,null);domina.set_style_BANG_.call(null,content,name_16660,value_16661);
{
var G__16662 = cljs.core.next.call(null,seq__16635_16653__$1);
var G__16663 = null;
var G__16664 = 0;
var G__16665 = 0;
seq__16635_16641 = G__16662;
chunk__16636_16642 = G__16663;
count__16637_16643 = G__16664;
i__16638_16644 = G__16665;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16672_16678 = cljs.core.seq.call(null,attrs);var chunk__16673_16679 = null;var count__16674_16680 = 0;var i__16675_16681 = 0;while(true){
if((i__16675_16681 < count__16674_16680))
{var vec__16676_16682 = cljs.core._nth.call(null,chunk__16673_16679,i__16675_16681);var name_16683 = cljs.core.nth.call(null,vec__16676_16682,0,null);var value_16684 = cljs.core.nth.call(null,vec__16676_16682,1,null);domina.set_attr_BANG_.call(null,content,name_16683,value_16684);
{
var G__16685 = seq__16672_16678;
var G__16686 = chunk__16673_16679;
var G__16687 = count__16674_16680;
var G__16688 = (i__16675_16681 + 1);
seq__16672_16678 = G__16685;
chunk__16673_16679 = G__16686;
count__16674_16680 = G__16687;
i__16675_16681 = G__16688;
continue;
}
} else
{var temp__4092__auto___16689 = cljs.core.seq.call(null,seq__16672_16678);if(temp__4092__auto___16689)
{var seq__16672_16690__$1 = temp__4092__auto___16689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16672_16690__$1))
{var c__4148__auto___16691 = cljs.core.chunk_first.call(null,seq__16672_16690__$1);{
var G__16692 = cljs.core.chunk_rest.call(null,seq__16672_16690__$1);
var G__16693 = c__4148__auto___16691;
var G__16694 = cljs.core.count.call(null,c__4148__auto___16691);
var G__16695 = 0;
seq__16672_16678 = G__16692;
chunk__16673_16679 = G__16693;
count__16674_16680 = G__16694;
i__16675_16681 = G__16695;
continue;
}
} else
{var vec__16677_16696 = cljs.core.first.call(null,seq__16672_16690__$1);var name_16697 = cljs.core.nth.call(null,vec__16677_16696,0,null);var value_16698 = cljs.core.nth.call(null,vec__16677_16696,1,null);domina.set_attr_BANG_.call(null,content,name_16697,value_16698);
{
var G__16699 = cljs.core.next.call(null,seq__16672_16690__$1);
var G__16700 = null;
var G__16701 = 0;
var G__16702 = 0;
seq__16672_16678 = G__16699;
chunk__16673_16679 = G__16700;
count__16674_16680 = G__16701;
i__16675_16681 = G__16702;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16707_16711 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16708_16712 = null;var count__16709_16713 = 0;var i__16710_16714 = 0;while(true){
if((i__16710_16714 < count__16709_16713))
{var node_16715 = cljs.core._nth.call(null,chunk__16708_16712,i__16710_16714);goog.dom.classes.add(node_16715,class$);
{
var G__16716 = seq__16707_16711;
var G__16717 = chunk__16708_16712;
var G__16718 = count__16709_16713;
var G__16719 = (i__16710_16714 + 1);
seq__16707_16711 = G__16716;
chunk__16708_16712 = G__16717;
count__16709_16713 = G__16718;
i__16710_16714 = G__16719;
continue;
}
} else
{var temp__4092__auto___16720 = cljs.core.seq.call(null,seq__16707_16711);if(temp__4092__auto___16720)
{var seq__16707_16721__$1 = temp__4092__auto___16720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16707_16721__$1))
{var c__4148__auto___16722 = cljs.core.chunk_first.call(null,seq__16707_16721__$1);{
var G__16723 = cljs.core.chunk_rest.call(null,seq__16707_16721__$1);
var G__16724 = c__4148__auto___16722;
var G__16725 = cljs.core.count.call(null,c__4148__auto___16722);
var G__16726 = 0;
seq__16707_16711 = G__16723;
chunk__16708_16712 = G__16724;
count__16709_16713 = G__16725;
i__16710_16714 = G__16726;
continue;
}
} else
{var node_16727 = cljs.core.first.call(null,seq__16707_16721__$1);goog.dom.classes.add(node_16727,class$);
{
var G__16728 = cljs.core.next.call(null,seq__16707_16721__$1);
var G__16729 = null;
var G__16730 = 0;
var G__16731 = 0;
seq__16707_16711 = G__16728;
chunk__16708_16712 = G__16729;
count__16709_16713 = G__16730;
i__16710_16714 = G__16731;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16736_16740 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16737_16741 = null;var count__16738_16742 = 0;var i__16739_16743 = 0;while(true){
if((i__16739_16743 < count__16738_16742))
{var node_16744 = cljs.core._nth.call(null,chunk__16737_16741,i__16739_16743);goog.dom.classes.remove(node_16744,class$);
{
var G__16745 = seq__16736_16740;
var G__16746 = chunk__16737_16741;
var G__16747 = count__16738_16742;
var G__16748 = (i__16739_16743 + 1);
seq__16736_16740 = G__16745;
chunk__16737_16741 = G__16746;
count__16738_16742 = G__16747;
i__16739_16743 = G__16748;
continue;
}
} else
{var temp__4092__auto___16749 = cljs.core.seq.call(null,seq__16736_16740);if(temp__4092__auto___16749)
{var seq__16736_16750__$1 = temp__4092__auto___16749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16736_16750__$1))
{var c__4148__auto___16751 = cljs.core.chunk_first.call(null,seq__16736_16750__$1);{
var G__16752 = cljs.core.chunk_rest.call(null,seq__16736_16750__$1);
var G__16753 = c__4148__auto___16751;
var G__16754 = cljs.core.count.call(null,c__4148__auto___16751);
var G__16755 = 0;
seq__16736_16740 = G__16752;
chunk__16737_16741 = G__16753;
count__16738_16742 = G__16754;
i__16739_16743 = G__16755;
continue;
}
} else
{var node_16756 = cljs.core.first.call(null,seq__16736_16750__$1);goog.dom.classes.remove(node_16756,class$);
{
var G__16757 = cljs.core.next.call(null,seq__16736_16750__$1);
var G__16758 = null;
var G__16759 = 0;
var G__16760 = 0;
seq__16736_16740 = G__16757;
chunk__16737_16741 = G__16758;
count__16738_16742 = G__16759;
i__16739_16743 = G__16760;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16765_16769 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16766_16770 = null;var count__16767_16771 = 0;var i__16768_16772 = 0;while(true){
if((i__16768_16772 < count__16767_16771))
{var node_16773 = cljs.core._nth.call(null,chunk__16766_16770,i__16768_16772);goog.dom.classes.toggle(node_16773,class$);
{
var G__16774 = seq__16765_16769;
var G__16775 = chunk__16766_16770;
var G__16776 = count__16767_16771;
var G__16777 = (i__16768_16772 + 1);
seq__16765_16769 = G__16774;
chunk__16766_16770 = G__16775;
count__16767_16771 = G__16776;
i__16768_16772 = G__16777;
continue;
}
} else
{var temp__4092__auto___16778 = cljs.core.seq.call(null,seq__16765_16769);if(temp__4092__auto___16778)
{var seq__16765_16779__$1 = temp__4092__auto___16778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16765_16779__$1))
{var c__4148__auto___16780 = cljs.core.chunk_first.call(null,seq__16765_16779__$1);{
var G__16781 = cljs.core.chunk_rest.call(null,seq__16765_16779__$1);
var G__16782 = c__4148__auto___16780;
var G__16783 = cljs.core.count.call(null,c__4148__auto___16780);
var G__16784 = 0;
seq__16765_16769 = G__16781;
chunk__16766_16770 = G__16782;
count__16767_16771 = G__16783;
i__16768_16772 = G__16784;
continue;
}
} else
{var node_16785 = cljs.core.first.call(null,seq__16765_16779__$1);goog.dom.classes.toggle(node_16785,class$);
{
var G__16786 = cljs.core.next.call(null,seq__16765_16779__$1);
var G__16787 = null;
var G__16788 = 0;
var G__16789 = 0;
seq__16765_16769 = G__16786;
chunk__16766_16770 = G__16787;
count__16767_16771 = G__16788;
i__16768_16772 = G__16789;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16798__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16794_16799 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16795_16800 = null;var count__16796_16801 = 0;var i__16797_16802 = 0;while(true){
if((i__16797_16802 < count__16796_16801))
{var node_16803 = cljs.core._nth.call(null,chunk__16795_16800,i__16797_16802);goog.dom.classes.set(node_16803,classes_16798__$1);
{
var G__16804 = seq__16794_16799;
var G__16805 = chunk__16795_16800;
var G__16806 = count__16796_16801;
var G__16807 = (i__16797_16802 + 1);
seq__16794_16799 = G__16804;
chunk__16795_16800 = G__16805;
count__16796_16801 = G__16806;
i__16797_16802 = G__16807;
continue;
}
} else
{var temp__4092__auto___16808 = cljs.core.seq.call(null,seq__16794_16799);if(temp__4092__auto___16808)
{var seq__16794_16809__$1 = temp__4092__auto___16808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16794_16809__$1))
{var c__4148__auto___16810 = cljs.core.chunk_first.call(null,seq__16794_16809__$1);{
var G__16811 = cljs.core.chunk_rest.call(null,seq__16794_16809__$1);
var G__16812 = c__4148__auto___16810;
var G__16813 = cljs.core.count.call(null,c__4148__auto___16810);
var G__16814 = 0;
seq__16794_16799 = G__16811;
chunk__16795_16800 = G__16812;
count__16796_16801 = G__16813;
i__16797_16802 = G__16814;
continue;
}
} else
{var node_16815 = cljs.core.first.call(null,seq__16794_16809__$1);goog.dom.classes.set(node_16815,classes_16798__$1);
{
var G__16816 = cljs.core.next.call(null,seq__16794_16809__$1);
var G__16817 = null;
var G__16818 = 0;
var G__16819 = 0;
seq__16794_16799 = G__16816;
chunk__16795_16800 = G__16817;
count__16796_16801 = G__16818;
i__16797_16802 = G__16819;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16824_16828 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16825_16829 = null;var count__16826_16830 = 0;var i__16827_16831 = 0;while(true){
if((i__16827_16831 < count__16826_16830))
{var node_16832 = cljs.core._nth.call(null,chunk__16825_16829,i__16827_16831);goog.dom.setTextContent(node_16832,value);
{
var G__16833 = seq__16824_16828;
var G__16834 = chunk__16825_16829;
var G__16835 = count__16826_16830;
var G__16836 = (i__16827_16831 + 1);
seq__16824_16828 = G__16833;
chunk__16825_16829 = G__16834;
count__16826_16830 = G__16835;
i__16827_16831 = G__16836;
continue;
}
} else
{var temp__4092__auto___16837 = cljs.core.seq.call(null,seq__16824_16828);if(temp__4092__auto___16837)
{var seq__16824_16838__$1 = temp__4092__auto___16837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16824_16838__$1))
{var c__4148__auto___16839 = cljs.core.chunk_first.call(null,seq__16824_16838__$1);{
var G__16840 = cljs.core.chunk_rest.call(null,seq__16824_16838__$1);
var G__16841 = c__4148__auto___16839;
var G__16842 = cljs.core.count.call(null,c__4148__auto___16839);
var G__16843 = 0;
seq__16824_16828 = G__16840;
chunk__16825_16829 = G__16841;
count__16826_16830 = G__16842;
i__16827_16831 = G__16843;
continue;
}
} else
{var node_16844 = cljs.core.first.call(null,seq__16824_16838__$1);goog.dom.setTextContent(node_16844,value);
{
var G__16845 = cljs.core.next.call(null,seq__16824_16838__$1);
var G__16846 = null;
var G__16847 = 0;
var G__16848 = 0;
seq__16824_16828 = G__16845;
chunk__16825_16829 = G__16846;
count__16826_16830 = G__16847;
i__16827_16831 = G__16848;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16853_16857 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16854_16858 = null;var count__16855_16859 = 0;var i__16856_16860 = 0;while(true){
if((i__16856_16860 < count__16855_16859))
{var node_16861 = cljs.core._nth.call(null,chunk__16854_16858,i__16856_16860);goog.dom.forms.setValue(node_16861,value);
{
var G__16862 = seq__16853_16857;
var G__16863 = chunk__16854_16858;
var G__16864 = count__16855_16859;
var G__16865 = (i__16856_16860 + 1);
seq__16853_16857 = G__16862;
chunk__16854_16858 = G__16863;
count__16855_16859 = G__16864;
i__16856_16860 = G__16865;
continue;
}
} else
{var temp__4092__auto___16866 = cljs.core.seq.call(null,seq__16853_16857);if(temp__4092__auto___16866)
{var seq__16853_16867__$1 = temp__4092__auto___16866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16853_16867__$1))
{var c__4148__auto___16868 = cljs.core.chunk_first.call(null,seq__16853_16867__$1);{
var G__16869 = cljs.core.chunk_rest.call(null,seq__16853_16867__$1);
var G__16870 = c__4148__auto___16868;
var G__16871 = cljs.core.count.call(null,c__4148__auto___16868);
var G__16872 = 0;
seq__16853_16857 = G__16869;
chunk__16854_16858 = G__16870;
count__16855_16859 = G__16871;
i__16856_16860 = G__16872;
continue;
}
} else
{var node_16873 = cljs.core.first.call(null,seq__16853_16867__$1);goog.dom.forms.setValue(node_16873,value);
{
var G__16874 = cljs.core.next.call(null,seq__16853_16867__$1);
var G__16875 = null;
var G__16876 = 0;
var G__16877 = 0;
seq__16853_16857 = G__16874;
chunk__16854_16858 = G__16875;
count__16855_16859 = G__16876;
i__16856_16860 = G__16877;
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
{var value_16888 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16884_16889 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16885_16890 = null;var count__16886_16891 = 0;var i__16887_16892 = 0;while(true){
if((i__16887_16892 < count__16886_16891))
{var node_16893 = cljs.core._nth.call(null,chunk__16885_16890,i__16887_16892);node_16893.innerHTML = value_16888;
{
var G__16894 = seq__16884_16889;
var G__16895 = chunk__16885_16890;
var G__16896 = count__16886_16891;
var G__16897 = (i__16887_16892 + 1);
seq__16884_16889 = G__16894;
chunk__16885_16890 = G__16895;
count__16886_16891 = G__16896;
i__16887_16892 = G__16897;
continue;
}
} else
{var temp__4092__auto___16898 = cljs.core.seq.call(null,seq__16884_16889);if(temp__4092__auto___16898)
{var seq__16884_16899__$1 = temp__4092__auto___16898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16884_16899__$1))
{var c__4148__auto___16900 = cljs.core.chunk_first.call(null,seq__16884_16899__$1);{
var G__16901 = cljs.core.chunk_rest.call(null,seq__16884_16899__$1);
var G__16902 = c__4148__auto___16900;
var G__16903 = cljs.core.count.call(null,c__4148__auto___16900);
var G__16904 = 0;
seq__16884_16889 = G__16901;
chunk__16885_16890 = G__16902;
count__16886_16891 = G__16903;
i__16887_16892 = G__16904;
continue;
}
} else
{var node_16905 = cljs.core.first.call(null,seq__16884_16899__$1);node_16905.innerHTML = value_16888;
{
var G__16906 = cljs.core.next.call(null,seq__16884_16899__$1);
var G__16907 = null;
var G__16908 = 0;
var G__16909 = 0;
seq__16884_16889 = G__16906;
chunk__16885_16890 = G__16907;
count__16886_16891 = G__16908;
i__16887_16892 = G__16909;
continue;
}
}
} else
{}
}
break;
}
}catch (e16883){if((e16883 instanceof Error))
{var e_16910 = e16883;domina.replace_children_BANG_.call(null,content,value_16888);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16883;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16917_16921 = cljs.core.seq.call(null,children);var chunk__16918_16922 = null;var count__16919_16923 = 0;var i__16920_16924 = 0;while(true){
if((i__16920_16924 < count__16919_16923))
{var child_16925 = cljs.core._nth.call(null,chunk__16918_16922,i__16920_16924);frag.appendChild(child_16925);
{
var G__16926 = seq__16917_16921;
var G__16927 = chunk__16918_16922;
var G__16928 = count__16919_16923;
var G__16929 = (i__16920_16924 + 1);
seq__16917_16921 = G__16926;
chunk__16918_16922 = G__16927;
count__16919_16923 = G__16928;
i__16920_16924 = G__16929;
continue;
}
} else
{var temp__4092__auto___16930 = cljs.core.seq.call(null,seq__16917_16921);if(temp__4092__auto___16930)
{var seq__16917_16931__$1 = temp__4092__auto___16930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16917_16931__$1))
{var c__4148__auto___16932 = cljs.core.chunk_first.call(null,seq__16917_16931__$1);{
var G__16933 = cljs.core.chunk_rest.call(null,seq__16917_16931__$1);
var G__16934 = c__4148__auto___16932;
var G__16935 = cljs.core.count.call(null,c__4148__auto___16932);
var G__16936 = 0;
seq__16917_16921 = G__16933;
chunk__16918_16922 = G__16934;
count__16919_16923 = G__16935;
i__16920_16924 = G__16936;
continue;
}
} else
{var child_16937 = cljs.core.first.call(null,seq__16917_16931__$1);frag.appendChild(child_16937);
{
var G__16938 = cljs.core.next.call(null,seq__16917_16931__$1);
var G__16939 = null;
var G__16940 = 0;
var G__16941 = 0;
seq__16917_16921 = G__16938;
chunk__16918_16922 = G__16939;
count__16919_16923 = G__16940;
i__16920_16924 = G__16941;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16911_SHARP_,p2__16912_SHARP_){return f.call(null,p1__16911_SHARP_,p2__16912_SHARP_);
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
{if((function (){var G__16943 = list_thing;if(G__16943)
{var bit__4050__auto__ = (G__16943.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16943.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16943.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16943);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16943);
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
{if((function (){var G__16944 = content;if(G__16944)
{var bit__4050__auto__ = (G__16944.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16944.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16944.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16944);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16944);
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
{if((function (){var G__16945 = content;if(G__16945)
{var bit__4050__auto__ = (G__16945.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16945.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16945.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16945);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16945);
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