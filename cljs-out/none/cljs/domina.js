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
var opt_wrapper_16678 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16679 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16680 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16679,table_section_wrapper_16679,opt_wrapper_16678,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16680,table_section_wrapper_16679,cell_wrapper_16680,opt_wrapper_16678,table_section_wrapper_16679,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16679]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16685 = cljs.core.seq.call(null,tbody);var chunk__16686 = null;var count__16687 = 0;var i__16688 = 0;while(true){
if((i__16688 < count__16687))
{var child = cljs.core._nth.call(null,chunk__16686,i__16688);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16689 = seq__16685;
var G__16690 = chunk__16686;
var G__16691 = count__16687;
var G__16692 = (i__16688 + 1);
seq__16685 = G__16689;
chunk__16686 = G__16690;
count__16687 = G__16691;
i__16688 = G__16692;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16685);if(temp__4092__auto__)
{var seq__16685__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16685__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16685__$1);{
var G__16693 = cljs.core.chunk_rest.call(null,seq__16685__$1);
var G__16694 = c__4148__auto__;
var G__16695 = cljs.core.count.call(null,c__4148__auto__);
var G__16696 = 0;
seq__16685 = G__16693;
chunk__16686 = G__16694;
count__16687 = G__16695;
i__16688 = G__16696;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16685__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16697 = cljs.core.next.call(null,seq__16685__$1);
var G__16698 = null;
var G__16699 = 0;
var G__16700 = 0;
seq__16685 = G__16697;
chunk__16686 = G__16698;
count__16687 = G__16699;
i__16688 = G__16700;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16702 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16702,0,null);var start_wrap = cljs.core.nth.call(null,vec__16702,1,null);var end_wrap = cljs.core.nth.call(null,vec__16702,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16703 = wrapper.lastChild;
var G__16704 = (level - 1);
wrapper = G__16703;
level = G__16704;
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
domina.DomContent = (function (){var obj16706 = {};return obj16706;
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
log_debug.cljs$lang$applyTo = (function (arglist__16707){
var mesg = cljs.core.seq(arglist__16707);
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
log.cljs$lang$applyTo = (function (arglist__16708){
var mesg = cljs.core.seq(arglist__16708);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16709){
var contents = cljs.core.seq(arglist__16709);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16710_SHARP_){return p1__16710_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16711_SHARP_,p2__16712_SHARP_){return goog.dom.insertChildAt(p1__16711_SHARP_,p2__16712_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16714_SHARP_,p2__16713_SHARP_){return goog.dom.insertSiblingBefore(p2__16713_SHARP_,p1__16714_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16716_SHARP_,p2__16715_SHARP_){return goog.dom.insertSiblingAfter(p2__16715_SHARP_,p1__16716_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16718_SHARP_,p2__16717_SHARP_){return goog.dom.replaceNode(p2__16717_SHARP_,p1__16718_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16723_16727 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16724_16728 = null;var count__16725_16729 = 0;var i__16726_16730 = 0;while(true){
if((i__16726_16730 < count__16725_16729))
{var n_16731 = cljs.core._nth.call(null,chunk__16724_16728,i__16726_16730);goog.style.setStyle(n_16731,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16732 = seq__16723_16727;
var G__16733 = chunk__16724_16728;
var G__16734 = count__16725_16729;
var G__16735 = (i__16726_16730 + 1);
seq__16723_16727 = G__16732;
chunk__16724_16728 = G__16733;
count__16725_16729 = G__16734;
i__16726_16730 = G__16735;
continue;
}
} else
{var temp__4092__auto___16736 = cljs.core.seq.call(null,seq__16723_16727);if(temp__4092__auto___16736)
{var seq__16723_16737__$1 = temp__4092__auto___16736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16723_16737__$1))
{var c__4148__auto___16738 = cljs.core.chunk_first.call(null,seq__16723_16737__$1);{
var G__16739 = cljs.core.chunk_rest.call(null,seq__16723_16737__$1);
var G__16740 = c__4148__auto___16738;
var G__16741 = cljs.core.count.call(null,c__4148__auto___16738);
var G__16742 = 0;
seq__16723_16727 = G__16739;
chunk__16724_16728 = G__16740;
count__16725_16729 = G__16741;
i__16726_16730 = G__16742;
continue;
}
} else
{var n_16743 = cljs.core.first.call(null,seq__16723_16737__$1);goog.style.setStyle(n_16743,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16744 = cljs.core.next.call(null,seq__16723_16737__$1);
var G__16745 = null;
var G__16746 = 0;
var G__16747 = 0;
seq__16723_16727 = G__16744;
chunk__16724_16728 = G__16745;
count__16725_16729 = G__16746;
i__16726_16730 = G__16747;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16748){
var content = cljs.core.first(arglist__16748);
arglist__16748 = cljs.core.next(arglist__16748);
var name = cljs.core.first(arglist__16748);
var value = cljs.core.rest(arglist__16748);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16753_16757 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16754_16758 = null;var count__16755_16759 = 0;var i__16756_16760 = 0;while(true){
if((i__16756_16760 < count__16755_16759))
{var n_16761 = cljs.core._nth.call(null,chunk__16754_16758,i__16756_16760);n_16761.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16762 = seq__16753_16757;
var G__16763 = chunk__16754_16758;
var G__16764 = count__16755_16759;
var G__16765 = (i__16756_16760 + 1);
seq__16753_16757 = G__16762;
chunk__16754_16758 = G__16763;
count__16755_16759 = G__16764;
i__16756_16760 = G__16765;
continue;
}
} else
{var temp__4092__auto___16766 = cljs.core.seq.call(null,seq__16753_16757);if(temp__4092__auto___16766)
{var seq__16753_16767__$1 = temp__4092__auto___16766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16753_16767__$1))
{var c__4148__auto___16768 = cljs.core.chunk_first.call(null,seq__16753_16767__$1);{
var G__16769 = cljs.core.chunk_rest.call(null,seq__16753_16767__$1);
var G__16770 = c__4148__auto___16768;
var G__16771 = cljs.core.count.call(null,c__4148__auto___16768);
var G__16772 = 0;
seq__16753_16757 = G__16769;
chunk__16754_16758 = G__16770;
count__16755_16759 = G__16771;
i__16756_16760 = G__16772;
continue;
}
} else
{var n_16773 = cljs.core.first.call(null,seq__16753_16767__$1);n_16773.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16774 = cljs.core.next.call(null,seq__16753_16767__$1);
var G__16775 = null;
var G__16776 = 0;
var G__16777 = 0;
seq__16753_16757 = G__16774;
chunk__16754_16758 = G__16775;
count__16755_16759 = G__16776;
i__16756_16760 = G__16777;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16778){
var content = cljs.core.first(arglist__16778);
arglist__16778 = cljs.core.next(arglist__16778);
var name = cljs.core.first(arglist__16778);
var value = cljs.core.rest(arglist__16778);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16783_16787 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16784_16788 = null;var count__16785_16789 = 0;var i__16786_16790 = 0;while(true){
if((i__16786_16790 < count__16785_16789))
{var n_16791 = cljs.core._nth.call(null,chunk__16784_16788,i__16786_16790);n_16791.removeAttribute(cljs.core.name.call(null,name));
{
var G__16792 = seq__16783_16787;
var G__16793 = chunk__16784_16788;
var G__16794 = count__16785_16789;
var G__16795 = (i__16786_16790 + 1);
seq__16783_16787 = G__16792;
chunk__16784_16788 = G__16793;
count__16785_16789 = G__16794;
i__16786_16790 = G__16795;
continue;
}
} else
{var temp__4092__auto___16796 = cljs.core.seq.call(null,seq__16783_16787);if(temp__4092__auto___16796)
{var seq__16783_16797__$1 = temp__4092__auto___16796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16783_16797__$1))
{var c__4148__auto___16798 = cljs.core.chunk_first.call(null,seq__16783_16797__$1);{
var G__16799 = cljs.core.chunk_rest.call(null,seq__16783_16797__$1);
var G__16800 = c__4148__auto___16798;
var G__16801 = cljs.core.count.call(null,c__4148__auto___16798);
var G__16802 = 0;
seq__16783_16787 = G__16799;
chunk__16784_16788 = G__16800;
count__16785_16789 = G__16801;
i__16786_16790 = G__16802;
continue;
}
} else
{var n_16803 = cljs.core.first.call(null,seq__16783_16797__$1);n_16803.removeAttribute(cljs.core.name.call(null,name));
{
var G__16804 = cljs.core.next.call(null,seq__16783_16797__$1);
var G__16805 = null;
var G__16806 = 0;
var G__16807 = 0;
seq__16783_16787 = G__16804;
chunk__16784_16788 = G__16805;
count__16785_16789 = G__16806;
i__16786_16790 = G__16807;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16809 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16809,0,null);var v = cljs.core.nth.call(null,vec__16809,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16810_SHARP_){var attr = attrs__$1.item(p1__16810_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16817_16823 = cljs.core.seq.call(null,styles);var chunk__16818_16824 = null;var count__16819_16825 = 0;var i__16820_16826 = 0;while(true){
if((i__16820_16826 < count__16819_16825))
{var vec__16821_16827 = cljs.core._nth.call(null,chunk__16818_16824,i__16820_16826);var name_16828 = cljs.core.nth.call(null,vec__16821_16827,0,null);var value_16829 = cljs.core.nth.call(null,vec__16821_16827,1,null);domina.set_style_BANG_.call(null,content,name_16828,value_16829);
{
var G__16830 = seq__16817_16823;
var G__16831 = chunk__16818_16824;
var G__16832 = count__16819_16825;
var G__16833 = (i__16820_16826 + 1);
seq__16817_16823 = G__16830;
chunk__16818_16824 = G__16831;
count__16819_16825 = G__16832;
i__16820_16826 = G__16833;
continue;
}
} else
{var temp__4092__auto___16834 = cljs.core.seq.call(null,seq__16817_16823);if(temp__4092__auto___16834)
{var seq__16817_16835__$1 = temp__4092__auto___16834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16817_16835__$1))
{var c__4148__auto___16836 = cljs.core.chunk_first.call(null,seq__16817_16835__$1);{
var G__16837 = cljs.core.chunk_rest.call(null,seq__16817_16835__$1);
var G__16838 = c__4148__auto___16836;
var G__16839 = cljs.core.count.call(null,c__4148__auto___16836);
var G__16840 = 0;
seq__16817_16823 = G__16837;
chunk__16818_16824 = G__16838;
count__16819_16825 = G__16839;
i__16820_16826 = G__16840;
continue;
}
} else
{var vec__16822_16841 = cljs.core.first.call(null,seq__16817_16835__$1);var name_16842 = cljs.core.nth.call(null,vec__16822_16841,0,null);var value_16843 = cljs.core.nth.call(null,vec__16822_16841,1,null);domina.set_style_BANG_.call(null,content,name_16842,value_16843);
{
var G__16844 = cljs.core.next.call(null,seq__16817_16835__$1);
var G__16845 = null;
var G__16846 = 0;
var G__16847 = 0;
seq__16817_16823 = G__16844;
chunk__16818_16824 = G__16845;
count__16819_16825 = G__16846;
i__16820_16826 = G__16847;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16854_16860 = cljs.core.seq.call(null,attrs);var chunk__16855_16861 = null;var count__16856_16862 = 0;var i__16857_16863 = 0;while(true){
if((i__16857_16863 < count__16856_16862))
{var vec__16858_16864 = cljs.core._nth.call(null,chunk__16855_16861,i__16857_16863);var name_16865 = cljs.core.nth.call(null,vec__16858_16864,0,null);var value_16866 = cljs.core.nth.call(null,vec__16858_16864,1,null);domina.set_attr_BANG_.call(null,content,name_16865,value_16866);
{
var G__16867 = seq__16854_16860;
var G__16868 = chunk__16855_16861;
var G__16869 = count__16856_16862;
var G__16870 = (i__16857_16863 + 1);
seq__16854_16860 = G__16867;
chunk__16855_16861 = G__16868;
count__16856_16862 = G__16869;
i__16857_16863 = G__16870;
continue;
}
} else
{var temp__4092__auto___16871 = cljs.core.seq.call(null,seq__16854_16860);if(temp__4092__auto___16871)
{var seq__16854_16872__$1 = temp__4092__auto___16871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16854_16872__$1))
{var c__4148__auto___16873 = cljs.core.chunk_first.call(null,seq__16854_16872__$1);{
var G__16874 = cljs.core.chunk_rest.call(null,seq__16854_16872__$1);
var G__16875 = c__4148__auto___16873;
var G__16876 = cljs.core.count.call(null,c__4148__auto___16873);
var G__16877 = 0;
seq__16854_16860 = G__16874;
chunk__16855_16861 = G__16875;
count__16856_16862 = G__16876;
i__16857_16863 = G__16877;
continue;
}
} else
{var vec__16859_16878 = cljs.core.first.call(null,seq__16854_16872__$1);var name_16879 = cljs.core.nth.call(null,vec__16859_16878,0,null);var value_16880 = cljs.core.nth.call(null,vec__16859_16878,1,null);domina.set_attr_BANG_.call(null,content,name_16879,value_16880);
{
var G__16881 = cljs.core.next.call(null,seq__16854_16872__$1);
var G__16882 = null;
var G__16883 = 0;
var G__16884 = 0;
seq__16854_16860 = G__16881;
chunk__16855_16861 = G__16882;
count__16856_16862 = G__16883;
i__16857_16863 = G__16884;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16889_16893 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16890_16894 = null;var count__16891_16895 = 0;var i__16892_16896 = 0;while(true){
if((i__16892_16896 < count__16891_16895))
{var node_16897 = cljs.core._nth.call(null,chunk__16890_16894,i__16892_16896);goog.dom.classes.add(node_16897,class$);
{
var G__16898 = seq__16889_16893;
var G__16899 = chunk__16890_16894;
var G__16900 = count__16891_16895;
var G__16901 = (i__16892_16896 + 1);
seq__16889_16893 = G__16898;
chunk__16890_16894 = G__16899;
count__16891_16895 = G__16900;
i__16892_16896 = G__16901;
continue;
}
} else
{var temp__4092__auto___16902 = cljs.core.seq.call(null,seq__16889_16893);if(temp__4092__auto___16902)
{var seq__16889_16903__$1 = temp__4092__auto___16902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16889_16903__$1))
{var c__4148__auto___16904 = cljs.core.chunk_first.call(null,seq__16889_16903__$1);{
var G__16905 = cljs.core.chunk_rest.call(null,seq__16889_16903__$1);
var G__16906 = c__4148__auto___16904;
var G__16907 = cljs.core.count.call(null,c__4148__auto___16904);
var G__16908 = 0;
seq__16889_16893 = G__16905;
chunk__16890_16894 = G__16906;
count__16891_16895 = G__16907;
i__16892_16896 = G__16908;
continue;
}
} else
{var node_16909 = cljs.core.first.call(null,seq__16889_16903__$1);goog.dom.classes.add(node_16909,class$);
{
var G__16910 = cljs.core.next.call(null,seq__16889_16903__$1);
var G__16911 = null;
var G__16912 = 0;
var G__16913 = 0;
seq__16889_16893 = G__16910;
chunk__16890_16894 = G__16911;
count__16891_16895 = G__16912;
i__16892_16896 = G__16913;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16918_16922 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16919_16923 = null;var count__16920_16924 = 0;var i__16921_16925 = 0;while(true){
if((i__16921_16925 < count__16920_16924))
{var node_16926 = cljs.core._nth.call(null,chunk__16919_16923,i__16921_16925);goog.dom.classes.remove(node_16926,class$);
{
var G__16927 = seq__16918_16922;
var G__16928 = chunk__16919_16923;
var G__16929 = count__16920_16924;
var G__16930 = (i__16921_16925 + 1);
seq__16918_16922 = G__16927;
chunk__16919_16923 = G__16928;
count__16920_16924 = G__16929;
i__16921_16925 = G__16930;
continue;
}
} else
{var temp__4092__auto___16931 = cljs.core.seq.call(null,seq__16918_16922);if(temp__4092__auto___16931)
{var seq__16918_16932__$1 = temp__4092__auto___16931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16918_16932__$1))
{var c__4148__auto___16933 = cljs.core.chunk_first.call(null,seq__16918_16932__$1);{
var G__16934 = cljs.core.chunk_rest.call(null,seq__16918_16932__$1);
var G__16935 = c__4148__auto___16933;
var G__16936 = cljs.core.count.call(null,c__4148__auto___16933);
var G__16937 = 0;
seq__16918_16922 = G__16934;
chunk__16919_16923 = G__16935;
count__16920_16924 = G__16936;
i__16921_16925 = G__16937;
continue;
}
} else
{var node_16938 = cljs.core.first.call(null,seq__16918_16932__$1);goog.dom.classes.remove(node_16938,class$);
{
var G__16939 = cljs.core.next.call(null,seq__16918_16932__$1);
var G__16940 = null;
var G__16941 = 0;
var G__16942 = 0;
seq__16918_16922 = G__16939;
chunk__16919_16923 = G__16940;
count__16920_16924 = G__16941;
i__16921_16925 = G__16942;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16947_16951 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16948_16952 = null;var count__16949_16953 = 0;var i__16950_16954 = 0;while(true){
if((i__16950_16954 < count__16949_16953))
{var node_16955 = cljs.core._nth.call(null,chunk__16948_16952,i__16950_16954);goog.dom.classes.toggle(node_16955,class$);
{
var G__16956 = seq__16947_16951;
var G__16957 = chunk__16948_16952;
var G__16958 = count__16949_16953;
var G__16959 = (i__16950_16954 + 1);
seq__16947_16951 = G__16956;
chunk__16948_16952 = G__16957;
count__16949_16953 = G__16958;
i__16950_16954 = G__16959;
continue;
}
} else
{var temp__4092__auto___16960 = cljs.core.seq.call(null,seq__16947_16951);if(temp__4092__auto___16960)
{var seq__16947_16961__$1 = temp__4092__auto___16960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16947_16961__$1))
{var c__4148__auto___16962 = cljs.core.chunk_first.call(null,seq__16947_16961__$1);{
var G__16963 = cljs.core.chunk_rest.call(null,seq__16947_16961__$1);
var G__16964 = c__4148__auto___16962;
var G__16965 = cljs.core.count.call(null,c__4148__auto___16962);
var G__16966 = 0;
seq__16947_16951 = G__16963;
chunk__16948_16952 = G__16964;
count__16949_16953 = G__16965;
i__16950_16954 = G__16966;
continue;
}
} else
{var node_16967 = cljs.core.first.call(null,seq__16947_16961__$1);goog.dom.classes.toggle(node_16967,class$);
{
var G__16968 = cljs.core.next.call(null,seq__16947_16961__$1);
var G__16969 = null;
var G__16970 = 0;
var G__16971 = 0;
seq__16947_16951 = G__16968;
chunk__16948_16952 = G__16969;
count__16949_16953 = G__16970;
i__16950_16954 = G__16971;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16980__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16976_16981 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16977_16982 = null;var count__16978_16983 = 0;var i__16979_16984 = 0;while(true){
if((i__16979_16984 < count__16978_16983))
{var node_16985 = cljs.core._nth.call(null,chunk__16977_16982,i__16979_16984);goog.dom.classes.set(node_16985,classes_16980__$1);
{
var G__16986 = seq__16976_16981;
var G__16987 = chunk__16977_16982;
var G__16988 = count__16978_16983;
var G__16989 = (i__16979_16984 + 1);
seq__16976_16981 = G__16986;
chunk__16977_16982 = G__16987;
count__16978_16983 = G__16988;
i__16979_16984 = G__16989;
continue;
}
} else
{var temp__4092__auto___16990 = cljs.core.seq.call(null,seq__16976_16981);if(temp__4092__auto___16990)
{var seq__16976_16991__$1 = temp__4092__auto___16990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16976_16991__$1))
{var c__4148__auto___16992 = cljs.core.chunk_first.call(null,seq__16976_16991__$1);{
var G__16993 = cljs.core.chunk_rest.call(null,seq__16976_16991__$1);
var G__16994 = c__4148__auto___16992;
var G__16995 = cljs.core.count.call(null,c__4148__auto___16992);
var G__16996 = 0;
seq__16976_16981 = G__16993;
chunk__16977_16982 = G__16994;
count__16978_16983 = G__16995;
i__16979_16984 = G__16996;
continue;
}
} else
{var node_16997 = cljs.core.first.call(null,seq__16976_16991__$1);goog.dom.classes.set(node_16997,classes_16980__$1);
{
var G__16998 = cljs.core.next.call(null,seq__16976_16991__$1);
var G__16999 = null;
var G__17000 = 0;
var G__17001 = 0;
seq__16976_16981 = G__16998;
chunk__16977_16982 = G__16999;
count__16978_16983 = G__17000;
i__16979_16984 = G__17001;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17006_17010 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17007_17011 = null;var count__17008_17012 = 0;var i__17009_17013 = 0;while(true){
if((i__17009_17013 < count__17008_17012))
{var node_17014 = cljs.core._nth.call(null,chunk__17007_17011,i__17009_17013);goog.dom.setTextContent(node_17014,value);
{
var G__17015 = seq__17006_17010;
var G__17016 = chunk__17007_17011;
var G__17017 = count__17008_17012;
var G__17018 = (i__17009_17013 + 1);
seq__17006_17010 = G__17015;
chunk__17007_17011 = G__17016;
count__17008_17012 = G__17017;
i__17009_17013 = G__17018;
continue;
}
} else
{var temp__4092__auto___17019 = cljs.core.seq.call(null,seq__17006_17010);if(temp__4092__auto___17019)
{var seq__17006_17020__$1 = temp__4092__auto___17019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17006_17020__$1))
{var c__4148__auto___17021 = cljs.core.chunk_first.call(null,seq__17006_17020__$1);{
var G__17022 = cljs.core.chunk_rest.call(null,seq__17006_17020__$1);
var G__17023 = c__4148__auto___17021;
var G__17024 = cljs.core.count.call(null,c__4148__auto___17021);
var G__17025 = 0;
seq__17006_17010 = G__17022;
chunk__17007_17011 = G__17023;
count__17008_17012 = G__17024;
i__17009_17013 = G__17025;
continue;
}
} else
{var node_17026 = cljs.core.first.call(null,seq__17006_17020__$1);goog.dom.setTextContent(node_17026,value);
{
var G__17027 = cljs.core.next.call(null,seq__17006_17020__$1);
var G__17028 = null;
var G__17029 = 0;
var G__17030 = 0;
seq__17006_17010 = G__17027;
chunk__17007_17011 = G__17028;
count__17008_17012 = G__17029;
i__17009_17013 = G__17030;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17035_17039 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17036_17040 = null;var count__17037_17041 = 0;var i__17038_17042 = 0;while(true){
if((i__17038_17042 < count__17037_17041))
{var node_17043 = cljs.core._nth.call(null,chunk__17036_17040,i__17038_17042);goog.dom.forms.setValue(node_17043,value);
{
var G__17044 = seq__17035_17039;
var G__17045 = chunk__17036_17040;
var G__17046 = count__17037_17041;
var G__17047 = (i__17038_17042 + 1);
seq__17035_17039 = G__17044;
chunk__17036_17040 = G__17045;
count__17037_17041 = G__17046;
i__17038_17042 = G__17047;
continue;
}
} else
{var temp__4092__auto___17048 = cljs.core.seq.call(null,seq__17035_17039);if(temp__4092__auto___17048)
{var seq__17035_17049__$1 = temp__4092__auto___17048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17035_17049__$1))
{var c__4148__auto___17050 = cljs.core.chunk_first.call(null,seq__17035_17049__$1);{
var G__17051 = cljs.core.chunk_rest.call(null,seq__17035_17049__$1);
var G__17052 = c__4148__auto___17050;
var G__17053 = cljs.core.count.call(null,c__4148__auto___17050);
var G__17054 = 0;
seq__17035_17039 = G__17051;
chunk__17036_17040 = G__17052;
count__17037_17041 = G__17053;
i__17038_17042 = G__17054;
continue;
}
} else
{var node_17055 = cljs.core.first.call(null,seq__17035_17049__$1);goog.dom.forms.setValue(node_17055,value);
{
var G__17056 = cljs.core.next.call(null,seq__17035_17049__$1);
var G__17057 = null;
var G__17058 = 0;
var G__17059 = 0;
seq__17035_17039 = G__17056;
chunk__17036_17040 = G__17057;
count__17037_17041 = G__17058;
i__17038_17042 = G__17059;
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
{var value_17070 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17066_17071 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17067_17072 = null;var count__17068_17073 = 0;var i__17069_17074 = 0;while(true){
if((i__17069_17074 < count__17068_17073))
{var node_17075 = cljs.core._nth.call(null,chunk__17067_17072,i__17069_17074);node_17075.innerHTML = value_17070;
{
var G__17076 = seq__17066_17071;
var G__17077 = chunk__17067_17072;
var G__17078 = count__17068_17073;
var G__17079 = (i__17069_17074 + 1);
seq__17066_17071 = G__17076;
chunk__17067_17072 = G__17077;
count__17068_17073 = G__17078;
i__17069_17074 = G__17079;
continue;
}
} else
{var temp__4092__auto___17080 = cljs.core.seq.call(null,seq__17066_17071);if(temp__4092__auto___17080)
{var seq__17066_17081__$1 = temp__4092__auto___17080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17066_17081__$1))
{var c__4148__auto___17082 = cljs.core.chunk_first.call(null,seq__17066_17081__$1);{
var G__17083 = cljs.core.chunk_rest.call(null,seq__17066_17081__$1);
var G__17084 = c__4148__auto___17082;
var G__17085 = cljs.core.count.call(null,c__4148__auto___17082);
var G__17086 = 0;
seq__17066_17071 = G__17083;
chunk__17067_17072 = G__17084;
count__17068_17073 = G__17085;
i__17069_17074 = G__17086;
continue;
}
} else
{var node_17087 = cljs.core.first.call(null,seq__17066_17081__$1);node_17087.innerHTML = value_17070;
{
var G__17088 = cljs.core.next.call(null,seq__17066_17081__$1);
var G__17089 = null;
var G__17090 = 0;
var G__17091 = 0;
seq__17066_17071 = G__17088;
chunk__17067_17072 = G__17089;
count__17068_17073 = G__17090;
i__17069_17074 = G__17091;
continue;
}
}
} else
{}
}
break;
}
}catch (e17065){if((e17065 instanceof Error))
{var e_17092 = e17065;domina.replace_children_BANG_.call(null,content,value_17070);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17065;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17099_17103 = cljs.core.seq.call(null,children);var chunk__17100_17104 = null;var count__17101_17105 = 0;var i__17102_17106 = 0;while(true){
if((i__17102_17106 < count__17101_17105))
{var child_17107 = cljs.core._nth.call(null,chunk__17100_17104,i__17102_17106);frag.appendChild(child_17107);
{
var G__17108 = seq__17099_17103;
var G__17109 = chunk__17100_17104;
var G__17110 = count__17101_17105;
var G__17111 = (i__17102_17106 + 1);
seq__17099_17103 = G__17108;
chunk__17100_17104 = G__17109;
count__17101_17105 = G__17110;
i__17102_17106 = G__17111;
continue;
}
} else
{var temp__4092__auto___17112 = cljs.core.seq.call(null,seq__17099_17103);if(temp__4092__auto___17112)
{var seq__17099_17113__$1 = temp__4092__auto___17112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17099_17113__$1))
{var c__4148__auto___17114 = cljs.core.chunk_first.call(null,seq__17099_17113__$1);{
var G__17115 = cljs.core.chunk_rest.call(null,seq__17099_17113__$1);
var G__17116 = c__4148__auto___17114;
var G__17117 = cljs.core.count.call(null,c__4148__auto___17114);
var G__17118 = 0;
seq__17099_17103 = G__17115;
chunk__17100_17104 = G__17116;
count__17101_17105 = G__17117;
i__17102_17106 = G__17118;
continue;
}
} else
{var child_17119 = cljs.core.first.call(null,seq__17099_17113__$1);frag.appendChild(child_17119);
{
var G__17120 = cljs.core.next.call(null,seq__17099_17113__$1);
var G__17121 = null;
var G__17122 = 0;
var G__17123 = 0;
seq__17099_17103 = G__17120;
chunk__17100_17104 = G__17121;
count__17101_17105 = G__17122;
i__17102_17106 = G__17123;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17093_SHARP_,p2__17094_SHARP_){return f.call(null,p1__17093_SHARP_,p2__17094_SHARP_);
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
{if((function (){var G__17125 = list_thing;if(G__17125)
{var bit__4050__auto__ = (G__17125.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17125.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17125.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17125);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17125);
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
{if((function (){var G__17126 = content;if(G__17126)
{var bit__4050__auto__ = (G__17126.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17126.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17126.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17126);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17126);
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
{if((function (){var G__17127 = content;if(G__17127)
{var bit__4050__auto__ = (G__17127.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17127.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17127.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17127);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17127);
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