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
var opt_wrapper_30630 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_30631 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_30632 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_30632,opt_wrapper_30630,table_section_wrapper_30631,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_30630,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_30631,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_30631,cell_wrapper_30632,table_section_wrapper_30631,table_section_wrapper_30631]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__30637 = cljs.core.seq.call(null,tbody);var chunk__30638 = null;var count__30639 = (0);var i__30640 = (0);while(true){
if((i__30640 < count__30639))
{var child = cljs.core._nth.call(null,chunk__30638,i__30640);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30641 = seq__30637;
var G__30642 = chunk__30638;
var G__30643 = count__30639;
var G__30644 = (i__30640 + (1));
seq__30637 = G__30641;
chunk__30638 = G__30642;
count__30639 = G__30643;
i__30640 = G__30644;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30637);if(temp__4126__auto__)
{var seq__30637__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30637__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__30637__$1);{
var G__30645 = cljs.core.chunk_rest.call(null,seq__30637__$1);
var G__30646 = c__4299__auto__;
var G__30647 = cljs.core.count.call(null,c__4299__auto__);
var G__30648 = (0);
seq__30637 = G__30645;
chunk__30638 = G__30646;
count__30639 = G__30647;
i__30640 = G__30648;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__30637__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30649 = cljs.core.next.call(null,seq__30637__$1);
var G__30650 = null;
var G__30651 = (0);
var G__30652 = (0);
seq__30637 = G__30649;
chunk__30638 = G__30650;
count__30639 = G__30651;
i__30640 = G__30652;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__30654 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__30654,(0),null);var start_wrap = cljs.core.nth.call(null,vec__30654,(1),null);var end_wrap = cljs.core.nth.call(null,vec__30654,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__30655 = wrapper.lastChild;
var G__30656 = (level - (1));
wrapper = G__30655;
level = G__30656;
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
domina.DomContent = (function (){var obj30658 = {};return obj30658;
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
log_debug.cljs$lang$applyTo = (function (arglist__30659){
var mesg = cljs.core.seq(arglist__30659);
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
log.cljs$lang$applyTo = (function (arglist__30660){
var mesg = cljs.core.seq(arglist__30660);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__30661){
var contents = cljs.core.seq(arglist__30661);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__30662_SHARP_){return p1__30662_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__30663_SHARP_,p2__30664_SHARP_){return goog.dom.insertChildAt(p1__30663_SHARP_,p2__30664_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30666_SHARP_,p2__30665_SHARP_){return goog.dom.insertSiblingBefore(p2__30665_SHARP_,p1__30666_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30668_SHARP_,p2__30667_SHARP_){return goog.dom.insertSiblingAfter(p2__30667_SHARP_,p1__30668_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__30670_SHARP_,p2__30669_SHARP_){return goog.dom.replaceNode(p2__30669_SHARP_,p1__30670_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__30675_30679 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30676_30680 = null;var count__30677_30681 = (0);var i__30678_30682 = (0);while(true){
if((i__30678_30682 < count__30677_30681))
{var n_30683 = cljs.core._nth.call(null,chunk__30676_30680,i__30678_30682);goog.style.setStyle(n_30683,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30684 = seq__30675_30679;
var G__30685 = chunk__30676_30680;
var G__30686 = count__30677_30681;
var G__30687 = (i__30678_30682 + (1));
seq__30675_30679 = G__30684;
chunk__30676_30680 = G__30685;
count__30677_30681 = G__30686;
i__30678_30682 = G__30687;
continue;
}
} else
{var temp__4126__auto___30688 = cljs.core.seq.call(null,seq__30675_30679);if(temp__4126__auto___30688)
{var seq__30675_30689__$1 = temp__4126__auto___30688;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30675_30689__$1))
{var c__4299__auto___30690 = cljs.core.chunk_first.call(null,seq__30675_30689__$1);{
var G__30691 = cljs.core.chunk_rest.call(null,seq__30675_30689__$1);
var G__30692 = c__4299__auto___30690;
var G__30693 = cljs.core.count.call(null,c__4299__auto___30690);
var G__30694 = (0);
seq__30675_30679 = G__30691;
chunk__30676_30680 = G__30692;
count__30677_30681 = G__30693;
i__30678_30682 = G__30694;
continue;
}
} else
{var n_30695 = cljs.core.first.call(null,seq__30675_30689__$1);goog.style.setStyle(n_30695,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30696 = cljs.core.next.call(null,seq__30675_30689__$1);
var G__30697 = null;
var G__30698 = (0);
var G__30699 = (0);
seq__30675_30679 = G__30696;
chunk__30676_30680 = G__30697;
count__30677_30681 = G__30698;
i__30678_30682 = G__30699;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30700){
var content = cljs.core.first(arglist__30700);
arglist__30700 = cljs.core.next(arglist__30700);
var name = cljs.core.first(arglist__30700);
var value = cljs.core.rest(arglist__30700);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__30705_30709 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30706_30710 = null;var count__30707_30711 = (0);var i__30708_30712 = (0);while(true){
if((i__30708_30712 < count__30707_30711))
{var n_30713 = cljs.core._nth.call(null,chunk__30706_30710,i__30708_30712);n_30713.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30714 = seq__30705_30709;
var G__30715 = chunk__30706_30710;
var G__30716 = count__30707_30711;
var G__30717 = (i__30708_30712 + (1));
seq__30705_30709 = G__30714;
chunk__30706_30710 = G__30715;
count__30707_30711 = G__30716;
i__30708_30712 = G__30717;
continue;
}
} else
{var temp__4126__auto___30718 = cljs.core.seq.call(null,seq__30705_30709);if(temp__4126__auto___30718)
{var seq__30705_30719__$1 = temp__4126__auto___30718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30705_30719__$1))
{var c__4299__auto___30720 = cljs.core.chunk_first.call(null,seq__30705_30719__$1);{
var G__30721 = cljs.core.chunk_rest.call(null,seq__30705_30719__$1);
var G__30722 = c__4299__auto___30720;
var G__30723 = cljs.core.count.call(null,c__4299__auto___30720);
var G__30724 = (0);
seq__30705_30709 = G__30721;
chunk__30706_30710 = G__30722;
count__30707_30711 = G__30723;
i__30708_30712 = G__30724;
continue;
}
} else
{var n_30725 = cljs.core.first.call(null,seq__30705_30719__$1);n_30725.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30726 = cljs.core.next.call(null,seq__30705_30719__$1);
var G__30727 = null;
var G__30728 = (0);
var G__30729 = (0);
seq__30705_30709 = G__30726;
chunk__30706_30710 = G__30727;
count__30707_30711 = G__30728;
i__30708_30712 = G__30729;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__30730){
var content = cljs.core.first(arglist__30730);
arglist__30730 = cljs.core.next(arglist__30730);
var name = cljs.core.first(arglist__30730);
var value = cljs.core.rest(arglist__30730);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__30735_30739 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30736_30740 = null;var count__30737_30741 = (0);var i__30738_30742 = (0);while(true){
if((i__30738_30742 < count__30737_30741))
{var n_30743 = cljs.core._nth.call(null,chunk__30736_30740,i__30738_30742);n_30743.removeAttribute(cljs.core.name.call(null,name));
{
var G__30744 = seq__30735_30739;
var G__30745 = chunk__30736_30740;
var G__30746 = count__30737_30741;
var G__30747 = (i__30738_30742 + (1));
seq__30735_30739 = G__30744;
chunk__30736_30740 = G__30745;
count__30737_30741 = G__30746;
i__30738_30742 = G__30747;
continue;
}
} else
{var temp__4126__auto___30748 = cljs.core.seq.call(null,seq__30735_30739);if(temp__4126__auto___30748)
{var seq__30735_30749__$1 = temp__4126__auto___30748;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30735_30749__$1))
{var c__4299__auto___30750 = cljs.core.chunk_first.call(null,seq__30735_30749__$1);{
var G__30751 = cljs.core.chunk_rest.call(null,seq__30735_30749__$1);
var G__30752 = c__4299__auto___30750;
var G__30753 = cljs.core.count.call(null,c__4299__auto___30750);
var G__30754 = (0);
seq__30735_30739 = G__30751;
chunk__30736_30740 = G__30752;
count__30737_30741 = G__30753;
i__30738_30742 = G__30754;
continue;
}
} else
{var n_30755 = cljs.core.first.call(null,seq__30735_30749__$1);n_30755.removeAttribute(cljs.core.name.call(null,name));
{
var G__30756 = cljs.core.next.call(null,seq__30735_30749__$1);
var G__30757 = null;
var G__30758 = (0);
var G__30759 = (0);
seq__30735_30739 = G__30756;
chunk__30736_30740 = G__30757;
count__30737_30741 = G__30758;
i__30738_30742 = G__30759;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__30761 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__30761,(0),null);var v = cljs.core.nth.call(null,vec__30761,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__30762_SHARP_){var attr = attrs__$1.item(p1__30762_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__30769_30775 = cljs.core.seq.call(null,styles);var chunk__30770_30776 = null;var count__30771_30777 = (0);var i__30772_30778 = (0);while(true){
if((i__30772_30778 < count__30771_30777))
{var vec__30773_30779 = cljs.core._nth.call(null,chunk__30770_30776,i__30772_30778);var name_30780 = cljs.core.nth.call(null,vec__30773_30779,(0),null);var value_30781 = cljs.core.nth.call(null,vec__30773_30779,(1),null);domina.set_style_BANG_.call(null,content,name_30780,value_30781);
{
var G__30782 = seq__30769_30775;
var G__30783 = chunk__30770_30776;
var G__30784 = count__30771_30777;
var G__30785 = (i__30772_30778 + (1));
seq__30769_30775 = G__30782;
chunk__30770_30776 = G__30783;
count__30771_30777 = G__30784;
i__30772_30778 = G__30785;
continue;
}
} else
{var temp__4126__auto___30786 = cljs.core.seq.call(null,seq__30769_30775);if(temp__4126__auto___30786)
{var seq__30769_30787__$1 = temp__4126__auto___30786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30769_30787__$1))
{var c__4299__auto___30788 = cljs.core.chunk_first.call(null,seq__30769_30787__$1);{
var G__30789 = cljs.core.chunk_rest.call(null,seq__30769_30787__$1);
var G__30790 = c__4299__auto___30788;
var G__30791 = cljs.core.count.call(null,c__4299__auto___30788);
var G__30792 = (0);
seq__30769_30775 = G__30789;
chunk__30770_30776 = G__30790;
count__30771_30777 = G__30791;
i__30772_30778 = G__30792;
continue;
}
} else
{var vec__30774_30793 = cljs.core.first.call(null,seq__30769_30787__$1);var name_30794 = cljs.core.nth.call(null,vec__30774_30793,(0),null);var value_30795 = cljs.core.nth.call(null,vec__30774_30793,(1),null);domina.set_style_BANG_.call(null,content,name_30794,value_30795);
{
var G__30796 = cljs.core.next.call(null,seq__30769_30787__$1);
var G__30797 = null;
var G__30798 = (0);
var G__30799 = (0);
seq__30769_30775 = G__30796;
chunk__30770_30776 = G__30797;
count__30771_30777 = G__30798;
i__30772_30778 = G__30799;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__30806_30812 = cljs.core.seq.call(null,attrs);var chunk__30807_30813 = null;var count__30808_30814 = (0);var i__30809_30815 = (0);while(true){
if((i__30809_30815 < count__30808_30814))
{var vec__30810_30816 = cljs.core._nth.call(null,chunk__30807_30813,i__30809_30815);var name_30817 = cljs.core.nth.call(null,vec__30810_30816,(0),null);var value_30818 = cljs.core.nth.call(null,vec__30810_30816,(1),null);domina.set_attr_BANG_.call(null,content,name_30817,value_30818);
{
var G__30819 = seq__30806_30812;
var G__30820 = chunk__30807_30813;
var G__30821 = count__30808_30814;
var G__30822 = (i__30809_30815 + (1));
seq__30806_30812 = G__30819;
chunk__30807_30813 = G__30820;
count__30808_30814 = G__30821;
i__30809_30815 = G__30822;
continue;
}
} else
{var temp__4126__auto___30823 = cljs.core.seq.call(null,seq__30806_30812);if(temp__4126__auto___30823)
{var seq__30806_30824__$1 = temp__4126__auto___30823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30806_30824__$1))
{var c__4299__auto___30825 = cljs.core.chunk_first.call(null,seq__30806_30824__$1);{
var G__30826 = cljs.core.chunk_rest.call(null,seq__30806_30824__$1);
var G__30827 = c__4299__auto___30825;
var G__30828 = cljs.core.count.call(null,c__4299__auto___30825);
var G__30829 = (0);
seq__30806_30812 = G__30826;
chunk__30807_30813 = G__30827;
count__30808_30814 = G__30828;
i__30809_30815 = G__30829;
continue;
}
} else
{var vec__30811_30830 = cljs.core.first.call(null,seq__30806_30824__$1);var name_30831 = cljs.core.nth.call(null,vec__30811_30830,(0),null);var value_30832 = cljs.core.nth.call(null,vec__30811_30830,(1),null);domina.set_attr_BANG_.call(null,content,name_30831,value_30832);
{
var G__30833 = cljs.core.next.call(null,seq__30806_30824__$1);
var G__30834 = null;
var G__30835 = (0);
var G__30836 = (0);
seq__30806_30812 = G__30833;
chunk__30807_30813 = G__30834;
count__30808_30814 = G__30835;
i__30809_30815 = G__30836;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__30841_30845 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30842_30846 = null;var count__30843_30847 = (0);var i__30844_30848 = (0);while(true){
if((i__30844_30848 < count__30843_30847))
{var node_30849 = cljs.core._nth.call(null,chunk__30842_30846,i__30844_30848);goog.dom.classes.add(node_30849,class$);
{
var G__30850 = seq__30841_30845;
var G__30851 = chunk__30842_30846;
var G__30852 = count__30843_30847;
var G__30853 = (i__30844_30848 + (1));
seq__30841_30845 = G__30850;
chunk__30842_30846 = G__30851;
count__30843_30847 = G__30852;
i__30844_30848 = G__30853;
continue;
}
} else
{var temp__4126__auto___30854 = cljs.core.seq.call(null,seq__30841_30845);if(temp__4126__auto___30854)
{var seq__30841_30855__$1 = temp__4126__auto___30854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30841_30855__$1))
{var c__4299__auto___30856 = cljs.core.chunk_first.call(null,seq__30841_30855__$1);{
var G__30857 = cljs.core.chunk_rest.call(null,seq__30841_30855__$1);
var G__30858 = c__4299__auto___30856;
var G__30859 = cljs.core.count.call(null,c__4299__auto___30856);
var G__30860 = (0);
seq__30841_30845 = G__30857;
chunk__30842_30846 = G__30858;
count__30843_30847 = G__30859;
i__30844_30848 = G__30860;
continue;
}
} else
{var node_30861 = cljs.core.first.call(null,seq__30841_30855__$1);goog.dom.classes.add(node_30861,class$);
{
var G__30862 = cljs.core.next.call(null,seq__30841_30855__$1);
var G__30863 = null;
var G__30864 = (0);
var G__30865 = (0);
seq__30841_30845 = G__30862;
chunk__30842_30846 = G__30863;
count__30843_30847 = G__30864;
i__30844_30848 = G__30865;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__30870_30874 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30871_30875 = null;var count__30872_30876 = (0);var i__30873_30877 = (0);while(true){
if((i__30873_30877 < count__30872_30876))
{var node_30878 = cljs.core._nth.call(null,chunk__30871_30875,i__30873_30877);goog.dom.classes.remove(node_30878,class$);
{
var G__30879 = seq__30870_30874;
var G__30880 = chunk__30871_30875;
var G__30881 = count__30872_30876;
var G__30882 = (i__30873_30877 + (1));
seq__30870_30874 = G__30879;
chunk__30871_30875 = G__30880;
count__30872_30876 = G__30881;
i__30873_30877 = G__30882;
continue;
}
} else
{var temp__4126__auto___30883 = cljs.core.seq.call(null,seq__30870_30874);if(temp__4126__auto___30883)
{var seq__30870_30884__$1 = temp__4126__auto___30883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30870_30884__$1))
{var c__4299__auto___30885 = cljs.core.chunk_first.call(null,seq__30870_30884__$1);{
var G__30886 = cljs.core.chunk_rest.call(null,seq__30870_30884__$1);
var G__30887 = c__4299__auto___30885;
var G__30888 = cljs.core.count.call(null,c__4299__auto___30885);
var G__30889 = (0);
seq__30870_30874 = G__30886;
chunk__30871_30875 = G__30887;
count__30872_30876 = G__30888;
i__30873_30877 = G__30889;
continue;
}
} else
{var node_30890 = cljs.core.first.call(null,seq__30870_30884__$1);goog.dom.classes.remove(node_30890,class$);
{
var G__30891 = cljs.core.next.call(null,seq__30870_30884__$1);
var G__30892 = null;
var G__30893 = (0);
var G__30894 = (0);
seq__30870_30874 = G__30891;
chunk__30871_30875 = G__30892;
count__30872_30876 = G__30893;
i__30873_30877 = G__30894;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__30899_30903 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30900_30904 = null;var count__30901_30905 = (0);var i__30902_30906 = (0);while(true){
if((i__30902_30906 < count__30901_30905))
{var node_30907 = cljs.core._nth.call(null,chunk__30900_30904,i__30902_30906);goog.dom.classes.toggle(node_30907,class$);
{
var G__30908 = seq__30899_30903;
var G__30909 = chunk__30900_30904;
var G__30910 = count__30901_30905;
var G__30911 = (i__30902_30906 + (1));
seq__30899_30903 = G__30908;
chunk__30900_30904 = G__30909;
count__30901_30905 = G__30910;
i__30902_30906 = G__30911;
continue;
}
} else
{var temp__4126__auto___30912 = cljs.core.seq.call(null,seq__30899_30903);if(temp__4126__auto___30912)
{var seq__30899_30913__$1 = temp__4126__auto___30912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30899_30913__$1))
{var c__4299__auto___30914 = cljs.core.chunk_first.call(null,seq__30899_30913__$1);{
var G__30915 = cljs.core.chunk_rest.call(null,seq__30899_30913__$1);
var G__30916 = c__4299__auto___30914;
var G__30917 = cljs.core.count.call(null,c__4299__auto___30914);
var G__30918 = (0);
seq__30899_30903 = G__30915;
chunk__30900_30904 = G__30916;
count__30901_30905 = G__30917;
i__30902_30906 = G__30918;
continue;
}
} else
{var node_30919 = cljs.core.first.call(null,seq__30899_30913__$1);goog.dom.classes.toggle(node_30919,class$);
{
var G__30920 = cljs.core.next.call(null,seq__30899_30913__$1);
var G__30921 = null;
var G__30922 = (0);
var G__30923 = (0);
seq__30899_30903 = G__30920;
chunk__30900_30904 = G__30921;
count__30901_30905 = G__30922;
i__30902_30906 = G__30923;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_30932__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__30928_30933 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30929_30934 = null;var count__30930_30935 = (0);var i__30931_30936 = (0);while(true){
if((i__30931_30936 < count__30930_30935))
{var node_30937 = cljs.core._nth.call(null,chunk__30929_30934,i__30931_30936);goog.dom.classes.set(node_30937,classes_30932__$1);
{
var G__30938 = seq__30928_30933;
var G__30939 = chunk__30929_30934;
var G__30940 = count__30930_30935;
var G__30941 = (i__30931_30936 + (1));
seq__30928_30933 = G__30938;
chunk__30929_30934 = G__30939;
count__30930_30935 = G__30940;
i__30931_30936 = G__30941;
continue;
}
} else
{var temp__4126__auto___30942 = cljs.core.seq.call(null,seq__30928_30933);if(temp__4126__auto___30942)
{var seq__30928_30943__$1 = temp__4126__auto___30942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30928_30943__$1))
{var c__4299__auto___30944 = cljs.core.chunk_first.call(null,seq__30928_30943__$1);{
var G__30945 = cljs.core.chunk_rest.call(null,seq__30928_30943__$1);
var G__30946 = c__4299__auto___30944;
var G__30947 = cljs.core.count.call(null,c__4299__auto___30944);
var G__30948 = (0);
seq__30928_30933 = G__30945;
chunk__30929_30934 = G__30946;
count__30930_30935 = G__30947;
i__30931_30936 = G__30948;
continue;
}
} else
{var node_30949 = cljs.core.first.call(null,seq__30928_30943__$1);goog.dom.classes.set(node_30949,classes_30932__$1);
{
var G__30950 = cljs.core.next.call(null,seq__30928_30943__$1);
var G__30951 = null;
var G__30952 = (0);
var G__30953 = (0);
seq__30928_30933 = G__30950;
chunk__30929_30934 = G__30951;
count__30930_30935 = G__30952;
i__30931_30936 = G__30953;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__30958_30962 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30959_30963 = null;var count__30960_30964 = (0);var i__30961_30965 = (0);while(true){
if((i__30961_30965 < count__30960_30964))
{var node_30966 = cljs.core._nth.call(null,chunk__30959_30963,i__30961_30965);goog.dom.setTextContent(node_30966,value);
{
var G__30967 = seq__30958_30962;
var G__30968 = chunk__30959_30963;
var G__30969 = count__30960_30964;
var G__30970 = (i__30961_30965 + (1));
seq__30958_30962 = G__30967;
chunk__30959_30963 = G__30968;
count__30960_30964 = G__30969;
i__30961_30965 = G__30970;
continue;
}
} else
{var temp__4126__auto___30971 = cljs.core.seq.call(null,seq__30958_30962);if(temp__4126__auto___30971)
{var seq__30958_30972__$1 = temp__4126__auto___30971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30958_30972__$1))
{var c__4299__auto___30973 = cljs.core.chunk_first.call(null,seq__30958_30972__$1);{
var G__30974 = cljs.core.chunk_rest.call(null,seq__30958_30972__$1);
var G__30975 = c__4299__auto___30973;
var G__30976 = cljs.core.count.call(null,c__4299__auto___30973);
var G__30977 = (0);
seq__30958_30962 = G__30974;
chunk__30959_30963 = G__30975;
count__30960_30964 = G__30976;
i__30961_30965 = G__30977;
continue;
}
} else
{var node_30978 = cljs.core.first.call(null,seq__30958_30972__$1);goog.dom.setTextContent(node_30978,value);
{
var G__30979 = cljs.core.next.call(null,seq__30958_30972__$1);
var G__30980 = null;
var G__30981 = (0);
var G__30982 = (0);
seq__30958_30962 = G__30979;
chunk__30959_30963 = G__30980;
count__30960_30964 = G__30981;
i__30961_30965 = G__30982;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__30987_30991 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30988_30992 = null;var count__30989_30993 = (0);var i__30990_30994 = (0);while(true){
if((i__30990_30994 < count__30989_30993))
{var node_30995 = cljs.core._nth.call(null,chunk__30988_30992,i__30990_30994);goog.dom.forms.setValue(node_30995,value);
{
var G__30996 = seq__30987_30991;
var G__30997 = chunk__30988_30992;
var G__30998 = count__30989_30993;
var G__30999 = (i__30990_30994 + (1));
seq__30987_30991 = G__30996;
chunk__30988_30992 = G__30997;
count__30989_30993 = G__30998;
i__30990_30994 = G__30999;
continue;
}
} else
{var temp__4126__auto___31000 = cljs.core.seq.call(null,seq__30987_30991);if(temp__4126__auto___31000)
{var seq__30987_31001__$1 = temp__4126__auto___31000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30987_31001__$1))
{var c__4299__auto___31002 = cljs.core.chunk_first.call(null,seq__30987_31001__$1);{
var G__31003 = cljs.core.chunk_rest.call(null,seq__30987_31001__$1);
var G__31004 = c__4299__auto___31002;
var G__31005 = cljs.core.count.call(null,c__4299__auto___31002);
var G__31006 = (0);
seq__30987_30991 = G__31003;
chunk__30988_30992 = G__31004;
count__30989_30993 = G__31005;
i__30990_30994 = G__31006;
continue;
}
} else
{var node_31007 = cljs.core.first.call(null,seq__30987_31001__$1);goog.dom.forms.setValue(node_31007,value);
{
var G__31008 = cljs.core.next.call(null,seq__30987_31001__$1);
var G__31009 = null;
var G__31010 = (0);
var G__31011 = (0);
seq__30987_30991 = G__31008;
chunk__30988_30992 = G__31009;
count__30989_30993 = G__31010;
i__30990_30994 = G__31011;
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
{var value_31022 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__31018_31023 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31019_31024 = null;var count__31020_31025 = (0);var i__31021_31026 = (0);while(true){
if((i__31021_31026 < count__31020_31025))
{var node_31027 = cljs.core._nth.call(null,chunk__31019_31024,i__31021_31026);node_31027.innerHTML = value_31022;
{
var G__31028 = seq__31018_31023;
var G__31029 = chunk__31019_31024;
var G__31030 = count__31020_31025;
var G__31031 = (i__31021_31026 + (1));
seq__31018_31023 = G__31028;
chunk__31019_31024 = G__31029;
count__31020_31025 = G__31030;
i__31021_31026 = G__31031;
continue;
}
} else
{var temp__4126__auto___31032 = cljs.core.seq.call(null,seq__31018_31023);if(temp__4126__auto___31032)
{var seq__31018_31033__$1 = temp__4126__auto___31032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31018_31033__$1))
{var c__4299__auto___31034 = cljs.core.chunk_first.call(null,seq__31018_31033__$1);{
var G__31035 = cljs.core.chunk_rest.call(null,seq__31018_31033__$1);
var G__31036 = c__4299__auto___31034;
var G__31037 = cljs.core.count.call(null,c__4299__auto___31034);
var G__31038 = (0);
seq__31018_31023 = G__31035;
chunk__31019_31024 = G__31036;
count__31020_31025 = G__31037;
i__31021_31026 = G__31038;
continue;
}
} else
{var node_31039 = cljs.core.first.call(null,seq__31018_31033__$1);node_31039.innerHTML = value_31022;
{
var G__31040 = cljs.core.next.call(null,seq__31018_31033__$1);
var G__31041 = null;
var G__31042 = (0);
var G__31043 = (0);
seq__31018_31023 = G__31040;
chunk__31019_31024 = G__31041;
count__31020_31025 = G__31042;
i__31021_31026 = G__31043;
continue;
}
}
} else
{}
}
break;
}
}catch (e31017){if((e31017 instanceof Error))
{var e_31044 = e31017;domina.replace_children_BANG_.call(null,content,value_31022);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31017;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__31051_31055 = cljs.core.seq.call(null,children);var chunk__31052_31056 = null;var count__31053_31057 = (0);var i__31054_31058 = (0);while(true){
if((i__31054_31058 < count__31053_31057))
{var child_31059 = cljs.core._nth.call(null,chunk__31052_31056,i__31054_31058);frag.appendChild(child_31059);
{
var G__31060 = seq__31051_31055;
var G__31061 = chunk__31052_31056;
var G__31062 = count__31053_31057;
var G__31063 = (i__31054_31058 + (1));
seq__31051_31055 = G__31060;
chunk__31052_31056 = G__31061;
count__31053_31057 = G__31062;
i__31054_31058 = G__31063;
continue;
}
} else
{var temp__4126__auto___31064 = cljs.core.seq.call(null,seq__31051_31055);if(temp__4126__auto___31064)
{var seq__31051_31065__$1 = temp__4126__auto___31064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31051_31065__$1))
{var c__4299__auto___31066 = cljs.core.chunk_first.call(null,seq__31051_31065__$1);{
var G__31067 = cljs.core.chunk_rest.call(null,seq__31051_31065__$1);
var G__31068 = c__4299__auto___31066;
var G__31069 = cljs.core.count.call(null,c__4299__auto___31066);
var G__31070 = (0);
seq__31051_31055 = G__31067;
chunk__31052_31056 = G__31068;
count__31053_31057 = G__31069;
i__31054_31058 = G__31070;
continue;
}
} else
{var child_31071 = cljs.core.first.call(null,seq__31051_31065__$1);frag.appendChild(child_31071);
{
var G__31072 = cljs.core.next.call(null,seq__31051_31065__$1);
var G__31073 = null;
var G__31074 = (0);
var G__31075 = (0);
seq__31051_31055 = G__31072;
chunk__31052_31056 = G__31073;
count__31053_31057 = G__31074;
i__31054_31058 = G__31075;
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
return (function (p1__31045_SHARP_,p2__31046_SHARP_){return f.call(null,p1__31045_SHARP_,p2__31046_SHARP_);
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
{if((function (){var G__31077 = list_thing;if(G__31077)
{var bit__4193__auto__ = (G__31077.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__31077.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31077.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31077);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31077);
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
{if((function (){var G__31078 = content;if(G__31078)
{var bit__4193__auto__ = (G__31078.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__31078.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31078.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31078);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31078);
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
{if((function (){var G__31079 = content;if(G__31079)
{var bit__4193__auto__ = (G__31079.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__31079.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31079.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31079);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31079);
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
