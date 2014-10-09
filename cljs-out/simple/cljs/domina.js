// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_38815 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_38816 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_38817 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_38817,opt_wrapper_38815,table_section_wrapper_38816,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_38815,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_38816,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_38816,cell_wrapper_38817,table_section_wrapper_38816,table_section_wrapper_38816]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__38822 = cljs.core.seq.call(null,tbody);var chunk__38823 = null;var count__38824 = (0);var i__38825 = (0);while(true){
if((i__38825 < count__38824))
{var child = cljs.core._nth.call(null,chunk__38823,i__38825);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38826 = seq__38822;
var G__38827 = chunk__38823;
var G__38828 = count__38824;
var G__38829 = (i__38825 + (1));
seq__38822 = G__38826;
chunk__38823 = G__38827;
count__38824 = G__38828;
i__38825 = G__38829;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38822);if(temp__4126__auto__)
{var seq__38822__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38822__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__38822__$1);{
var G__38830 = cljs.core.chunk_rest.call(null,seq__38822__$1);
var G__38831 = c__4314__auto__;
var G__38832 = cljs.core.count.call(null,c__4314__auto__);
var G__38833 = (0);
seq__38822 = G__38830;
chunk__38823 = G__38831;
count__38824 = G__38832;
i__38825 = G__38833;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__38822__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38834 = cljs.core.next.call(null,seq__38822__$1);
var G__38835 = null;
var G__38836 = (0);
var G__38837 = (0);
seq__38822 = G__38834;
chunk__38823 = G__38835;
count__38824 = G__38836;
i__38825 = G__38837;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__38839 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__38839,(0),null);var start_wrap = cljs.core.nth.call(null,vec__38839,(1),null);var end_wrap = cljs.core.nth.call(null,vec__38839,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__38840 = wrapper.lastChild;
var G__38841 = (level - (1));
wrapper = G__38840;
level = G__38841;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj38843 = {};return obj38843;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__38844){
var mesg = cljs.core.seq(arglist__38844);
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
log.cljs$lang$applyTo = (function (arglist__38845){
var mesg = cljs.core.seq(arglist__38845);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__38846){
var contents = cljs.core.seq(arglist__38846);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__38847_SHARP_){return p1__38847_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__38848_SHARP_,p2__38849_SHARP_){return goog.dom.insertChildAt(p1__38848_SHARP_,p2__38849_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38851_SHARP_,p2__38850_SHARP_){return goog.dom.insertSiblingBefore(p2__38850_SHARP_,p1__38851_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38853_SHARP_,p2__38852_SHARP_){return goog.dom.insertSiblingAfter(p2__38852_SHARP_,p1__38853_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38855_SHARP_,p2__38854_SHARP_){return goog.dom.replaceNode(p2__38854_SHARP_,p1__38855_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__38860_38864 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38861_38865 = null;var count__38862_38866 = (0);var i__38863_38867 = (0);while(true){
if((i__38863_38867 < count__38862_38866))
{var n_38868 = cljs.core._nth.call(null,chunk__38861_38865,i__38863_38867);goog.style.setStyle(n_38868,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38869 = seq__38860_38864;
var G__38870 = chunk__38861_38865;
var G__38871 = count__38862_38866;
var G__38872 = (i__38863_38867 + (1));
seq__38860_38864 = G__38869;
chunk__38861_38865 = G__38870;
count__38862_38866 = G__38871;
i__38863_38867 = G__38872;
continue;
}
} else
{var temp__4126__auto___38873 = cljs.core.seq.call(null,seq__38860_38864);if(temp__4126__auto___38873)
{var seq__38860_38874__$1 = temp__4126__auto___38873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38860_38874__$1))
{var c__4314__auto___38875 = cljs.core.chunk_first.call(null,seq__38860_38874__$1);{
var G__38876 = cljs.core.chunk_rest.call(null,seq__38860_38874__$1);
var G__38877 = c__4314__auto___38875;
var G__38878 = cljs.core.count.call(null,c__4314__auto___38875);
var G__38879 = (0);
seq__38860_38864 = G__38876;
chunk__38861_38865 = G__38877;
count__38862_38866 = G__38878;
i__38863_38867 = G__38879;
continue;
}
} else
{var n_38880 = cljs.core.first.call(null,seq__38860_38874__$1);goog.style.setStyle(n_38880,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38881 = cljs.core.next.call(null,seq__38860_38874__$1);
var G__38882 = null;
var G__38883 = (0);
var G__38884 = (0);
seq__38860_38864 = G__38881;
chunk__38861_38865 = G__38882;
count__38862_38866 = G__38883;
i__38863_38867 = G__38884;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38885){
var content = cljs.core.first(arglist__38885);
arglist__38885 = cljs.core.next(arglist__38885);
var name = cljs.core.first(arglist__38885);
var value = cljs.core.rest(arglist__38885);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38890_38894 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38891_38895 = null;var count__38892_38896 = (0);var i__38893_38897 = (0);while(true){
if((i__38893_38897 < count__38892_38896))
{var n_38898 = cljs.core._nth.call(null,chunk__38891_38895,i__38893_38897);n_38898.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38899 = seq__38890_38894;
var G__38900 = chunk__38891_38895;
var G__38901 = count__38892_38896;
var G__38902 = (i__38893_38897 + (1));
seq__38890_38894 = G__38899;
chunk__38891_38895 = G__38900;
count__38892_38896 = G__38901;
i__38893_38897 = G__38902;
continue;
}
} else
{var temp__4126__auto___38903 = cljs.core.seq.call(null,seq__38890_38894);if(temp__4126__auto___38903)
{var seq__38890_38904__$1 = temp__4126__auto___38903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38890_38904__$1))
{var c__4314__auto___38905 = cljs.core.chunk_first.call(null,seq__38890_38904__$1);{
var G__38906 = cljs.core.chunk_rest.call(null,seq__38890_38904__$1);
var G__38907 = c__4314__auto___38905;
var G__38908 = cljs.core.count.call(null,c__4314__auto___38905);
var G__38909 = (0);
seq__38890_38894 = G__38906;
chunk__38891_38895 = G__38907;
count__38892_38896 = G__38908;
i__38893_38897 = G__38909;
continue;
}
} else
{var n_38910 = cljs.core.first.call(null,seq__38890_38904__$1);n_38910.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38911 = cljs.core.next.call(null,seq__38890_38904__$1);
var G__38912 = null;
var G__38913 = (0);
var G__38914 = (0);
seq__38890_38894 = G__38911;
chunk__38891_38895 = G__38912;
count__38892_38896 = G__38913;
i__38893_38897 = G__38914;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38915){
var content = cljs.core.first(arglist__38915);
arglist__38915 = cljs.core.next(arglist__38915);
var name = cljs.core.first(arglist__38915);
var value = cljs.core.rest(arglist__38915);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38920_38924 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38921_38925 = null;var count__38922_38926 = (0);var i__38923_38927 = (0);while(true){
if((i__38923_38927 < count__38922_38926))
{var n_38928 = cljs.core._nth.call(null,chunk__38921_38925,i__38923_38927);n_38928.removeAttribute(cljs.core.name.call(null,name));
{
var G__38929 = seq__38920_38924;
var G__38930 = chunk__38921_38925;
var G__38931 = count__38922_38926;
var G__38932 = (i__38923_38927 + (1));
seq__38920_38924 = G__38929;
chunk__38921_38925 = G__38930;
count__38922_38926 = G__38931;
i__38923_38927 = G__38932;
continue;
}
} else
{var temp__4126__auto___38933 = cljs.core.seq.call(null,seq__38920_38924);if(temp__4126__auto___38933)
{var seq__38920_38934__$1 = temp__4126__auto___38933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38920_38934__$1))
{var c__4314__auto___38935 = cljs.core.chunk_first.call(null,seq__38920_38934__$1);{
var G__38936 = cljs.core.chunk_rest.call(null,seq__38920_38934__$1);
var G__38937 = c__4314__auto___38935;
var G__38938 = cljs.core.count.call(null,c__4314__auto___38935);
var G__38939 = (0);
seq__38920_38924 = G__38936;
chunk__38921_38925 = G__38937;
count__38922_38926 = G__38938;
i__38923_38927 = G__38939;
continue;
}
} else
{var n_38940 = cljs.core.first.call(null,seq__38920_38934__$1);n_38940.removeAttribute(cljs.core.name.call(null,name));
{
var G__38941 = cljs.core.next.call(null,seq__38920_38934__$1);
var G__38942 = null;
var G__38943 = (0);
var G__38944 = (0);
seq__38920_38924 = G__38941;
chunk__38921_38925 = G__38942;
count__38922_38926 = G__38943;
i__38923_38927 = G__38944;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38946 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38946,(0),null);var v = cljs.core.nth.call(null,vec__38946,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__38947_SHARP_){var attr = attrs__$1.item(p1__38947_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38954_38960 = cljs.core.seq.call(null,styles);var chunk__38955_38961 = null;var count__38956_38962 = (0);var i__38957_38963 = (0);while(true){
if((i__38957_38963 < count__38956_38962))
{var vec__38958_38964 = cljs.core._nth.call(null,chunk__38955_38961,i__38957_38963);var name_38965 = cljs.core.nth.call(null,vec__38958_38964,(0),null);var value_38966 = cljs.core.nth.call(null,vec__38958_38964,(1),null);domina.set_style_BANG_.call(null,content,name_38965,value_38966);
{
var G__38967 = seq__38954_38960;
var G__38968 = chunk__38955_38961;
var G__38969 = count__38956_38962;
var G__38970 = (i__38957_38963 + (1));
seq__38954_38960 = G__38967;
chunk__38955_38961 = G__38968;
count__38956_38962 = G__38969;
i__38957_38963 = G__38970;
continue;
}
} else
{var temp__4126__auto___38971 = cljs.core.seq.call(null,seq__38954_38960);if(temp__4126__auto___38971)
{var seq__38954_38972__$1 = temp__4126__auto___38971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38954_38972__$1))
{var c__4314__auto___38973 = cljs.core.chunk_first.call(null,seq__38954_38972__$1);{
var G__38974 = cljs.core.chunk_rest.call(null,seq__38954_38972__$1);
var G__38975 = c__4314__auto___38973;
var G__38976 = cljs.core.count.call(null,c__4314__auto___38973);
var G__38977 = (0);
seq__38954_38960 = G__38974;
chunk__38955_38961 = G__38975;
count__38956_38962 = G__38976;
i__38957_38963 = G__38977;
continue;
}
} else
{var vec__38959_38978 = cljs.core.first.call(null,seq__38954_38972__$1);var name_38979 = cljs.core.nth.call(null,vec__38959_38978,(0),null);var value_38980 = cljs.core.nth.call(null,vec__38959_38978,(1),null);domina.set_style_BANG_.call(null,content,name_38979,value_38980);
{
var G__38981 = cljs.core.next.call(null,seq__38954_38972__$1);
var G__38982 = null;
var G__38983 = (0);
var G__38984 = (0);
seq__38954_38960 = G__38981;
chunk__38955_38961 = G__38982;
count__38956_38962 = G__38983;
i__38957_38963 = G__38984;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38991_38997 = cljs.core.seq.call(null,attrs);var chunk__38992_38998 = null;var count__38993_38999 = (0);var i__38994_39000 = (0);while(true){
if((i__38994_39000 < count__38993_38999))
{var vec__38995_39001 = cljs.core._nth.call(null,chunk__38992_38998,i__38994_39000);var name_39002 = cljs.core.nth.call(null,vec__38995_39001,(0),null);var value_39003 = cljs.core.nth.call(null,vec__38995_39001,(1),null);domina.set_attr_BANG_.call(null,content,name_39002,value_39003);
{
var G__39004 = seq__38991_38997;
var G__39005 = chunk__38992_38998;
var G__39006 = count__38993_38999;
var G__39007 = (i__38994_39000 + (1));
seq__38991_38997 = G__39004;
chunk__38992_38998 = G__39005;
count__38993_38999 = G__39006;
i__38994_39000 = G__39007;
continue;
}
} else
{var temp__4126__auto___39008 = cljs.core.seq.call(null,seq__38991_38997);if(temp__4126__auto___39008)
{var seq__38991_39009__$1 = temp__4126__auto___39008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38991_39009__$1))
{var c__4314__auto___39010 = cljs.core.chunk_first.call(null,seq__38991_39009__$1);{
var G__39011 = cljs.core.chunk_rest.call(null,seq__38991_39009__$1);
var G__39012 = c__4314__auto___39010;
var G__39013 = cljs.core.count.call(null,c__4314__auto___39010);
var G__39014 = (0);
seq__38991_38997 = G__39011;
chunk__38992_38998 = G__39012;
count__38993_38999 = G__39013;
i__38994_39000 = G__39014;
continue;
}
} else
{var vec__38996_39015 = cljs.core.first.call(null,seq__38991_39009__$1);var name_39016 = cljs.core.nth.call(null,vec__38996_39015,(0),null);var value_39017 = cljs.core.nth.call(null,vec__38996_39015,(1),null);domina.set_attr_BANG_.call(null,content,name_39016,value_39017);
{
var G__39018 = cljs.core.next.call(null,seq__38991_39009__$1);
var G__39019 = null;
var G__39020 = (0);
var G__39021 = (0);
seq__38991_38997 = G__39018;
chunk__38992_38998 = G__39019;
count__38993_38999 = G__39020;
i__38994_39000 = G__39021;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39026_39030 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39027_39031 = null;var count__39028_39032 = (0);var i__39029_39033 = (0);while(true){
if((i__39029_39033 < count__39028_39032))
{var node_39034 = cljs.core._nth.call(null,chunk__39027_39031,i__39029_39033);goog.dom.classes.add(node_39034,class$);
{
var G__39035 = seq__39026_39030;
var G__39036 = chunk__39027_39031;
var G__39037 = count__39028_39032;
var G__39038 = (i__39029_39033 + (1));
seq__39026_39030 = G__39035;
chunk__39027_39031 = G__39036;
count__39028_39032 = G__39037;
i__39029_39033 = G__39038;
continue;
}
} else
{var temp__4126__auto___39039 = cljs.core.seq.call(null,seq__39026_39030);if(temp__4126__auto___39039)
{var seq__39026_39040__$1 = temp__4126__auto___39039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39026_39040__$1))
{var c__4314__auto___39041 = cljs.core.chunk_first.call(null,seq__39026_39040__$1);{
var G__39042 = cljs.core.chunk_rest.call(null,seq__39026_39040__$1);
var G__39043 = c__4314__auto___39041;
var G__39044 = cljs.core.count.call(null,c__4314__auto___39041);
var G__39045 = (0);
seq__39026_39030 = G__39042;
chunk__39027_39031 = G__39043;
count__39028_39032 = G__39044;
i__39029_39033 = G__39045;
continue;
}
} else
{var node_39046 = cljs.core.first.call(null,seq__39026_39040__$1);goog.dom.classes.add(node_39046,class$);
{
var G__39047 = cljs.core.next.call(null,seq__39026_39040__$1);
var G__39048 = null;
var G__39049 = (0);
var G__39050 = (0);
seq__39026_39030 = G__39047;
chunk__39027_39031 = G__39048;
count__39028_39032 = G__39049;
i__39029_39033 = G__39050;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39055_39059 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39056_39060 = null;var count__39057_39061 = (0);var i__39058_39062 = (0);while(true){
if((i__39058_39062 < count__39057_39061))
{var node_39063 = cljs.core._nth.call(null,chunk__39056_39060,i__39058_39062);goog.dom.classes.remove(node_39063,class$);
{
var G__39064 = seq__39055_39059;
var G__39065 = chunk__39056_39060;
var G__39066 = count__39057_39061;
var G__39067 = (i__39058_39062 + (1));
seq__39055_39059 = G__39064;
chunk__39056_39060 = G__39065;
count__39057_39061 = G__39066;
i__39058_39062 = G__39067;
continue;
}
} else
{var temp__4126__auto___39068 = cljs.core.seq.call(null,seq__39055_39059);if(temp__4126__auto___39068)
{var seq__39055_39069__$1 = temp__4126__auto___39068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39055_39069__$1))
{var c__4314__auto___39070 = cljs.core.chunk_first.call(null,seq__39055_39069__$1);{
var G__39071 = cljs.core.chunk_rest.call(null,seq__39055_39069__$1);
var G__39072 = c__4314__auto___39070;
var G__39073 = cljs.core.count.call(null,c__4314__auto___39070);
var G__39074 = (0);
seq__39055_39059 = G__39071;
chunk__39056_39060 = G__39072;
count__39057_39061 = G__39073;
i__39058_39062 = G__39074;
continue;
}
} else
{var node_39075 = cljs.core.first.call(null,seq__39055_39069__$1);goog.dom.classes.remove(node_39075,class$);
{
var G__39076 = cljs.core.next.call(null,seq__39055_39069__$1);
var G__39077 = null;
var G__39078 = (0);
var G__39079 = (0);
seq__39055_39059 = G__39076;
chunk__39056_39060 = G__39077;
count__39057_39061 = G__39078;
i__39058_39062 = G__39079;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39084_39088 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39085_39089 = null;var count__39086_39090 = (0);var i__39087_39091 = (0);while(true){
if((i__39087_39091 < count__39086_39090))
{var node_39092 = cljs.core._nth.call(null,chunk__39085_39089,i__39087_39091);goog.dom.classes.toggle(node_39092,class$);
{
var G__39093 = seq__39084_39088;
var G__39094 = chunk__39085_39089;
var G__39095 = count__39086_39090;
var G__39096 = (i__39087_39091 + (1));
seq__39084_39088 = G__39093;
chunk__39085_39089 = G__39094;
count__39086_39090 = G__39095;
i__39087_39091 = G__39096;
continue;
}
} else
{var temp__4126__auto___39097 = cljs.core.seq.call(null,seq__39084_39088);if(temp__4126__auto___39097)
{var seq__39084_39098__$1 = temp__4126__auto___39097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39084_39098__$1))
{var c__4314__auto___39099 = cljs.core.chunk_first.call(null,seq__39084_39098__$1);{
var G__39100 = cljs.core.chunk_rest.call(null,seq__39084_39098__$1);
var G__39101 = c__4314__auto___39099;
var G__39102 = cljs.core.count.call(null,c__4314__auto___39099);
var G__39103 = (0);
seq__39084_39088 = G__39100;
chunk__39085_39089 = G__39101;
count__39086_39090 = G__39102;
i__39087_39091 = G__39103;
continue;
}
} else
{var node_39104 = cljs.core.first.call(null,seq__39084_39098__$1);goog.dom.classes.toggle(node_39104,class$);
{
var G__39105 = cljs.core.next.call(null,seq__39084_39098__$1);
var G__39106 = null;
var G__39107 = (0);
var G__39108 = (0);
seq__39084_39088 = G__39105;
chunk__39085_39089 = G__39106;
count__39086_39090 = G__39107;
i__39087_39091 = G__39108;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39117__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__39113_39118 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39114_39119 = null;var count__39115_39120 = (0);var i__39116_39121 = (0);while(true){
if((i__39116_39121 < count__39115_39120))
{var node_39122 = cljs.core._nth.call(null,chunk__39114_39119,i__39116_39121);goog.dom.classes.set(node_39122,classes_39117__$1);
{
var G__39123 = seq__39113_39118;
var G__39124 = chunk__39114_39119;
var G__39125 = count__39115_39120;
var G__39126 = (i__39116_39121 + (1));
seq__39113_39118 = G__39123;
chunk__39114_39119 = G__39124;
count__39115_39120 = G__39125;
i__39116_39121 = G__39126;
continue;
}
} else
{var temp__4126__auto___39127 = cljs.core.seq.call(null,seq__39113_39118);if(temp__4126__auto___39127)
{var seq__39113_39128__$1 = temp__4126__auto___39127;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39113_39128__$1))
{var c__4314__auto___39129 = cljs.core.chunk_first.call(null,seq__39113_39128__$1);{
var G__39130 = cljs.core.chunk_rest.call(null,seq__39113_39128__$1);
var G__39131 = c__4314__auto___39129;
var G__39132 = cljs.core.count.call(null,c__4314__auto___39129);
var G__39133 = (0);
seq__39113_39118 = G__39130;
chunk__39114_39119 = G__39131;
count__39115_39120 = G__39132;
i__39116_39121 = G__39133;
continue;
}
} else
{var node_39134 = cljs.core.first.call(null,seq__39113_39128__$1);goog.dom.classes.set(node_39134,classes_39117__$1);
{
var G__39135 = cljs.core.next.call(null,seq__39113_39128__$1);
var G__39136 = null;
var G__39137 = (0);
var G__39138 = (0);
seq__39113_39118 = G__39135;
chunk__39114_39119 = G__39136;
count__39115_39120 = G__39137;
i__39116_39121 = G__39138;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39143_39147 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39144_39148 = null;var count__39145_39149 = (0);var i__39146_39150 = (0);while(true){
if((i__39146_39150 < count__39145_39149))
{var node_39151 = cljs.core._nth.call(null,chunk__39144_39148,i__39146_39150);goog.dom.setTextContent(node_39151,value);
{
var G__39152 = seq__39143_39147;
var G__39153 = chunk__39144_39148;
var G__39154 = count__39145_39149;
var G__39155 = (i__39146_39150 + (1));
seq__39143_39147 = G__39152;
chunk__39144_39148 = G__39153;
count__39145_39149 = G__39154;
i__39146_39150 = G__39155;
continue;
}
} else
{var temp__4126__auto___39156 = cljs.core.seq.call(null,seq__39143_39147);if(temp__4126__auto___39156)
{var seq__39143_39157__$1 = temp__4126__auto___39156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39143_39157__$1))
{var c__4314__auto___39158 = cljs.core.chunk_first.call(null,seq__39143_39157__$1);{
var G__39159 = cljs.core.chunk_rest.call(null,seq__39143_39157__$1);
var G__39160 = c__4314__auto___39158;
var G__39161 = cljs.core.count.call(null,c__4314__auto___39158);
var G__39162 = (0);
seq__39143_39147 = G__39159;
chunk__39144_39148 = G__39160;
count__39145_39149 = G__39161;
i__39146_39150 = G__39162;
continue;
}
} else
{var node_39163 = cljs.core.first.call(null,seq__39143_39157__$1);goog.dom.setTextContent(node_39163,value);
{
var G__39164 = cljs.core.next.call(null,seq__39143_39157__$1);
var G__39165 = null;
var G__39166 = (0);
var G__39167 = (0);
seq__39143_39147 = G__39164;
chunk__39144_39148 = G__39165;
count__39145_39149 = G__39166;
i__39146_39150 = G__39167;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39172_39176 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39173_39177 = null;var count__39174_39178 = (0);var i__39175_39179 = (0);while(true){
if((i__39175_39179 < count__39174_39178))
{var node_39180 = cljs.core._nth.call(null,chunk__39173_39177,i__39175_39179);goog.dom.forms.setValue(node_39180,value);
{
var G__39181 = seq__39172_39176;
var G__39182 = chunk__39173_39177;
var G__39183 = count__39174_39178;
var G__39184 = (i__39175_39179 + (1));
seq__39172_39176 = G__39181;
chunk__39173_39177 = G__39182;
count__39174_39178 = G__39183;
i__39175_39179 = G__39184;
continue;
}
} else
{var temp__4126__auto___39185 = cljs.core.seq.call(null,seq__39172_39176);if(temp__4126__auto___39185)
{var seq__39172_39186__$1 = temp__4126__auto___39185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39172_39186__$1))
{var c__4314__auto___39187 = cljs.core.chunk_first.call(null,seq__39172_39186__$1);{
var G__39188 = cljs.core.chunk_rest.call(null,seq__39172_39186__$1);
var G__39189 = c__4314__auto___39187;
var G__39190 = cljs.core.count.call(null,c__4314__auto___39187);
var G__39191 = (0);
seq__39172_39176 = G__39188;
chunk__39173_39177 = G__39189;
count__39174_39178 = G__39190;
i__39175_39179 = G__39191;
continue;
}
} else
{var node_39192 = cljs.core.first.call(null,seq__39172_39186__$1);goog.dom.forms.setValue(node_39192,value);
{
var G__39193 = cljs.core.next.call(null,seq__39172_39186__$1);
var G__39194 = null;
var G__39195 = (0);
var G__39196 = (0);
seq__39172_39176 = G__39193;
chunk__39173_39177 = G__39194;
count__39174_39178 = G__39195;
i__39175_39179 = G__39196;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_39207 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39203_39208 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39204_39209 = null;var count__39205_39210 = (0);var i__39206_39211 = (0);while(true){
if((i__39206_39211 < count__39205_39210))
{var node_39212 = cljs.core._nth.call(null,chunk__39204_39209,i__39206_39211);node_39212.innerHTML = value_39207;
{
var G__39213 = seq__39203_39208;
var G__39214 = chunk__39204_39209;
var G__39215 = count__39205_39210;
var G__39216 = (i__39206_39211 + (1));
seq__39203_39208 = G__39213;
chunk__39204_39209 = G__39214;
count__39205_39210 = G__39215;
i__39206_39211 = G__39216;
continue;
}
} else
{var temp__4126__auto___39217 = cljs.core.seq.call(null,seq__39203_39208);if(temp__4126__auto___39217)
{var seq__39203_39218__$1 = temp__4126__auto___39217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39203_39218__$1))
{var c__4314__auto___39219 = cljs.core.chunk_first.call(null,seq__39203_39218__$1);{
var G__39220 = cljs.core.chunk_rest.call(null,seq__39203_39218__$1);
var G__39221 = c__4314__auto___39219;
var G__39222 = cljs.core.count.call(null,c__4314__auto___39219);
var G__39223 = (0);
seq__39203_39208 = G__39220;
chunk__39204_39209 = G__39221;
count__39205_39210 = G__39222;
i__39206_39211 = G__39223;
continue;
}
} else
{var node_39224 = cljs.core.first.call(null,seq__39203_39218__$1);node_39224.innerHTML = value_39207;
{
var G__39225 = cljs.core.next.call(null,seq__39203_39218__$1);
var G__39226 = null;
var G__39227 = (0);
var G__39228 = (0);
seq__39203_39208 = G__39225;
chunk__39204_39209 = G__39226;
count__39205_39210 = G__39227;
i__39206_39211 = G__39228;
continue;
}
}
} else
{}
}
break;
}
}catch (e39202){if((e39202 instanceof Error))
{var e_39229 = e39202;domina.replace_children_BANG_.call(null,content,value_39207);
} else
{throw e39202;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39236_39240 = cljs.core.seq.call(null,children);var chunk__39237_39241 = null;var count__39238_39242 = (0);var i__39239_39243 = (0);while(true){
if((i__39239_39243 < count__39238_39242))
{var child_39244 = cljs.core._nth.call(null,chunk__39237_39241,i__39239_39243);frag.appendChild(child_39244);
{
var G__39245 = seq__39236_39240;
var G__39246 = chunk__39237_39241;
var G__39247 = count__39238_39242;
var G__39248 = (i__39239_39243 + (1));
seq__39236_39240 = G__39245;
chunk__39237_39241 = G__39246;
count__39238_39242 = G__39247;
i__39239_39243 = G__39248;
continue;
}
} else
{var temp__4126__auto___39249 = cljs.core.seq.call(null,seq__39236_39240);if(temp__4126__auto___39249)
{var seq__39236_39250__$1 = temp__4126__auto___39249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39236_39250__$1))
{var c__4314__auto___39251 = cljs.core.chunk_first.call(null,seq__39236_39250__$1);{
var G__39252 = cljs.core.chunk_rest.call(null,seq__39236_39250__$1);
var G__39253 = c__4314__auto___39251;
var G__39254 = cljs.core.count.call(null,c__4314__auto___39251);
var G__39255 = (0);
seq__39236_39240 = G__39252;
chunk__39237_39241 = G__39253;
count__39238_39242 = G__39254;
i__39239_39243 = G__39255;
continue;
}
} else
{var child_39256 = cljs.core.first.call(null,seq__39236_39250__$1);frag.appendChild(child_39256);
{
var G__39257 = cljs.core.next.call(null,seq__39236_39250__$1);
var G__39258 = null;
var G__39259 = (0);
var G__39260 = (0);
seq__39236_39240 = G__39257;
chunk__39237_39241 = G__39258;
count__39238_39242 = G__39259;
i__39239_39243 = G__39260;
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
return (function (p1__39230_SHARP_,p2__39231_SHARP_){return f.call(null,p1__39230_SHARP_,p2__39231_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__39262 = list_thing;if(G__39262)
{var bit__4208__auto__ = (G__39262.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__39262.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39262.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39262);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39262);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__39263 = content;if(G__39263)
{var bit__4208__auto__ = (G__39263.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__39263.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39263.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39263);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39263);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__39264 = content;if(G__39264)
{var bit__4208__auto__ = (G__39264.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__39264.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39264.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39264);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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
