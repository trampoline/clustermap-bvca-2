// Compiled by ClojureScript 0.0-2261
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_54500 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_54501 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_54502 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_54502,opt_wrapper_54500,table_section_wrapper_54501,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_54500,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_54501,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_54501,cell_wrapper_54502,table_section_wrapper_54501,table_section_wrapper_54501]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__54507 = cljs.core.seq.call(null,tbody);var chunk__54508 = null;var count__54509 = (0);var i__54510 = (0);while(true){
if((i__54510 < count__54509))
{var child = cljs.core._nth.call(null,chunk__54508,i__54510);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54511 = seq__54507;
var G__54512 = chunk__54508;
var G__54513 = count__54509;
var G__54514 = (i__54510 + (1));
seq__54507 = G__54511;
chunk__54508 = G__54512;
count__54509 = G__54513;
i__54510 = G__54514;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__54507);if(temp__4126__auto__)
{var seq__54507__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54507__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__54507__$1);{
var G__54515 = cljs.core.chunk_rest.call(null,seq__54507__$1);
var G__54516 = c__4299__auto__;
var G__54517 = cljs.core.count.call(null,c__4299__auto__);
var G__54518 = (0);
seq__54507 = G__54515;
chunk__54508 = G__54516;
count__54509 = G__54517;
i__54510 = G__54518;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__54507__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54519 = cljs.core.next.call(null,seq__54507__$1);
var G__54520 = null;
var G__54521 = (0);
var G__54522 = (0);
seq__54507 = G__54519;
chunk__54508 = G__54520;
count__54509 = G__54521;
i__54510 = G__54522;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__54524 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__54524,(0),null);var start_wrap = cljs.core.nth.call(null,vec__54524,(1),null);var end_wrap = cljs.core.nth.call(null,vec__54524,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__54525 = wrapper.lastChild;
var G__54526 = (level - (1));
wrapper = G__54525;
level = G__54526;
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
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
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
domina.DomContent = (function (){var obj54528 = {};return obj54528;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__54529){
var mesg = cljs.core.seq(arglist__54529);
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
log.cljs$lang$applyTo = (function (arglist__54530){
var mesg = cljs.core.seq(arglist__54530);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__54531){
var contents = cljs.core.seq(arglist__54531);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__54532_SHARP_){return p1__54532_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__54533_SHARP_,p2__54534_SHARP_){return goog.dom.insertChildAt(p1__54533_SHARP_,p2__54534_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__54536_SHARP_,p2__54535_SHARP_){return goog.dom.insertSiblingBefore(p2__54535_SHARP_,p1__54536_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__54538_SHARP_,p2__54537_SHARP_){return goog.dom.insertSiblingAfter(p2__54537_SHARP_,p1__54538_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__54540_SHARP_,p2__54539_SHARP_){return goog.dom.replaceNode(p2__54539_SHARP_,p1__54540_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__54545_54549 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54546_54550 = null;var count__54547_54551 = (0);var i__54548_54552 = (0);while(true){
if((i__54548_54552 < count__54547_54551))
{var n_54553 = cljs.core._nth.call(null,chunk__54546_54550,i__54548_54552);goog.style.setStyle(n_54553,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54554 = seq__54545_54549;
var G__54555 = chunk__54546_54550;
var G__54556 = count__54547_54551;
var G__54557 = (i__54548_54552 + (1));
seq__54545_54549 = G__54554;
chunk__54546_54550 = G__54555;
count__54547_54551 = G__54556;
i__54548_54552 = G__54557;
continue;
}
} else
{var temp__4126__auto___54558 = cljs.core.seq.call(null,seq__54545_54549);if(temp__4126__auto___54558)
{var seq__54545_54559__$1 = temp__4126__auto___54558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54545_54559__$1))
{var c__4299__auto___54560 = cljs.core.chunk_first.call(null,seq__54545_54559__$1);{
var G__54561 = cljs.core.chunk_rest.call(null,seq__54545_54559__$1);
var G__54562 = c__4299__auto___54560;
var G__54563 = cljs.core.count.call(null,c__4299__auto___54560);
var G__54564 = (0);
seq__54545_54549 = G__54561;
chunk__54546_54550 = G__54562;
count__54547_54551 = G__54563;
i__54548_54552 = G__54564;
continue;
}
} else
{var n_54565 = cljs.core.first.call(null,seq__54545_54559__$1);goog.style.setStyle(n_54565,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54566 = cljs.core.next.call(null,seq__54545_54559__$1);
var G__54567 = null;
var G__54568 = (0);
var G__54569 = (0);
seq__54545_54549 = G__54566;
chunk__54546_54550 = G__54567;
count__54547_54551 = G__54568;
i__54548_54552 = G__54569;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__54570){
var content = cljs.core.first(arglist__54570);
arglist__54570 = cljs.core.next(arglist__54570);
var name = cljs.core.first(arglist__54570);
var value = cljs.core.rest(arglist__54570);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__54575_54579 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54576_54580 = null;var count__54577_54581 = (0);var i__54578_54582 = (0);while(true){
if((i__54578_54582 < count__54577_54581))
{var n_54583 = cljs.core._nth.call(null,chunk__54576_54580,i__54578_54582);n_54583.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54584 = seq__54575_54579;
var G__54585 = chunk__54576_54580;
var G__54586 = count__54577_54581;
var G__54587 = (i__54578_54582 + (1));
seq__54575_54579 = G__54584;
chunk__54576_54580 = G__54585;
count__54577_54581 = G__54586;
i__54578_54582 = G__54587;
continue;
}
} else
{var temp__4126__auto___54588 = cljs.core.seq.call(null,seq__54575_54579);if(temp__4126__auto___54588)
{var seq__54575_54589__$1 = temp__4126__auto___54588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54575_54589__$1))
{var c__4299__auto___54590 = cljs.core.chunk_first.call(null,seq__54575_54589__$1);{
var G__54591 = cljs.core.chunk_rest.call(null,seq__54575_54589__$1);
var G__54592 = c__4299__auto___54590;
var G__54593 = cljs.core.count.call(null,c__4299__auto___54590);
var G__54594 = (0);
seq__54575_54579 = G__54591;
chunk__54576_54580 = G__54592;
count__54577_54581 = G__54593;
i__54578_54582 = G__54594;
continue;
}
} else
{var n_54595 = cljs.core.first.call(null,seq__54575_54589__$1);n_54595.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54596 = cljs.core.next.call(null,seq__54575_54589__$1);
var G__54597 = null;
var G__54598 = (0);
var G__54599 = (0);
seq__54575_54579 = G__54596;
chunk__54576_54580 = G__54597;
count__54577_54581 = G__54598;
i__54578_54582 = G__54599;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__54600){
var content = cljs.core.first(arglist__54600);
arglist__54600 = cljs.core.next(arglist__54600);
var name = cljs.core.first(arglist__54600);
var value = cljs.core.rest(arglist__54600);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__54605_54609 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54606_54610 = null;var count__54607_54611 = (0);var i__54608_54612 = (0);while(true){
if((i__54608_54612 < count__54607_54611))
{var n_54613 = cljs.core._nth.call(null,chunk__54606_54610,i__54608_54612);n_54613.removeAttribute(cljs.core.name.call(null,name));
{
var G__54614 = seq__54605_54609;
var G__54615 = chunk__54606_54610;
var G__54616 = count__54607_54611;
var G__54617 = (i__54608_54612 + (1));
seq__54605_54609 = G__54614;
chunk__54606_54610 = G__54615;
count__54607_54611 = G__54616;
i__54608_54612 = G__54617;
continue;
}
} else
{var temp__4126__auto___54618 = cljs.core.seq.call(null,seq__54605_54609);if(temp__4126__auto___54618)
{var seq__54605_54619__$1 = temp__4126__auto___54618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54605_54619__$1))
{var c__4299__auto___54620 = cljs.core.chunk_first.call(null,seq__54605_54619__$1);{
var G__54621 = cljs.core.chunk_rest.call(null,seq__54605_54619__$1);
var G__54622 = c__4299__auto___54620;
var G__54623 = cljs.core.count.call(null,c__4299__auto___54620);
var G__54624 = (0);
seq__54605_54609 = G__54621;
chunk__54606_54610 = G__54622;
count__54607_54611 = G__54623;
i__54608_54612 = G__54624;
continue;
}
} else
{var n_54625 = cljs.core.first.call(null,seq__54605_54619__$1);n_54625.removeAttribute(cljs.core.name.call(null,name));
{
var G__54626 = cljs.core.next.call(null,seq__54605_54619__$1);
var G__54627 = null;
var G__54628 = (0);
var G__54629 = (0);
seq__54605_54609 = G__54626;
chunk__54606_54610 = G__54627;
count__54607_54611 = G__54628;
i__54608_54612 = G__54629;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__54631 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__54631,(0),null);var v = cljs.core.nth.call(null,vec__54631,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__54632_SHARP_){var attr = attrs__$1.item(p1__54632_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__54639_54645 = cljs.core.seq.call(null,styles);var chunk__54640_54646 = null;var count__54641_54647 = (0);var i__54642_54648 = (0);while(true){
if((i__54642_54648 < count__54641_54647))
{var vec__54643_54649 = cljs.core._nth.call(null,chunk__54640_54646,i__54642_54648);var name_54650 = cljs.core.nth.call(null,vec__54643_54649,(0),null);var value_54651 = cljs.core.nth.call(null,vec__54643_54649,(1),null);domina.set_style_BANG_.call(null,content,name_54650,value_54651);
{
var G__54652 = seq__54639_54645;
var G__54653 = chunk__54640_54646;
var G__54654 = count__54641_54647;
var G__54655 = (i__54642_54648 + (1));
seq__54639_54645 = G__54652;
chunk__54640_54646 = G__54653;
count__54641_54647 = G__54654;
i__54642_54648 = G__54655;
continue;
}
} else
{var temp__4126__auto___54656 = cljs.core.seq.call(null,seq__54639_54645);if(temp__4126__auto___54656)
{var seq__54639_54657__$1 = temp__4126__auto___54656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54639_54657__$1))
{var c__4299__auto___54658 = cljs.core.chunk_first.call(null,seq__54639_54657__$1);{
var G__54659 = cljs.core.chunk_rest.call(null,seq__54639_54657__$1);
var G__54660 = c__4299__auto___54658;
var G__54661 = cljs.core.count.call(null,c__4299__auto___54658);
var G__54662 = (0);
seq__54639_54645 = G__54659;
chunk__54640_54646 = G__54660;
count__54641_54647 = G__54661;
i__54642_54648 = G__54662;
continue;
}
} else
{var vec__54644_54663 = cljs.core.first.call(null,seq__54639_54657__$1);var name_54664 = cljs.core.nth.call(null,vec__54644_54663,(0),null);var value_54665 = cljs.core.nth.call(null,vec__54644_54663,(1),null);domina.set_style_BANG_.call(null,content,name_54664,value_54665);
{
var G__54666 = cljs.core.next.call(null,seq__54639_54657__$1);
var G__54667 = null;
var G__54668 = (0);
var G__54669 = (0);
seq__54639_54645 = G__54666;
chunk__54640_54646 = G__54667;
count__54641_54647 = G__54668;
i__54642_54648 = G__54669;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__54676_54682 = cljs.core.seq.call(null,attrs);var chunk__54677_54683 = null;var count__54678_54684 = (0);var i__54679_54685 = (0);while(true){
if((i__54679_54685 < count__54678_54684))
{var vec__54680_54686 = cljs.core._nth.call(null,chunk__54677_54683,i__54679_54685);var name_54687 = cljs.core.nth.call(null,vec__54680_54686,(0),null);var value_54688 = cljs.core.nth.call(null,vec__54680_54686,(1),null);domina.set_attr_BANG_.call(null,content,name_54687,value_54688);
{
var G__54689 = seq__54676_54682;
var G__54690 = chunk__54677_54683;
var G__54691 = count__54678_54684;
var G__54692 = (i__54679_54685 + (1));
seq__54676_54682 = G__54689;
chunk__54677_54683 = G__54690;
count__54678_54684 = G__54691;
i__54679_54685 = G__54692;
continue;
}
} else
{var temp__4126__auto___54693 = cljs.core.seq.call(null,seq__54676_54682);if(temp__4126__auto___54693)
{var seq__54676_54694__$1 = temp__4126__auto___54693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54676_54694__$1))
{var c__4299__auto___54695 = cljs.core.chunk_first.call(null,seq__54676_54694__$1);{
var G__54696 = cljs.core.chunk_rest.call(null,seq__54676_54694__$1);
var G__54697 = c__4299__auto___54695;
var G__54698 = cljs.core.count.call(null,c__4299__auto___54695);
var G__54699 = (0);
seq__54676_54682 = G__54696;
chunk__54677_54683 = G__54697;
count__54678_54684 = G__54698;
i__54679_54685 = G__54699;
continue;
}
} else
{var vec__54681_54700 = cljs.core.first.call(null,seq__54676_54694__$1);var name_54701 = cljs.core.nth.call(null,vec__54681_54700,(0),null);var value_54702 = cljs.core.nth.call(null,vec__54681_54700,(1),null);domina.set_attr_BANG_.call(null,content,name_54701,value_54702);
{
var G__54703 = cljs.core.next.call(null,seq__54676_54694__$1);
var G__54704 = null;
var G__54705 = (0);
var G__54706 = (0);
seq__54676_54682 = G__54703;
chunk__54677_54683 = G__54704;
count__54678_54684 = G__54705;
i__54679_54685 = G__54706;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__54711_54715 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54712_54716 = null;var count__54713_54717 = (0);var i__54714_54718 = (0);while(true){
if((i__54714_54718 < count__54713_54717))
{var node_54719 = cljs.core._nth.call(null,chunk__54712_54716,i__54714_54718);goog.dom.classes.add(node_54719,class$);
{
var G__54720 = seq__54711_54715;
var G__54721 = chunk__54712_54716;
var G__54722 = count__54713_54717;
var G__54723 = (i__54714_54718 + (1));
seq__54711_54715 = G__54720;
chunk__54712_54716 = G__54721;
count__54713_54717 = G__54722;
i__54714_54718 = G__54723;
continue;
}
} else
{var temp__4126__auto___54724 = cljs.core.seq.call(null,seq__54711_54715);if(temp__4126__auto___54724)
{var seq__54711_54725__$1 = temp__4126__auto___54724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54711_54725__$1))
{var c__4299__auto___54726 = cljs.core.chunk_first.call(null,seq__54711_54725__$1);{
var G__54727 = cljs.core.chunk_rest.call(null,seq__54711_54725__$1);
var G__54728 = c__4299__auto___54726;
var G__54729 = cljs.core.count.call(null,c__4299__auto___54726);
var G__54730 = (0);
seq__54711_54715 = G__54727;
chunk__54712_54716 = G__54728;
count__54713_54717 = G__54729;
i__54714_54718 = G__54730;
continue;
}
} else
{var node_54731 = cljs.core.first.call(null,seq__54711_54725__$1);goog.dom.classes.add(node_54731,class$);
{
var G__54732 = cljs.core.next.call(null,seq__54711_54725__$1);
var G__54733 = null;
var G__54734 = (0);
var G__54735 = (0);
seq__54711_54715 = G__54732;
chunk__54712_54716 = G__54733;
count__54713_54717 = G__54734;
i__54714_54718 = G__54735;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__54740_54744 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54741_54745 = null;var count__54742_54746 = (0);var i__54743_54747 = (0);while(true){
if((i__54743_54747 < count__54742_54746))
{var node_54748 = cljs.core._nth.call(null,chunk__54741_54745,i__54743_54747);goog.dom.classes.remove(node_54748,class$);
{
var G__54749 = seq__54740_54744;
var G__54750 = chunk__54741_54745;
var G__54751 = count__54742_54746;
var G__54752 = (i__54743_54747 + (1));
seq__54740_54744 = G__54749;
chunk__54741_54745 = G__54750;
count__54742_54746 = G__54751;
i__54743_54747 = G__54752;
continue;
}
} else
{var temp__4126__auto___54753 = cljs.core.seq.call(null,seq__54740_54744);if(temp__4126__auto___54753)
{var seq__54740_54754__$1 = temp__4126__auto___54753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54740_54754__$1))
{var c__4299__auto___54755 = cljs.core.chunk_first.call(null,seq__54740_54754__$1);{
var G__54756 = cljs.core.chunk_rest.call(null,seq__54740_54754__$1);
var G__54757 = c__4299__auto___54755;
var G__54758 = cljs.core.count.call(null,c__4299__auto___54755);
var G__54759 = (0);
seq__54740_54744 = G__54756;
chunk__54741_54745 = G__54757;
count__54742_54746 = G__54758;
i__54743_54747 = G__54759;
continue;
}
} else
{var node_54760 = cljs.core.first.call(null,seq__54740_54754__$1);goog.dom.classes.remove(node_54760,class$);
{
var G__54761 = cljs.core.next.call(null,seq__54740_54754__$1);
var G__54762 = null;
var G__54763 = (0);
var G__54764 = (0);
seq__54740_54744 = G__54761;
chunk__54741_54745 = G__54762;
count__54742_54746 = G__54763;
i__54743_54747 = G__54764;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__54769_54773 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54770_54774 = null;var count__54771_54775 = (0);var i__54772_54776 = (0);while(true){
if((i__54772_54776 < count__54771_54775))
{var node_54777 = cljs.core._nth.call(null,chunk__54770_54774,i__54772_54776);goog.dom.classes.toggle(node_54777,class$);
{
var G__54778 = seq__54769_54773;
var G__54779 = chunk__54770_54774;
var G__54780 = count__54771_54775;
var G__54781 = (i__54772_54776 + (1));
seq__54769_54773 = G__54778;
chunk__54770_54774 = G__54779;
count__54771_54775 = G__54780;
i__54772_54776 = G__54781;
continue;
}
} else
{var temp__4126__auto___54782 = cljs.core.seq.call(null,seq__54769_54773);if(temp__4126__auto___54782)
{var seq__54769_54783__$1 = temp__4126__auto___54782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54769_54783__$1))
{var c__4299__auto___54784 = cljs.core.chunk_first.call(null,seq__54769_54783__$1);{
var G__54785 = cljs.core.chunk_rest.call(null,seq__54769_54783__$1);
var G__54786 = c__4299__auto___54784;
var G__54787 = cljs.core.count.call(null,c__4299__auto___54784);
var G__54788 = (0);
seq__54769_54773 = G__54785;
chunk__54770_54774 = G__54786;
count__54771_54775 = G__54787;
i__54772_54776 = G__54788;
continue;
}
} else
{var node_54789 = cljs.core.first.call(null,seq__54769_54783__$1);goog.dom.classes.toggle(node_54789,class$);
{
var G__54790 = cljs.core.next.call(null,seq__54769_54783__$1);
var G__54791 = null;
var G__54792 = (0);
var G__54793 = (0);
seq__54769_54773 = G__54790;
chunk__54770_54774 = G__54791;
count__54771_54775 = G__54792;
i__54772_54776 = G__54793;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_54802__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__54798_54803 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54799_54804 = null;var count__54800_54805 = (0);var i__54801_54806 = (0);while(true){
if((i__54801_54806 < count__54800_54805))
{var node_54807 = cljs.core._nth.call(null,chunk__54799_54804,i__54801_54806);goog.dom.classes.set(node_54807,classes_54802__$1);
{
var G__54808 = seq__54798_54803;
var G__54809 = chunk__54799_54804;
var G__54810 = count__54800_54805;
var G__54811 = (i__54801_54806 + (1));
seq__54798_54803 = G__54808;
chunk__54799_54804 = G__54809;
count__54800_54805 = G__54810;
i__54801_54806 = G__54811;
continue;
}
} else
{var temp__4126__auto___54812 = cljs.core.seq.call(null,seq__54798_54803);if(temp__4126__auto___54812)
{var seq__54798_54813__$1 = temp__4126__auto___54812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54798_54813__$1))
{var c__4299__auto___54814 = cljs.core.chunk_first.call(null,seq__54798_54813__$1);{
var G__54815 = cljs.core.chunk_rest.call(null,seq__54798_54813__$1);
var G__54816 = c__4299__auto___54814;
var G__54817 = cljs.core.count.call(null,c__4299__auto___54814);
var G__54818 = (0);
seq__54798_54803 = G__54815;
chunk__54799_54804 = G__54816;
count__54800_54805 = G__54817;
i__54801_54806 = G__54818;
continue;
}
} else
{var node_54819 = cljs.core.first.call(null,seq__54798_54813__$1);goog.dom.classes.set(node_54819,classes_54802__$1);
{
var G__54820 = cljs.core.next.call(null,seq__54798_54813__$1);
var G__54821 = null;
var G__54822 = (0);
var G__54823 = (0);
seq__54798_54803 = G__54820;
chunk__54799_54804 = G__54821;
count__54800_54805 = G__54822;
i__54801_54806 = G__54823;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__54828_54832 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54829_54833 = null;var count__54830_54834 = (0);var i__54831_54835 = (0);while(true){
if((i__54831_54835 < count__54830_54834))
{var node_54836 = cljs.core._nth.call(null,chunk__54829_54833,i__54831_54835);goog.dom.setTextContent(node_54836,value);
{
var G__54837 = seq__54828_54832;
var G__54838 = chunk__54829_54833;
var G__54839 = count__54830_54834;
var G__54840 = (i__54831_54835 + (1));
seq__54828_54832 = G__54837;
chunk__54829_54833 = G__54838;
count__54830_54834 = G__54839;
i__54831_54835 = G__54840;
continue;
}
} else
{var temp__4126__auto___54841 = cljs.core.seq.call(null,seq__54828_54832);if(temp__4126__auto___54841)
{var seq__54828_54842__$1 = temp__4126__auto___54841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54828_54842__$1))
{var c__4299__auto___54843 = cljs.core.chunk_first.call(null,seq__54828_54842__$1);{
var G__54844 = cljs.core.chunk_rest.call(null,seq__54828_54842__$1);
var G__54845 = c__4299__auto___54843;
var G__54846 = cljs.core.count.call(null,c__4299__auto___54843);
var G__54847 = (0);
seq__54828_54832 = G__54844;
chunk__54829_54833 = G__54845;
count__54830_54834 = G__54846;
i__54831_54835 = G__54847;
continue;
}
} else
{var node_54848 = cljs.core.first.call(null,seq__54828_54842__$1);goog.dom.setTextContent(node_54848,value);
{
var G__54849 = cljs.core.next.call(null,seq__54828_54842__$1);
var G__54850 = null;
var G__54851 = (0);
var G__54852 = (0);
seq__54828_54832 = G__54849;
chunk__54829_54833 = G__54850;
count__54830_54834 = G__54851;
i__54831_54835 = G__54852;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__54857_54861 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54858_54862 = null;var count__54859_54863 = (0);var i__54860_54864 = (0);while(true){
if((i__54860_54864 < count__54859_54863))
{var node_54865 = cljs.core._nth.call(null,chunk__54858_54862,i__54860_54864);goog.dom.forms.setValue(node_54865,value);
{
var G__54866 = seq__54857_54861;
var G__54867 = chunk__54858_54862;
var G__54868 = count__54859_54863;
var G__54869 = (i__54860_54864 + (1));
seq__54857_54861 = G__54866;
chunk__54858_54862 = G__54867;
count__54859_54863 = G__54868;
i__54860_54864 = G__54869;
continue;
}
} else
{var temp__4126__auto___54870 = cljs.core.seq.call(null,seq__54857_54861);if(temp__4126__auto___54870)
{var seq__54857_54871__$1 = temp__4126__auto___54870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54857_54871__$1))
{var c__4299__auto___54872 = cljs.core.chunk_first.call(null,seq__54857_54871__$1);{
var G__54873 = cljs.core.chunk_rest.call(null,seq__54857_54871__$1);
var G__54874 = c__4299__auto___54872;
var G__54875 = cljs.core.count.call(null,c__4299__auto___54872);
var G__54876 = (0);
seq__54857_54861 = G__54873;
chunk__54858_54862 = G__54874;
count__54859_54863 = G__54875;
i__54860_54864 = G__54876;
continue;
}
} else
{var node_54877 = cljs.core.first.call(null,seq__54857_54871__$1);goog.dom.forms.setValue(node_54877,value);
{
var G__54878 = cljs.core.next.call(null,seq__54857_54871__$1);
var G__54879 = null;
var G__54880 = (0);
var G__54881 = (0);
seq__54857_54861 = G__54878;
chunk__54858_54862 = G__54879;
count__54859_54863 = G__54880;
i__54860_54864 = G__54881;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_54892 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__54888_54893 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54889_54894 = null;var count__54890_54895 = (0);var i__54891_54896 = (0);while(true){
if((i__54891_54896 < count__54890_54895))
{var node_54897 = cljs.core._nth.call(null,chunk__54889_54894,i__54891_54896);node_54897.innerHTML = value_54892;
{
var G__54898 = seq__54888_54893;
var G__54899 = chunk__54889_54894;
var G__54900 = count__54890_54895;
var G__54901 = (i__54891_54896 + (1));
seq__54888_54893 = G__54898;
chunk__54889_54894 = G__54899;
count__54890_54895 = G__54900;
i__54891_54896 = G__54901;
continue;
}
} else
{var temp__4126__auto___54902 = cljs.core.seq.call(null,seq__54888_54893);if(temp__4126__auto___54902)
{var seq__54888_54903__$1 = temp__4126__auto___54902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54888_54903__$1))
{var c__4299__auto___54904 = cljs.core.chunk_first.call(null,seq__54888_54903__$1);{
var G__54905 = cljs.core.chunk_rest.call(null,seq__54888_54903__$1);
var G__54906 = c__4299__auto___54904;
var G__54907 = cljs.core.count.call(null,c__4299__auto___54904);
var G__54908 = (0);
seq__54888_54893 = G__54905;
chunk__54889_54894 = G__54906;
count__54890_54895 = G__54907;
i__54891_54896 = G__54908;
continue;
}
} else
{var node_54909 = cljs.core.first.call(null,seq__54888_54903__$1);node_54909.innerHTML = value_54892;
{
var G__54910 = cljs.core.next.call(null,seq__54888_54903__$1);
var G__54911 = null;
var G__54912 = (0);
var G__54913 = (0);
seq__54888_54893 = G__54910;
chunk__54889_54894 = G__54911;
count__54890_54895 = G__54912;
i__54891_54896 = G__54913;
continue;
}
}
} else
{}
}
break;
}
}catch (e54887){if((e54887 instanceof Error))
{var e_54914 = e54887;domina.replace_children_BANG_.call(null,content,value_54892);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54887;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__54921_54925 = cljs.core.seq.call(null,children);var chunk__54922_54926 = null;var count__54923_54927 = (0);var i__54924_54928 = (0);while(true){
if((i__54924_54928 < count__54923_54927))
{var child_54929 = cljs.core._nth.call(null,chunk__54922_54926,i__54924_54928);frag.appendChild(child_54929);
{
var G__54930 = seq__54921_54925;
var G__54931 = chunk__54922_54926;
var G__54932 = count__54923_54927;
var G__54933 = (i__54924_54928 + (1));
seq__54921_54925 = G__54930;
chunk__54922_54926 = G__54931;
count__54923_54927 = G__54932;
i__54924_54928 = G__54933;
continue;
}
} else
{var temp__4126__auto___54934 = cljs.core.seq.call(null,seq__54921_54925);if(temp__4126__auto___54934)
{var seq__54921_54935__$1 = temp__4126__auto___54934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54921_54935__$1))
{var c__4299__auto___54936 = cljs.core.chunk_first.call(null,seq__54921_54935__$1);{
var G__54937 = cljs.core.chunk_rest.call(null,seq__54921_54935__$1);
var G__54938 = c__4299__auto___54936;
var G__54939 = cljs.core.count.call(null,c__4299__auto___54936);
var G__54940 = (0);
seq__54921_54925 = G__54937;
chunk__54922_54926 = G__54938;
count__54923_54927 = G__54939;
i__54924_54928 = G__54940;
continue;
}
} else
{var child_54941 = cljs.core.first.call(null,seq__54921_54935__$1);frag.appendChild(child_54941);
{
var G__54942 = cljs.core.next.call(null,seq__54921_54935__$1);
var G__54943 = null;
var G__54944 = (0);
var G__54945 = (0);
seq__54921_54925 = G__54942;
chunk__54922_54926 = G__54943;
count__54923_54927 = G__54944;
i__54924_54928 = G__54945;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__54915_SHARP_,p2__54916_SHARP_){return f.call(null,p1__54915_SHARP_,p2__54916_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
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
{if((function (){var G__54947 = list_thing;if(G__54947)
{var bit__4193__auto__ = (G__54947.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__54947.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54947.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54947);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54947);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__54948 = content;if(G__54948)
{var bit__4193__auto__ = (G__54948.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__54948.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54948.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54948);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54948);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__54949 = content;if(G__54949)
{var bit__4193__auto__ = (G__54949.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__54949.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54949.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54949);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54949);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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