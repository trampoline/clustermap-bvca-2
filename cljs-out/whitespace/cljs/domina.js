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
var opt_wrapper_36492 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36493 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36494 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36493,table_section_wrapper_36493,opt_wrapper_36492,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36494,table_section_wrapper_36493,cell_wrapper_36494,opt_wrapper_36492,table_section_wrapper_36493,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36493]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36499 = cljs.core.seq.call(null,tbody);var chunk__36500 = null;var count__36501 = 0;var i__36502 = 0;while(true){
if((i__36502 < count__36501))
{var child = cljs.core._nth.call(null,chunk__36500,i__36502);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36503 = seq__36499;
var G__36504 = chunk__36500;
var G__36505 = count__36501;
var G__36506 = (i__36502 + 1);
seq__36499 = G__36503;
chunk__36500 = G__36504;
count__36501 = G__36505;
i__36502 = G__36506;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36499);if(temp__4092__auto__)
{var seq__36499__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36499__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36499__$1);{
var G__36507 = cljs.core.chunk_rest.call(null,seq__36499__$1);
var G__36508 = c__4148__auto__;
var G__36509 = cljs.core.count.call(null,c__4148__auto__);
var G__36510 = 0;
seq__36499 = G__36507;
chunk__36500 = G__36508;
count__36501 = G__36509;
i__36502 = G__36510;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36499__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36511 = cljs.core.next.call(null,seq__36499__$1);
var G__36512 = null;
var G__36513 = 0;
var G__36514 = 0;
seq__36499 = G__36511;
chunk__36500 = G__36512;
count__36501 = G__36513;
i__36502 = G__36514;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36516 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36516,0,null);var start_wrap = cljs.core.nth.call(null,vec__36516,1,null);var end_wrap = cljs.core.nth.call(null,vec__36516,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36517 = wrapper.lastChild;
var G__36518 = (level - 1);
wrapper = G__36517;
level = G__36518;
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
domina.DomContent = (function (){var obj36520 = {};return obj36520;
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
log_debug.cljs$lang$applyTo = (function (arglist__36521){
var mesg = cljs.core.seq(arglist__36521);
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
log.cljs$lang$applyTo = (function (arglist__36522){
var mesg = cljs.core.seq(arglist__36522);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36523){
var contents = cljs.core.seq(arglist__36523);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36524_SHARP_){return p1__36524_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36525_SHARP_,p2__36526_SHARP_){return goog.dom.insertChildAt(p1__36525_SHARP_,p2__36526_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36528_SHARP_,p2__36527_SHARP_){return goog.dom.insertSiblingBefore(p2__36527_SHARP_,p1__36528_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36530_SHARP_,p2__36529_SHARP_){return goog.dom.insertSiblingAfter(p2__36529_SHARP_,p1__36530_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36532_SHARP_,p2__36531_SHARP_){return goog.dom.replaceNode(p2__36531_SHARP_,p1__36532_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36537_36541 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36538_36542 = null;var count__36539_36543 = 0;var i__36540_36544 = 0;while(true){
if((i__36540_36544 < count__36539_36543))
{var n_36545 = cljs.core._nth.call(null,chunk__36538_36542,i__36540_36544);goog.style.setStyle(n_36545,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36546 = seq__36537_36541;
var G__36547 = chunk__36538_36542;
var G__36548 = count__36539_36543;
var G__36549 = (i__36540_36544 + 1);
seq__36537_36541 = G__36546;
chunk__36538_36542 = G__36547;
count__36539_36543 = G__36548;
i__36540_36544 = G__36549;
continue;
}
} else
{var temp__4092__auto___36550 = cljs.core.seq.call(null,seq__36537_36541);if(temp__4092__auto___36550)
{var seq__36537_36551__$1 = temp__4092__auto___36550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36537_36551__$1))
{var c__4148__auto___36552 = cljs.core.chunk_first.call(null,seq__36537_36551__$1);{
var G__36553 = cljs.core.chunk_rest.call(null,seq__36537_36551__$1);
var G__36554 = c__4148__auto___36552;
var G__36555 = cljs.core.count.call(null,c__4148__auto___36552);
var G__36556 = 0;
seq__36537_36541 = G__36553;
chunk__36538_36542 = G__36554;
count__36539_36543 = G__36555;
i__36540_36544 = G__36556;
continue;
}
} else
{var n_36557 = cljs.core.first.call(null,seq__36537_36551__$1);goog.style.setStyle(n_36557,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36558 = cljs.core.next.call(null,seq__36537_36551__$1);
var G__36559 = null;
var G__36560 = 0;
var G__36561 = 0;
seq__36537_36541 = G__36558;
chunk__36538_36542 = G__36559;
count__36539_36543 = G__36560;
i__36540_36544 = G__36561;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36562){
var content = cljs.core.first(arglist__36562);
arglist__36562 = cljs.core.next(arglist__36562);
var name = cljs.core.first(arglist__36562);
var value = cljs.core.rest(arglist__36562);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36567_36571 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36568_36572 = null;var count__36569_36573 = 0;var i__36570_36574 = 0;while(true){
if((i__36570_36574 < count__36569_36573))
{var n_36575 = cljs.core._nth.call(null,chunk__36568_36572,i__36570_36574);n_36575.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36576 = seq__36567_36571;
var G__36577 = chunk__36568_36572;
var G__36578 = count__36569_36573;
var G__36579 = (i__36570_36574 + 1);
seq__36567_36571 = G__36576;
chunk__36568_36572 = G__36577;
count__36569_36573 = G__36578;
i__36570_36574 = G__36579;
continue;
}
} else
{var temp__4092__auto___36580 = cljs.core.seq.call(null,seq__36567_36571);if(temp__4092__auto___36580)
{var seq__36567_36581__$1 = temp__4092__auto___36580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36567_36581__$1))
{var c__4148__auto___36582 = cljs.core.chunk_first.call(null,seq__36567_36581__$1);{
var G__36583 = cljs.core.chunk_rest.call(null,seq__36567_36581__$1);
var G__36584 = c__4148__auto___36582;
var G__36585 = cljs.core.count.call(null,c__4148__auto___36582);
var G__36586 = 0;
seq__36567_36571 = G__36583;
chunk__36568_36572 = G__36584;
count__36569_36573 = G__36585;
i__36570_36574 = G__36586;
continue;
}
} else
{var n_36587 = cljs.core.first.call(null,seq__36567_36581__$1);n_36587.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36588 = cljs.core.next.call(null,seq__36567_36581__$1);
var G__36589 = null;
var G__36590 = 0;
var G__36591 = 0;
seq__36567_36571 = G__36588;
chunk__36568_36572 = G__36589;
count__36569_36573 = G__36590;
i__36570_36574 = G__36591;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36592){
var content = cljs.core.first(arglist__36592);
arglist__36592 = cljs.core.next(arglist__36592);
var name = cljs.core.first(arglist__36592);
var value = cljs.core.rest(arglist__36592);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36597_36601 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36598_36602 = null;var count__36599_36603 = 0;var i__36600_36604 = 0;while(true){
if((i__36600_36604 < count__36599_36603))
{var n_36605 = cljs.core._nth.call(null,chunk__36598_36602,i__36600_36604);n_36605.removeAttribute(cljs.core.name.call(null,name));
{
var G__36606 = seq__36597_36601;
var G__36607 = chunk__36598_36602;
var G__36608 = count__36599_36603;
var G__36609 = (i__36600_36604 + 1);
seq__36597_36601 = G__36606;
chunk__36598_36602 = G__36607;
count__36599_36603 = G__36608;
i__36600_36604 = G__36609;
continue;
}
} else
{var temp__4092__auto___36610 = cljs.core.seq.call(null,seq__36597_36601);if(temp__4092__auto___36610)
{var seq__36597_36611__$1 = temp__4092__auto___36610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36597_36611__$1))
{var c__4148__auto___36612 = cljs.core.chunk_first.call(null,seq__36597_36611__$1);{
var G__36613 = cljs.core.chunk_rest.call(null,seq__36597_36611__$1);
var G__36614 = c__4148__auto___36612;
var G__36615 = cljs.core.count.call(null,c__4148__auto___36612);
var G__36616 = 0;
seq__36597_36601 = G__36613;
chunk__36598_36602 = G__36614;
count__36599_36603 = G__36615;
i__36600_36604 = G__36616;
continue;
}
} else
{var n_36617 = cljs.core.first.call(null,seq__36597_36611__$1);n_36617.removeAttribute(cljs.core.name.call(null,name));
{
var G__36618 = cljs.core.next.call(null,seq__36597_36611__$1);
var G__36619 = null;
var G__36620 = 0;
var G__36621 = 0;
seq__36597_36601 = G__36618;
chunk__36598_36602 = G__36619;
count__36599_36603 = G__36620;
i__36600_36604 = G__36621;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36623 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36623,0,null);var v = cljs.core.nth.call(null,vec__36623,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36624_SHARP_){var attr = attrs__$1.item(p1__36624_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36631_36637 = cljs.core.seq.call(null,styles);var chunk__36632_36638 = null;var count__36633_36639 = 0;var i__36634_36640 = 0;while(true){
if((i__36634_36640 < count__36633_36639))
{var vec__36635_36641 = cljs.core._nth.call(null,chunk__36632_36638,i__36634_36640);var name_36642 = cljs.core.nth.call(null,vec__36635_36641,0,null);var value_36643 = cljs.core.nth.call(null,vec__36635_36641,1,null);domina.set_style_BANG_.call(null,content,name_36642,value_36643);
{
var G__36644 = seq__36631_36637;
var G__36645 = chunk__36632_36638;
var G__36646 = count__36633_36639;
var G__36647 = (i__36634_36640 + 1);
seq__36631_36637 = G__36644;
chunk__36632_36638 = G__36645;
count__36633_36639 = G__36646;
i__36634_36640 = G__36647;
continue;
}
} else
{var temp__4092__auto___36648 = cljs.core.seq.call(null,seq__36631_36637);if(temp__4092__auto___36648)
{var seq__36631_36649__$1 = temp__4092__auto___36648;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36631_36649__$1))
{var c__4148__auto___36650 = cljs.core.chunk_first.call(null,seq__36631_36649__$1);{
var G__36651 = cljs.core.chunk_rest.call(null,seq__36631_36649__$1);
var G__36652 = c__4148__auto___36650;
var G__36653 = cljs.core.count.call(null,c__4148__auto___36650);
var G__36654 = 0;
seq__36631_36637 = G__36651;
chunk__36632_36638 = G__36652;
count__36633_36639 = G__36653;
i__36634_36640 = G__36654;
continue;
}
} else
{var vec__36636_36655 = cljs.core.first.call(null,seq__36631_36649__$1);var name_36656 = cljs.core.nth.call(null,vec__36636_36655,0,null);var value_36657 = cljs.core.nth.call(null,vec__36636_36655,1,null);domina.set_style_BANG_.call(null,content,name_36656,value_36657);
{
var G__36658 = cljs.core.next.call(null,seq__36631_36649__$1);
var G__36659 = null;
var G__36660 = 0;
var G__36661 = 0;
seq__36631_36637 = G__36658;
chunk__36632_36638 = G__36659;
count__36633_36639 = G__36660;
i__36634_36640 = G__36661;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36668_36674 = cljs.core.seq.call(null,attrs);var chunk__36669_36675 = null;var count__36670_36676 = 0;var i__36671_36677 = 0;while(true){
if((i__36671_36677 < count__36670_36676))
{var vec__36672_36678 = cljs.core._nth.call(null,chunk__36669_36675,i__36671_36677);var name_36679 = cljs.core.nth.call(null,vec__36672_36678,0,null);var value_36680 = cljs.core.nth.call(null,vec__36672_36678,1,null);domina.set_attr_BANG_.call(null,content,name_36679,value_36680);
{
var G__36681 = seq__36668_36674;
var G__36682 = chunk__36669_36675;
var G__36683 = count__36670_36676;
var G__36684 = (i__36671_36677 + 1);
seq__36668_36674 = G__36681;
chunk__36669_36675 = G__36682;
count__36670_36676 = G__36683;
i__36671_36677 = G__36684;
continue;
}
} else
{var temp__4092__auto___36685 = cljs.core.seq.call(null,seq__36668_36674);if(temp__4092__auto___36685)
{var seq__36668_36686__$1 = temp__4092__auto___36685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36668_36686__$1))
{var c__4148__auto___36687 = cljs.core.chunk_first.call(null,seq__36668_36686__$1);{
var G__36688 = cljs.core.chunk_rest.call(null,seq__36668_36686__$1);
var G__36689 = c__4148__auto___36687;
var G__36690 = cljs.core.count.call(null,c__4148__auto___36687);
var G__36691 = 0;
seq__36668_36674 = G__36688;
chunk__36669_36675 = G__36689;
count__36670_36676 = G__36690;
i__36671_36677 = G__36691;
continue;
}
} else
{var vec__36673_36692 = cljs.core.first.call(null,seq__36668_36686__$1);var name_36693 = cljs.core.nth.call(null,vec__36673_36692,0,null);var value_36694 = cljs.core.nth.call(null,vec__36673_36692,1,null);domina.set_attr_BANG_.call(null,content,name_36693,value_36694);
{
var G__36695 = cljs.core.next.call(null,seq__36668_36686__$1);
var G__36696 = null;
var G__36697 = 0;
var G__36698 = 0;
seq__36668_36674 = G__36695;
chunk__36669_36675 = G__36696;
count__36670_36676 = G__36697;
i__36671_36677 = G__36698;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36703_36707 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36704_36708 = null;var count__36705_36709 = 0;var i__36706_36710 = 0;while(true){
if((i__36706_36710 < count__36705_36709))
{var node_36711 = cljs.core._nth.call(null,chunk__36704_36708,i__36706_36710);goog.dom.classes.add(node_36711,class$);
{
var G__36712 = seq__36703_36707;
var G__36713 = chunk__36704_36708;
var G__36714 = count__36705_36709;
var G__36715 = (i__36706_36710 + 1);
seq__36703_36707 = G__36712;
chunk__36704_36708 = G__36713;
count__36705_36709 = G__36714;
i__36706_36710 = G__36715;
continue;
}
} else
{var temp__4092__auto___36716 = cljs.core.seq.call(null,seq__36703_36707);if(temp__4092__auto___36716)
{var seq__36703_36717__$1 = temp__4092__auto___36716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36703_36717__$1))
{var c__4148__auto___36718 = cljs.core.chunk_first.call(null,seq__36703_36717__$1);{
var G__36719 = cljs.core.chunk_rest.call(null,seq__36703_36717__$1);
var G__36720 = c__4148__auto___36718;
var G__36721 = cljs.core.count.call(null,c__4148__auto___36718);
var G__36722 = 0;
seq__36703_36707 = G__36719;
chunk__36704_36708 = G__36720;
count__36705_36709 = G__36721;
i__36706_36710 = G__36722;
continue;
}
} else
{var node_36723 = cljs.core.first.call(null,seq__36703_36717__$1);goog.dom.classes.add(node_36723,class$);
{
var G__36724 = cljs.core.next.call(null,seq__36703_36717__$1);
var G__36725 = null;
var G__36726 = 0;
var G__36727 = 0;
seq__36703_36707 = G__36724;
chunk__36704_36708 = G__36725;
count__36705_36709 = G__36726;
i__36706_36710 = G__36727;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36732_36736 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36733_36737 = null;var count__36734_36738 = 0;var i__36735_36739 = 0;while(true){
if((i__36735_36739 < count__36734_36738))
{var node_36740 = cljs.core._nth.call(null,chunk__36733_36737,i__36735_36739);goog.dom.classes.remove(node_36740,class$);
{
var G__36741 = seq__36732_36736;
var G__36742 = chunk__36733_36737;
var G__36743 = count__36734_36738;
var G__36744 = (i__36735_36739 + 1);
seq__36732_36736 = G__36741;
chunk__36733_36737 = G__36742;
count__36734_36738 = G__36743;
i__36735_36739 = G__36744;
continue;
}
} else
{var temp__4092__auto___36745 = cljs.core.seq.call(null,seq__36732_36736);if(temp__4092__auto___36745)
{var seq__36732_36746__$1 = temp__4092__auto___36745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36732_36746__$1))
{var c__4148__auto___36747 = cljs.core.chunk_first.call(null,seq__36732_36746__$1);{
var G__36748 = cljs.core.chunk_rest.call(null,seq__36732_36746__$1);
var G__36749 = c__4148__auto___36747;
var G__36750 = cljs.core.count.call(null,c__4148__auto___36747);
var G__36751 = 0;
seq__36732_36736 = G__36748;
chunk__36733_36737 = G__36749;
count__36734_36738 = G__36750;
i__36735_36739 = G__36751;
continue;
}
} else
{var node_36752 = cljs.core.first.call(null,seq__36732_36746__$1);goog.dom.classes.remove(node_36752,class$);
{
var G__36753 = cljs.core.next.call(null,seq__36732_36746__$1);
var G__36754 = null;
var G__36755 = 0;
var G__36756 = 0;
seq__36732_36736 = G__36753;
chunk__36733_36737 = G__36754;
count__36734_36738 = G__36755;
i__36735_36739 = G__36756;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36761_36765 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36762_36766 = null;var count__36763_36767 = 0;var i__36764_36768 = 0;while(true){
if((i__36764_36768 < count__36763_36767))
{var node_36769 = cljs.core._nth.call(null,chunk__36762_36766,i__36764_36768);goog.dom.classes.toggle(node_36769,class$);
{
var G__36770 = seq__36761_36765;
var G__36771 = chunk__36762_36766;
var G__36772 = count__36763_36767;
var G__36773 = (i__36764_36768 + 1);
seq__36761_36765 = G__36770;
chunk__36762_36766 = G__36771;
count__36763_36767 = G__36772;
i__36764_36768 = G__36773;
continue;
}
} else
{var temp__4092__auto___36774 = cljs.core.seq.call(null,seq__36761_36765);if(temp__4092__auto___36774)
{var seq__36761_36775__$1 = temp__4092__auto___36774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36761_36775__$1))
{var c__4148__auto___36776 = cljs.core.chunk_first.call(null,seq__36761_36775__$1);{
var G__36777 = cljs.core.chunk_rest.call(null,seq__36761_36775__$1);
var G__36778 = c__4148__auto___36776;
var G__36779 = cljs.core.count.call(null,c__4148__auto___36776);
var G__36780 = 0;
seq__36761_36765 = G__36777;
chunk__36762_36766 = G__36778;
count__36763_36767 = G__36779;
i__36764_36768 = G__36780;
continue;
}
} else
{var node_36781 = cljs.core.first.call(null,seq__36761_36775__$1);goog.dom.classes.toggle(node_36781,class$);
{
var G__36782 = cljs.core.next.call(null,seq__36761_36775__$1);
var G__36783 = null;
var G__36784 = 0;
var G__36785 = 0;
seq__36761_36765 = G__36782;
chunk__36762_36766 = G__36783;
count__36763_36767 = G__36784;
i__36764_36768 = G__36785;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36794__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36790_36795 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36791_36796 = null;var count__36792_36797 = 0;var i__36793_36798 = 0;while(true){
if((i__36793_36798 < count__36792_36797))
{var node_36799 = cljs.core._nth.call(null,chunk__36791_36796,i__36793_36798);goog.dom.classes.set(node_36799,classes_36794__$1);
{
var G__36800 = seq__36790_36795;
var G__36801 = chunk__36791_36796;
var G__36802 = count__36792_36797;
var G__36803 = (i__36793_36798 + 1);
seq__36790_36795 = G__36800;
chunk__36791_36796 = G__36801;
count__36792_36797 = G__36802;
i__36793_36798 = G__36803;
continue;
}
} else
{var temp__4092__auto___36804 = cljs.core.seq.call(null,seq__36790_36795);if(temp__4092__auto___36804)
{var seq__36790_36805__$1 = temp__4092__auto___36804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36790_36805__$1))
{var c__4148__auto___36806 = cljs.core.chunk_first.call(null,seq__36790_36805__$1);{
var G__36807 = cljs.core.chunk_rest.call(null,seq__36790_36805__$1);
var G__36808 = c__4148__auto___36806;
var G__36809 = cljs.core.count.call(null,c__4148__auto___36806);
var G__36810 = 0;
seq__36790_36795 = G__36807;
chunk__36791_36796 = G__36808;
count__36792_36797 = G__36809;
i__36793_36798 = G__36810;
continue;
}
} else
{var node_36811 = cljs.core.first.call(null,seq__36790_36805__$1);goog.dom.classes.set(node_36811,classes_36794__$1);
{
var G__36812 = cljs.core.next.call(null,seq__36790_36805__$1);
var G__36813 = null;
var G__36814 = 0;
var G__36815 = 0;
seq__36790_36795 = G__36812;
chunk__36791_36796 = G__36813;
count__36792_36797 = G__36814;
i__36793_36798 = G__36815;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36820_36824 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36821_36825 = null;var count__36822_36826 = 0;var i__36823_36827 = 0;while(true){
if((i__36823_36827 < count__36822_36826))
{var node_36828 = cljs.core._nth.call(null,chunk__36821_36825,i__36823_36827);goog.dom.setTextContent(node_36828,value);
{
var G__36829 = seq__36820_36824;
var G__36830 = chunk__36821_36825;
var G__36831 = count__36822_36826;
var G__36832 = (i__36823_36827 + 1);
seq__36820_36824 = G__36829;
chunk__36821_36825 = G__36830;
count__36822_36826 = G__36831;
i__36823_36827 = G__36832;
continue;
}
} else
{var temp__4092__auto___36833 = cljs.core.seq.call(null,seq__36820_36824);if(temp__4092__auto___36833)
{var seq__36820_36834__$1 = temp__4092__auto___36833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36820_36834__$1))
{var c__4148__auto___36835 = cljs.core.chunk_first.call(null,seq__36820_36834__$1);{
var G__36836 = cljs.core.chunk_rest.call(null,seq__36820_36834__$1);
var G__36837 = c__4148__auto___36835;
var G__36838 = cljs.core.count.call(null,c__4148__auto___36835);
var G__36839 = 0;
seq__36820_36824 = G__36836;
chunk__36821_36825 = G__36837;
count__36822_36826 = G__36838;
i__36823_36827 = G__36839;
continue;
}
} else
{var node_36840 = cljs.core.first.call(null,seq__36820_36834__$1);goog.dom.setTextContent(node_36840,value);
{
var G__36841 = cljs.core.next.call(null,seq__36820_36834__$1);
var G__36842 = null;
var G__36843 = 0;
var G__36844 = 0;
seq__36820_36824 = G__36841;
chunk__36821_36825 = G__36842;
count__36822_36826 = G__36843;
i__36823_36827 = G__36844;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36849_36853 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36850_36854 = null;var count__36851_36855 = 0;var i__36852_36856 = 0;while(true){
if((i__36852_36856 < count__36851_36855))
{var node_36857 = cljs.core._nth.call(null,chunk__36850_36854,i__36852_36856);goog.dom.forms.setValue(node_36857,value);
{
var G__36858 = seq__36849_36853;
var G__36859 = chunk__36850_36854;
var G__36860 = count__36851_36855;
var G__36861 = (i__36852_36856 + 1);
seq__36849_36853 = G__36858;
chunk__36850_36854 = G__36859;
count__36851_36855 = G__36860;
i__36852_36856 = G__36861;
continue;
}
} else
{var temp__4092__auto___36862 = cljs.core.seq.call(null,seq__36849_36853);if(temp__4092__auto___36862)
{var seq__36849_36863__$1 = temp__4092__auto___36862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36849_36863__$1))
{var c__4148__auto___36864 = cljs.core.chunk_first.call(null,seq__36849_36863__$1);{
var G__36865 = cljs.core.chunk_rest.call(null,seq__36849_36863__$1);
var G__36866 = c__4148__auto___36864;
var G__36867 = cljs.core.count.call(null,c__4148__auto___36864);
var G__36868 = 0;
seq__36849_36853 = G__36865;
chunk__36850_36854 = G__36866;
count__36851_36855 = G__36867;
i__36852_36856 = G__36868;
continue;
}
} else
{var node_36869 = cljs.core.first.call(null,seq__36849_36863__$1);goog.dom.forms.setValue(node_36869,value);
{
var G__36870 = cljs.core.next.call(null,seq__36849_36863__$1);
var G__36871 = null;
var G__36872 = 0;
var G__36873 = 0;
seq__36849_36853 = G__36870;
chunk__36850_36854 = G__36871;
count__36851_36855 = G__36872;
i__36852_36856 = G__36873;
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
{var value_36884 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36880_36885 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36881_36886 = null;var count__36882_36887 = 0;var i__36883_36888 = 0;while(true){
if((i__36883_36888 < count__36882_36887))
{var node_36889 = cljs.core._nth.call(null,chunk__36881_36886,i__36883_36888);node_36889.innerHTML = value_36884;
{
var G__36890 = seq__36880_36885;
var G__36891 = chunk__36881_36886;
var G__36892 = count__36882_36887;
var G__36893 = (i__36883_36888 + 1);
seq__36880_36885 = G__36890;
chunk__36881_36886 = G__36891;
count__36882_36887 = G__36892;
i__36883_36888 = G__36893;
continue;
}
} else
{var temp__4092__auto___36894 = cljs.core.seq.call(null,seq__36880_36885);if(temp__4092__auto___36894)
{var seq__36880_36895__$1 = temp__4092__auto___36894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36880_36895__$1))
{var c__4148__auto___36896 = cljs.core.chunk_first.call(null,seq__36880_36895__$1);{
var G__36897 = cljs.core.chunk_rest.call(null,seq__36880_36895__$1);
var G__36898 = c__4148__auto___36896;
var G__36899 = cljs.core.count.call(null,c__4148__auto___36896);
var G__36900 = 0;
seq__36880_36885 = G__36897;
chunk__36881_36886 = G__36898;
count__36882_36887 = G__36899;
i__36883_36888 = G__36900;
continue;
}
} else
{var node_36901 = cljs.core.first.call(null,seq__36880_36895__$1);node_36901.innerHTML = value_36884;
{
var G__36902 = cljs.core.next.call(null,seq__36880_36895__$1);
var G__36903 = null;
var G__36904 = 0;
var G__36905 = 0;
seq__36880_36885 = G__36902;
chunk__36881_36886 = G__36903;
count__36882_36887 = G__36904;
i__36883_36888 = G__36905;
continue;
}
}
} else
{}
}
break;
}
}catch (e36879){if((e36879 instanceof Error))
{var e_36906 = e36879;domina.replace_children_BANG_.call(null,content,value_36884);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36879;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36913_36917 = cljs.core.seq.call(null,children);var chunk__36914_36918 = null;var count__36915_36919 = 0;var i__36916_36920 = 0;while(true){
if((i__36916_36920 < count__36915_36919))
{var child_36921 = cljs.core._nth.call(null,chunk__36914_36918,i__36916_36920);frag.appendChild(child_36921);
{
var G__36922 = seq__36913_36917;
var G__36923 = chunk__36914_36918;
var G__36924 = count__36915_36919;
var G__36925 = (i__36916_36920 + 1);
seq__36913_36917 = G__36922;
chunk__36914_36918 = G__36923;
count__36915_36919 = G__36924;
i__36916_36920 = G__36925;
continue;
}
} else
{var temp__4092__auto___36926 = cljs.core.seq.call(null,seq__36913_36917);if(temp__4092__auto___36926)
{var seq__36913_36927__$1 = temp__4092__auto___36926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36913_36927__$1))
{var c__4148__auto___36928 = cljs.core.chunk_first.call(null,seq__36913_36927__$1);{
var G__36929 = cljs.core.chunk_rest.call(null,seq__36913_36927__$1);
var G__36930 = c__4148__auto___36928;
var G__36931 = cljs.core.count.call(null,c__4148__auto___36928);
var G__36932 = 0;
seq__36913_36917 = G__36929;
chunk__36914_36918 = G__36930;
count__36915_36919 = G__36931;
i__36916_36920 = G__36932;
continue;
}
} else
{var child_36933 = cljs.core.first.call(null,seq__36913_36927__$1);frag.appendChild(child_36933);
{
var G__36934 = cljs.core.next.call(null,seq__36913_36927__$1);
var G__36935 = null;
var G__36936 = 0;
var G__36937 = 0;
seq__36913_36917 = G__36934;
chunk__36914_36918 = G__36935;
count__36915_36919 = G__36936;
i__36916_36920 = G__36937;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36907_SHARP_,p2__36908_SHARP_){return f.call(null,p1__36907_SHARP_,p2__36908_SHARP_);
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
{if((function (){var G__36939 = list_thing;if(G__36939)
{var bit__4050__auto__ = (G__36939.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36939.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36939.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36939);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36939);
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
{if((function (){var G__36940 = content;if(G__36940)
{var bit__4050__auto__ = (G__36940.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36940.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36940.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36940);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36940);
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
{if((function (){var G__36941 = content;if(G__36941)
{var bit__4050__auto__ = (G__36941.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36941.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36941.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36941);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36941);
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
